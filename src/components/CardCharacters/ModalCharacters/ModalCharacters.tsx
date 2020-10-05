// LIBS
import Modal from "react-modal";

// REACT
import React from "react";

// COMPONENTS & STYLED
import { modalStyles, Styles } from "./styles";

interface Props {
  openModal: boolean;
  closeModal: () => void;
  name: string | null;
  image: string | null;
  type: string | undefined;
  species: string | undefined;
  gender: string | undefined;
}

const ModalCharacters: React.SFC<Props> = ({
  openModal,
  closeModal,
  name,
  image,
  type,
  species,
  gender,
}) => {
  return (
    <Modal
      isOpen={openModal}
      onRequestClose={closeModal}
      style={modalStyles}
      ariaHideApp={false}
    >
      <div className="">
        <div className="pr-2 pb-3">
          <button type="button" className="close" onClick={closeModal}>
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">
          <img src={image || ""} className="card-img-top pb-3" alt="..." />
          <h4
            className="modal-title text-center font-weight-bold custom"
            id="exampleModalLabel"
          >
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
      </div>
    </Modal>
  );
};

export default ModalCharacters;
