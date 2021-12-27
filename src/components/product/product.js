import React from "react";

import Modal from "react-bootstrap/Modal";

import "./product.css";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
    centered
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <img src={props.url} alt="produs" className="image" />
      </Modal.Body>
    </Modal>
  );
}

const Product = ({ title, imageUrl }) => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <div>
      <div className="card">
        <div onClick={() => setModalShow(true)}>
          <img className="card-img-top" src={imageUrl} alt="produs" />
        </div>
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
          url={imageUrl}
        />
      </div>
    </div>
  );
};

export default Product;
