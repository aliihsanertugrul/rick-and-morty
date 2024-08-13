import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getSingleCharacters } from '../services/characterService';
import { Character } from '../types/types'; // Import the Character type

const CharacterDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [characterDetail, setCharacterDetail] = useState<Character | null>(null); // Use Character type

  useEffect(() => {
    const fetchCharacter = async () => {
      if (id) {
        try {
          const data = await getSingleCharacters(parseInt(id)); // Ensure id is a number
          setCharacterDetail(data);
        } catch (error) {
          console.error("Error fetching character details:", error);
        }
      }
    };

    fetchCharacter();
  }, [id]);

  // Render loading state or error message if necessary
  if (!characterDetail) {
    return <div>Loading...</div>;
  }

  return (
    <div className='detail-container'>
      <div>
      <h1>{characterDetail.name}</h1>
      <img src={characterDetail.image} alt={characterDetail.name} />
      </div>
      <div className='specialities'>
      <p><span>Status:</span> {characterDetail.status}</p>
      <p><span>Species:</span>  {characterDetail.species}</p>
      <p><span>Gender:</span>  {characterDetail.gender}</p>
      <p><span> Origin:</span> {characterDetail.origin.name}</p>
      <p><span>Location:</span>  {characterDetail.location.name}</p>
      </div>
    </div>
  );
};

export default CharacterDetail;
