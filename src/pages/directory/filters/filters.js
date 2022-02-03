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
    danila: false,
    cajvana: false,
    sales: false,
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

  onCheckCajvana = (event) => {
    this.setState(() => ({
      cajvana: !this.state.cajvana,
      danila: false,
    }));
    if (event.target.checked) {
      this.props.filterLocation("cajvana");
    } else {
      this.props.filterLocation(null);
    }
  };
  onCheckDanila = (event) => {
    this.setState(() => ({
      cajvana: false,
      danila: !this.state.danila,
    }));
    if (event.target.checked) {
      this.props.filterLocation("danila");
    } else {
      this.props.filterLocation(null);
    }
  };

  onSales = (event) => {
    this.setState(() => ({
      sales: !this.state.sales,
    }));
    if (event.target.checked) {
      this.props.filterSale("sales");
    } else {
      this.props.filterSale(null);
    }
  };

  onSubmit = (e) => {
    e.preventDefault();
  };

  componentDidMount() {
    const kitchen = localStorage.getItem("kitchen");
    const bathroom = localStorage.getItem("bathroom");
    const sofa = localStorage.getItem("sofa");
    const wardrobe = localStorage.getItem("wardrobe");
    const bed = localStorage.getItem("bed");
    const table = localStorage.getItem("table");
    const chair = localStorage.getItem("chair");
    const fridge = localStorage.getItem("fridge");
    const mattress = localStorage.getItem("mattress");
    const armchair = localStorage.getItem("armchair");
    const danila = localStorage.getItem("danila");
    const cajvana = localStorage.getItem("cajvana");

    this.setState({ kitchen: kitchen === "true" ? true : false });
    this.setState({ bathroom: bathroom === "true" ? true : false });
    this.setState({ sofa: sofa === "true" ? true : false });
    this.setState({ wardrobe: wardrobe === "true" ? true : false });
    this.setState({ bed: bed === "true" ? true : false });
    this.setState({ table: table === "true" ? true : false });
    this.setState({ chair: chair === "true" ? true : false });
    this.setState({ fridge: fridge === "true" ? true : false });
    this.setState({ mattress: mattress === "true" ? true : false });
    this.setState({ armchair: armchair === "true" ? true : false });
    this.setState({ danila: danila === "true" ? true : false });
    this.setState({ cajvana: cajvana === "true" ? true : false });
  }

  componentDidUpdate(nextProps, nextState) {
    localStorage.setItem("kitchen", "" + this.state.kitchen);
    localStorage.setItem("bathroom", "" + this.state.bathroom);
    localStorage.setItem("sofa", "" + this.state.sofa);
    localStorage.setItem("wardrobe", "" + this.state.wardrobe);
    localStorage.setItem("bed", "" + this.state.bed);
    localStorage.setItem("table", "" + this.state.table);
    localStorage.setItem("chair", "" + this.state.chair);
    localStorage.setItem("fridge", "" + this.state.fridge);
    localStorage.setItem("mattress", "" + this.state.mattress);
    localStorage.setItem("armchair", "" + this.state.armchair);
    localStorage.setItem("danila", "" + this.state.danila);
    localStorage.setItem("cajvana", "" + this.state.cajvana);
  }

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
            <label className="form-check-label" htmlFor="kitchen">
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
            <label className="form-check-label" htmlFor="bathroom">
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
            <label className="form-check-label" htmlFor="sofa">
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
            <label className="form-check-label" htmlFor="wardrobe">
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
            <label className="form-check-label" htmlFor="bed">
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
            <label className="form-check-label" htmlFor="table">
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
            <label className="form-check-label" htmlFor="chair">
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
            <label className="form-check-label" htmlFor="fridge">
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
            <label className="form-check-label" htmlFor="mattress">
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
            <label className="form-check-label" htmlFor="armchair">
              Fotoliu
            </label>
          </div>
        </form>
        <br />
        <div className="form-check">
          <input
            checked={this.state.sales}
            type="checkbox"
            className="form-check-input"
            id="sales"
            onChange={(e) => this.onSales(e)}
          />
          <label className="form-check-label" htmlFor="sales">
            Reduceri
          </label>
        </div>
        <MultiRangeSlider
          min={0}
          max={10000}
          onChange={({ min, max }) => this.props.filterByPrice(min, max)}
        />
        <div className="location">
          <div className="form-check">
            <input
              checked={this.state.cajvana}
              type="checkbox"
              className="form-check-input"
              id="cajvana"
              onChange={(e) => this.onCheckCajvana(e)}
            />
            <label className="form-check-label" htmlFor="cajvana">
              Cajvana
            </label>
          </div>
          <div className="form-check">
            <input
              checked={this.state.danila}
              type="checkbox"
              className="form-check-input"
              id="danila"
              onChange={(e) => this.onCheckDanila(e)}
            />
            <label className="form-check-label" htmlFor="danila">
              Dănila
            </label>
          </div>
        </div>
      </div>
    );
  }
}

export default Filters;
