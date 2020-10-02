// REACT
import React, { Fragment, useState } from "react";

// COMPONENTS & STYLED
import { Card } from "./styles";
import ModalCharacters from "./ModalCharacters";

export interface Props {
  gender?: string | undefined;
  image: string;
  isLocationsEpisodes?: boolean;
  name: string;
  species?: string | undefined;
  style?: React.CSSProperties;
  type?: string | undefined;
}

const CardCharacters: React.SFC<Props> = ({
  gender,
  image,
  isLocationsEpisodes,
  name,
  species,
  style,
  type,
}) => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <Fragment>
      <Card
        className={isLocationsEpisodes ? "col-5" : "col-md-2 pt-4"}
        id={isLocationsEpisodes ? "disable" : ""}
        onClick={() => setOpenModal(true)}
        disabled={isLocationsEpisodes}
        style={style}
      >
        <div className="card rounded-lg w-100 shadow-sm py-2 px-2">
          <img
            src={image}
            className="card-img-top"
            alt="..."
            width="500"
            height={isLocationsEpisodes ? "150" : "200"}
          />
          <div className="card-body">
            {isLocationsEpisodes ? (
              <h6 className="card-title text-center custom">{name}</h6>
            ) : (
              <h5 className="card-title text-center custom">{name}</h5>
            )}
          </div>
        </div>
      </Card>
      <ModalCharacters
        openModal={openModal}
        closeModal={() => setOpenModal(false)}
        name={name}
        species={species}
        type={type}
        gender={gender}
        image={image}
      />
    </Fragment>
  );
};

export default CardCharacters;
