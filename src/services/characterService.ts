import axios from 'axios';
import { CharacterResponse, FilterCharacterProps } from '../types/types';


export const getAllCharacters = async (): Promise<CharacterResponse> => {
  try {
    const response = await axios.get<CharacterResponse>("https://rickandmortyapi.com/api/character");
    return response.data;
  } catch (error) {
    console.error('Veri çekme hatası:', error);
    throw new Error("Someting went wrong");
  }
};


export const getSingleCharacters =async (id : number)=>{
    try {
        const response =await axios.get(`https://rickandmortyapi.com/api/character/${id}`)
        return response.data
    } catch (error) {
        console.log(error);
        throw new Error("Someting went wrong");
    }
}

export const getFilteredCharacter=async ({name="",status="alive",species="",type="",gender=""} : FilterCharacterProps)=>{
  try {
    const response= await axios.get(`https://rickandmortyapi.com/api/character/?name=${name}&status=${status}&species=${species}&type=${type}&gender=${gender}`)
    return response.data
  } catch (error) {
    console.log(error);
    throw new Error("Someting went wrong");
  }
}