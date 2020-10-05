// LIBS
import Modal from "react-modal";

// REACT
import React from "react";

// COMPONENTS & STYLED
import CardCharacters from "../../CardCharacters";
import { modalStyles, Styles } from "./styles";

// TYPES
import { Character } from "../../../apollo/types";

interface Props {
  airDate?: string;
  characters?: [Character];
  closeModal: () => void;
  dimension?: string;
  episode?: string;
  isEpisodes?: boolean;
  name: string;
  openModal: boolean;
  residents?: [Character];
  type?: string;
}

const ModalLocationsEpisodes = ({
  airDate,
  characters,
  closeModal,
  dimension,
  episode,
  isEpisodes,
  name,
  openModal,
  residents,
  type,
}: Props ) => {
  const optionRender = () => {
    if (type === "") return "...";
    if (airDate) return airDate;
    return type;
  };
  const generalData = residents || characters;
  return (
    <Modal
      isOpen={openModal}
      onRequestClose={closeModal}
      style={modalStyles}
      ariaHideApp={false}
      id="Modal"
    >
      <div className="w-100">
        <div className="pr-2 pb-3">
          <button type="button" className="close" onClick={closeModal}>
            <span>&times;</span>
          </button>
        </div>
        <div className="w-100">
          <h4
            className="modal-title text-center font-weight-bold custom"
            id="exampleModalLabel"
          >
            {name}
          </h4>
          <div className="pl-5 pt-2 w-100 ">
            <h6
              className="row modal-title font-weight-bold pt-3"
              id="exampleModalLabel"
            >
              {isEpisodes ? "Release date:" : "Type:"}
              <p className="montserrat pl-2 " style={Styles.text}>
                {optionRender()}
              </p>
            </h6>
            <h6
              className="row modal-title font-weight-bold pt-3"
              id="exampleModalLabel"
            >
              {isEpisodes ? "Episode:" : "Dimension:"}
              <p className="montserrat pl-2" style={Styles.text}>
                {dimension || episode}
              </p>
            </h6>
            <h5
              className="row modal-title font-weight-bold pb-2 pt-4"
              id="exampleModalLabel"
            >
              {isEpisodes ? "Characters:" : "Residents:"}
            </h5>
            <div
              className="row row-cols row-cols-xl-4 pl-1 pb-3 w-100"
              style={{
                overflowY: (generalData?.length || 0) < 5 ? "hidden" : "scroll",
                height: "325px",
              }}
            >
              {generalData?.slice(0, 5).map(({ id, name, image }) => {
                if (name !== null || image !== null) {
                  return (
                    <CardCharacters
                      key={id || 0}
                      name={name}
                      image={image}
                      isLocationsEpisodes
                      style={Styles.character}
                    />
                  );
                }
                return (
                  <h4 style={Styles.placeholder} key={id}>
                    No {isEpisodes ? "characters" : "residents"} found
                  </h4>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ModalLocationsEpisodes;
