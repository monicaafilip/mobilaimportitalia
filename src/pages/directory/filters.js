import React from "react";
import { Button } from "react-bootstrap";

class Filters extends React.Component {
  render() {
    return (
      <div className="categorii">
        <Button
          className="categorie mt-1 mb-1"
          variant="outline-dark"
          onClick={() => this.props.renderAll()}
        >
          Toate
        </Button>{" "}
        <Button
          className="categorie mt-1 mb-1"
          variant="outline-dark"
          onClick={() => this.props.filter("bucatarie")}
        >
          Bucătărie
        </Button>{" "}
        <Button
          className="categorie mt-1 mb-1"
          variant="outline-dark"
          onClick={() => this.props.filter("baie")}
        >
          Baie
        </Button>{" "}
        <Button
          className="categorie mt-1 mb-1"
          variant="outline-dark"
          onClick={() => this.props.filter("canapea")}
        >
          Canapele
        </Button>{" "}
        <Button
          className="categorie mt-1 mb-1"
          variant="outline-dark"
          onClick={() => this.props.filter("dulap")}
        >
          Dulapuri
        </Button>{" "}
        <Button
          className="categorie mt-1 mb-1"
          variant="outline-dark"
          onClick={() => this.props.filter("pat")}
        >
          Paturi
        </Button>{" "}
        <Button
          className="categorie mt-1 mb-1"
          variant="outline-dark"
          onClick={() => this.props.filter("masa")}
        >
          Mese
        </Button>{" "}
        <Button
          className="categorie mt-1 mb-1"
          variant="outline-dark"
          onClick={() => this.props.filter("scaun")}
        >
          Scaune
        </Button>{" "}
        <Button
          className="categorie mt-1 mb-1"
          variant="outline-dark"
          onClick={() => this.props.filter("frigider")}
        >
          Frigidere
        </Button>{" "}
        <Button
          className="categorie mt-1 mb-1"
          variant="outline-dark"
          onClick={() => this.props.filter("saltea")}
        >
          Saltele
        </Button>{" "}
        <Button
          className="categorie mt-1 mb-1"
          variant="outline-dark"
          onClick={() => this.props.filter("fotoliu")}
        >
          Fotolii
        </Button>{" "}
        <Button
          className="categorie mt-1 mb-1"
          variant="outline-dark"
          onClick={() => this.props.filter("reduceri")}
        >
          Reduceri
        </Button>{" "}
      </div>
    );
  }
}

export default Filters;
