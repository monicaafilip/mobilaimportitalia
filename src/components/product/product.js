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
      <Modal.Header closeButton>
        <Modal.Title className="title">{props.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img src={props.url} alt="produs" className="image" />
        {props.price === "" && props.size === "" && props.material === "" ? (
          <div className="info">
            Informațiile nu au fost adăugate încă. Pentru mai multe detalii
            sunați la: +40746 086 433!
          </div>
        ) : (
          <div className="info">
            {props.price === "" ? null : (
              <div className="price">
                <b>Preț:</b> {props.price} {"\u20AC"}
              </div>
            )}
            {props.size === "" ? null : (
              <div className="size">
                <b>Dimensiuni:</b> {props.size}
              </div>
            )}
            {props.material === "" ? null : (
              <div className="material">
                <b>Material:</b> {props.material}
              </div>
            )}
            {props.other === "" ? null : (
              <div className="other">
                <b>Alte informații:</b> {props.other}
              </div>
            )}
          </div>
        )}
      </Modal.Body>
    </Modal>
  );
}

const Product = ({ title, imageUrl, price, sales, size, material, other }) => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <div>
      <div className="card">
        <div className="outer-modal" onClick={() => setModalShow(true)}>
          <img className="card-img-top" src={imageUrl} alt="produs" />
          <div className="bottomright">
            Apăsați pe imagine pentru mai multe detalii!
          </div>
        </div>
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
          title={title}
          url={imageUrl}
          price={price}
          sales={sales}
          size={size}
          material={material}
          other={other}
        />
      </div>
    </div>
  );
};

export default Product;
