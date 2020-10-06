// LIBS
import Modal from "react-modal";

// REACT
import React from "react";

// COMPONENTS & STYLED
import Cards from "../Cards";
import { alternativeModalStyles, modalStyles, Styles } from "./styles";

// TYPES
import { Character } from "../../../apollo/types";

interface Props {
  airDate?: string;
  characters?: [Character];
  closeModal: () => void;
  dimension?: string;
  episode?: string;
  gender?: string;
  image?: string | null;
  isCharacters?: boolean;
  isEpisodes?: boolean;
  name: string;
  openModal: boolean;
  residents?: [Character];
  species?: string;
  type?: string;
}

const Modals = ({
  airDate,
  characters,
  closeModal,
  dimension,
  episode,
  image,
  gender,
  isCharacters,
  isEpisodes,
  name,
  openModal,
  residents,
  species,
  type,
}: Props) => {
  const optionRender = () => {
    if (type === "") return "...";
    if (airDate) return airDate;
    return type;
  };
  const generalData: [Character] | undefined = residents || characters;
  return (
    <Modal
      isOpen={openModal}
      onRequestClose={closeModal}
      style={isCharacters ? modalStyles : alternativeModalStyles}
      ariaHideApp={false}
    >
      {isCharacters ? (
        <>
          <div className="pr-2 pb-3">
            <button type="button" className="close" onClick={closeModal}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            {image && (
              <img
                src={image}
                className="card-img-top pb-3"
                alt="charactersImages"
              />
            )}
            <h4 className="modal-title text-center font-weight-bold custom">
              {name}
            </h4>
            <div className="pl-3 py-2">
              <h6
                className="row modal-title font-weight-bold pt-3"
                id="exampleModalLabel"
              >
                Type:
                <p className="montserrat pl-2 " style={Styles.text}>
                  {type === "" ? "..." : type}
                </p>
              </h6>
              <h6
                className="row modal-title font-weight-bold pt-3"
                id="exampleModalLabel"
              >
                Gender:
                <p className="montserrat pl-2" style={Styles.text}>
                  {gender}
                </p>
              </h6>
              <h6
                className="row modal-title font-weight-bold pt-3"
                id="exampleModalLabel"
              >
                Species:
                <p className="montserrat pl-2" style={Styles.text}>
                  {species}
                </p>
              </h6>
            </div>
          </div>
        </>
      ) : (
        <>
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
                  overflowY:
                    (generalData?.length || 0) < 5 ? "hidden" : "scroll",
                  height: "325px",
                }}
              >
                {generalData?.slice(0, 5).map(({ id, name, image }) => {
                  if (name !== null || image !== null) {
                    return (
                      <Cards
                        key={id || 0}
                        name={name}
                        image={image}
                        isModal
                        isCharacters
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
        </>
      )}
    </Modal>
  );
};

export default Modals;
