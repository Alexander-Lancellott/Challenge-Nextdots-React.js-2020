// REACT
import React, { useState } from "react";

// COMPONENTS & STYLED
import { Body, Card, Styles } from "./styles";
import Modals from "./Modals";

// TYPES
import { Character } from "../../apollo/types";

export interface Props {
  airDate?: string;
  characters?: [Character];
  dimension?: string;
  episode?: string;
  image?: string | null;
  gender?: string | undefined;
  isCharacters?: boolean;
  isEpisodes?: boolean;
  isModal?: boolean;
  name: string;
  residents?: [Character];
  species?: string | undefined;
  style?: React.CSSProperties;
  type?: string;
}

const Cards = ({
  airDate,
  characters,
  dimension,
  episode,
  image,
  gender,
  isCharacters,
  isEpisodes,
  isModal,
  name,
  residents,
  species,
  style,
  type,
}: Props) => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  return (
    <>
      <Card
        className={isModal ? "col-5" : "col-md-2 pt-4"}
        id={isModal ? "disable" : ""}
        onClick={() => setOpenModal(true)}
        disabled={isModal}
        style={style}
      >
        {isCharacters ? (
          <div className="bg-warning pt-2 px-2" style={Styles.card}>
            {image && (
              <img
                src={image}
                className="card-img-top"
                alt="CharacterImage"
                width="500"
                height={isModal ? "150" : "200"}
              />
            )}
            <div className="card-body">
              {isModal ? (
                <h6 className="card-title text-center custom">{name}</h6>
              ) : (
                <h5 className="card-title text-center custom">{name}</h5>
              )}
            </div>
          </div>
        ) : (
          <Body className="bg-warning  w-100">
            <h5 className="card-title text-center px-2 custom">{name}</h5>
            <div className="card-body">
              <h6
                className="card-subtitle text-center montserrat text-muted"
                style={Styles.attribute}
              >
                {dimension || episode}
              </h6>
            </div>
          </Body>
        )}
      </Card>
      <Modals
        openModal={openModal}
        closeModal={() => setOpenModal(false)}
        isCharacters={isCharacters}
        gender={gender}
        species={species}
        image= {image}
        name={name}
        dimension={dimension}
        type={type}
        episode={episode}
        airDate={airDate}
        characters={characters}
        residents={residents}
        isEpisodes={isEpisodes}
      />
    </>
  );
};

export default Cards;
