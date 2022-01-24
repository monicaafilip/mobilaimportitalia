import React from "react";
import MultiRangeSlider from "../../../components/multiRangeSlider/multiRangeSlider";

import "./filters.scss";

class Filters extends React.Component {
  state = {
    kitchen: false,
    bathroom: false,
    sofa: false,
    wardrobe: false,
    bed: false,
    table: false,
    chair: false,
    fridge: false,
    mattress: false,
    armchair: false,
  };
  onCheckKitchen = (event) => {
    this.setState(() => ({
      kitchen: !this.state.kitchen,
      bathroom: false,
      sofa: false,
      wardrobe: false,
      bed: false,
      table: false,
      chair: false,
      fridge: false,
      mattress: false,
      armchair: false,
    }));
    if (event.target.checked) this.props.filter("bucatarie");
    else this.props.renderAll();
  };
  onCheckSofa = (event) => {
    this.setState(() => ({
      sofa: !this.state.sofa,
      kitchen: false,
      bathroom: false,
      wardrobe: false,
      bed: false,
      table: false,
      chair: false,
      fridge: false,
      mattress: false,
      armchair: false,
    }));
    if (event.target.checked) this.props.filter("canapea");
    else this.props.renderAll();
  };
  onCheckBathroom = (event) => {
    this.setState(() => ({
      bathroom: !this.state.bathroom,
      kitchen: false,
      sofa: false,
      wardrobe: false,
      bed: false,
      table: false,
      chair: false,
      fridge: false,
      mattress: false,
      armchair: false,
    }));
    if (event.target.checked) this.props.filter("baie");
    else this.props.renderAll();
  };
  onCheckWardrobe = (event) => {
    this.setState(() => ({
      wardrobe: !this.state.wardrobe,
      kitchen: false,
      bathroom: false,
      sofa: false,
      bed: false,
      table: false,
      chair: false,
      fridge: false,
      mattress: false,
      armchair: false,
    }));
    if (event.target.checked) this.props.filter("dulap");
    else this.props.renderAll();
  };
  onCheckBed = (event) => {
    this.setState(() => ({
      bed: !this.state.bed,
      kitchen: false,
      bathroom: false,
      sofa: false,
      wardrobe: false,
      table: false,
      chair: false,
      fridge: false,
      mattress: false,
      armchair: false,
    }));
    if (event.target.checked) this.props.filter("pat");
    else this.props.renderAll();
  };
  onCheckTable = (event) => {
    this.setState(() => ({
      table: !this.state.table,
      kitchen: false,
      bathroom: false,
      sofa: false,
      wardrobe: false,
      bed: false,
      chair: false,
      fridge: false,
      mattress: false,
      armchair: false,
    }));
    if (event.target.checked) this.props.filter("masa");
    else this.props.renderAll();
  };
  onCheckChair = (event) => {
    this.setState(() => ({
      chair: !this.state.chair,
      kitchen: false,
      bathroom: false,
      sofa: false,
      wardrobe: false,
      bed: false,
      table: false,
      fridge: false,
      mattress: false,
      armchair: false,
    }));
    if (event.target.checked) this.props.filter("scaun");
    else this.props.renderAll();
  };
  onCheckFridge = (event) => {
    this.setState(() => ({
      fridge: !this.state.fridge,
      kitchen: false,
      bathroom: false,
      sofa: false,
      wardrobe: false,
      bed: false,
      table: false,
      chair: false,
      mattress: false,
      armchair: false,
    }));
    if (event.target.checked) this.props.filter("frigider");
    else this.props.renderAll();
  };
  onCheckMattress = (event) => {
    this.setState(() => ({
      mattress: !this.state.mattress,
      kitchen: false,
      bathroom: false,
      sofa: false,
      wardrobe: false,
      bed: false,
      table: false,
      chair: false,
      fridge: false,
      armchair: false,
    }));
    if (event.target.checked) this.props.filter("saltea");
    else this.props.renderAll();
  };
  onCheckArmchair = (event) => {
    this.setState(() => ({
      armchair: !this.state.armchair,
      kitchen: false,
      bathroom: false,
      sofa: false,
      wardrobe: false,
      bed: false,
      table: false,
      chair: false,
      fridge: false,
      mattress: false,
    }));
    if (event.target.checked) this.props.filter("fotoliu");
    else this.props.renderAll();
  };

  onSubmit = (e) => {
    e.preventDefault();
  };
  render() {
    return (
      <div className="categorii">
        <form onSubmit={this.onSubmit}>
          <div className="form-check">
            <input
              checked={this.state.kitchen}
              type="checkbox"
              className="form-check-input"
              id="kitchen"
              onChange={(e) => this.onCheckKitchen(e)}
            />
            <label className="form-check-label" for="kitchen">
              Bucătărie
            </label>
          </div>
          <div className="form-check">
            <input
              checked={this.state.bathroom}
              type="checkbox"
              className="form-check-input"
              id="bathroom"
              onChange={(e) => this.onCheckBathroom(e)}
            />
            <label className="form-check-label" for="bathroom">
              Baie
            </label>
          </div>
          <div className="form-check">
            <input
              checked={this.state.sofa}
              type="checkbox"
              className="form-check-input"
              id="sofa"
              onChange={(e) => this.onCheckSofa(e)}
            />
            <label className="form-check-label" for="sofa">
              Canapea
            </label>
          </div>
          <div className="form-check">
            <input
              checked={this.state.wardrobe}
              type="checkbox"
              className="form-check-input"
              id="wardrobe"
              onChange={(e) => this.onCheckWardrobe(e)}
            />
            <label className="form-check-label" for="wardrobe">
              Dulap
            </label>
          </div>
          <div className="form-check">
            <input
              checked={this.state.bed}
              type="checkbox"
              className="form-check-input"
              id="bed"
              onChange={(e) => this.onCheckBed(e)}
            />
            <label className="form-check-label" for="bed">
              Pat
            </label>
          </div>
          <div className="form-check">
            <input
              checked={this.state.table}
              type="checkbox"
              className="form-check-input"
              id="table"
              onChange={(e) => this.onCheckTable(e)}
            />
            <label className="form-check-label" for="table">
              Masă
            </label>
          </div>
          <div className="form-check">
            <input
              checked={this.state.chair}
              type="checkbox"
              className="form-check-input"
              id="chair"
              onChange={(e) => this.onCheckChair(e)}
            />
            <label className="form-check-label" for="chair">
              Scaun
            </label>
          </div>
          <div className="form-check">
            <input
              checked={this.state.fridge}
              type="checkbox"
              className="form-check-input"
              id="fridge"
              onChange={(e) => this.onCheckFridge(e)}
            />
            <label className="form-check-label" for="fridge">
              Frigider
            </label>
          </div>
          <div className="form-check">
            <input
              checked={this.state.mattress}
              type="checkbox"
              className="form-check-input"
              id="mattress"
              onChange={(e) => this.onCheckMattress(e)}
            />
            <label className="form-check-label" for="mattress">
              Saltea
            </label>
          </div>
          <div className="form-check">
            <input
              checked={this.state.armchair}
              type="checkbox"
              className="form-check-input"
              id="armchair"
              onChange={(e) => this.onCheckArmchair(e)}
            />
            <label className="form-check-label" for="armchair">
              Fotoliu
            </label>
          </div>
        </form>
        <MultiRangeSlider
          min={0}
          max={10000}
          onChange={({ min, max }) => this.props.filterByPrice(min, max)}
        />
      </div>
    );
  }
}

export default Filters;
