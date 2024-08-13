import React from 'react';
import CharacterCard from './CharacterCard';
import { Character } from '../types/types';

type AllCharactersProps = {
  charactersData: Character[];
};

const AllCharacters: React.FC<AllCharactersProps> = ({ charactersData }) => {
  return (
    <div className="character-container">
      {charactersData.map((item) => (
        <div className="character-card" key={item.id}>
          <CharacterCard character={item} />
        </div>
      ))}
    </div>
  );
};

export default AllCharacters;
