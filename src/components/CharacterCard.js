import React from 'react'
import { Card, Image, Icon } from "semantic-ui-react";

export default function CharacterCard(props) {
  return (
    <Card>
      <span className="character-list">
        <Image className="character-image" src={props.image} alt="" />
          <h3 className="character-name">{props.name}</h3>
          <p className="character-status">{props.status}</p>
          <p className="character-species"> Species: {props.species}</p>
          <p className="character-origin"> Origin: {props.origin}</p>
          <Card.Content extra>
            <Icon name='video'/>Episodes: {props.episode.length}
          </Card.Content>
      </span>
    </Card>
  );
}
