// REACT
import React, { Fragment, useState } from "react";

// COMPONENTS & STYLED
import {Body, Card, Styles } from "./styles";
import ModalLocationsEpisodes from "./ModalLocationsEpisodes";

// TYPES
import { Character } from "../../apollo/types";

export interface Props {
  airDate?: string;
  characters?: [Character];
  dimension?: string;
  episode?: string;
  isEpisodes?: boolean;
  name: string;
  residents?: [Character];
  type?: string;
}

const CardCharacters: React.SFC<Props> = ({
  airDate,
  characters,
  dimension,
  episode,
  isEpisodes,
  name,
  residents,
  type,
}) => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <Fragment>
      <Card
        className="col-md-2"
        data-toggle="modal"
        onClick={() => setOpenModal(true)}
      >
        <Body className="card rounded-lg w-100">
          <h5 className="card-title text-center px-2 custom">{name}</h5>
          <div className="card-body">
            <h6
              className="card-subtitle text-center custom text-muted"
              style={Styles.attribute}
            >
              {dimension || episode}
            </h6>
          </div>
        </Body>
      </Card>
      <ModalLocationsEpisodes
        openModal={openModal}
        closeModal={() => setOpenModal(false)}
        name={name}
        dimension={dimension}
        type={type}
        episode={episode}
        airDate={airDate}
        characters={characters}
        residents={residents}
        isEpisodes={isEpisodes}
      />
    </Fragment>
  );
};

export default CardCharacters;
