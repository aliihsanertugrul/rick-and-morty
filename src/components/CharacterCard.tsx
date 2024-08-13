import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Character } from "../types/types";
import { getSingleCharacters } from "../services/characterService";
import { useNavigate } from "react-router-dom";

type CharacterCardProps = {
  character: Character;
};

const CharacterCard: React.FC<CharacterCardProps> = ({ character }) => {
  const { id, name, species, image } = character;
  const navigate = useNavigate();

  const handleDetail = async (id: number) => {
    navigate(`/${id}`);
  };

  return (
    <Card>
      <Card.Img variant="top" src={image} alt={name} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>Species: {species}</Card.Text>
        <Button
          variant="primary"
          onClick={() => {
            handleDetail(id);
          }}
        >
          Details
        </Button>
      </Card.Body>
    </Card>
  );
};

export default CharacterCard;
