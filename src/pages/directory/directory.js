import React from "react";
import ReactGA from "react-ga";
import { connect } from "react-redux";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { Button, ButtonGroup, ButtonToolbar } from "react-bootstrap";

import "./directory.css";
import "../../App.css";

import MyNavbar from "../../components/mynavbar/mynavbar";
import Product from "../../components/product/product";
import Footer from "../../components/footer/footer";

import {
  loadData,
  loadNewPage,
  loadExactPage,
  filterByCategory,
} from "../../redux/directory/directory.actions";

class Directory extends React.Component {
  constructor(props) {
    super(props);
    const pathname = props.match.path;

    let pageView;
    if (pathname === "*") pageView = "/not-found";
    else pageView = pathname;

    ReactGA.pageview(pageView);
  }
  componentDidMount() {
    this.props.dispatch(loadData({ countPerPage: 10 }));
  }

  renderAll() {
    this.props.dispatch(loadData({ countPerPage: 10 }));
  }
  filter(cat) {
    this.props.dispatch(filterByCategory({ category: cat }));
  }
  nextPage() {
    this.props.dispatch(loadNewPage({ page: 1 }));
  }

  previousPage() {
    this.props.dispatch(loadNewPage({ page: -1 }));
  }

  goToPage(page) {
    this.props.dispatch(loadExactPage({ page }));
  }

  render() {
    let products = this.props.state.prods.filteredProducts;
    return (
      <div className="App">
        <div className="container-fluid mainHomePage">
          <MyNavbar />
          <div className="categorii">
            <Button
              className="categorie"
              variant="outline-dark"
              onClick={() => this.renderAll()}
            >
              Toate
            </Button>{" "}
            <Button
              className="categorie"
              variant="outline-dark"
              onClick={() => this.filter("bucatarie")}
            >
              Bucătărie
            </Button>{" "}
            <Button
              className="categorie"
              variant="outline-dark"
              onClick={() => this.filter("baie")}
            >
              Baie
            </Button>{" "}
            <Button
              className="categorie"
              variant="outline-dark"
              onClick={() => this.filter("canapea")}
            >
              Canapele
            </Button>{" "}
            <Button
              className="categorie"
              variant="outline-dark"
              onClick={() => this.filter("dulap")}
            >
              Dulapuri
            </Button>{" "}
            <Button
              className="categorie"
              variant="outline-dark"
              onClick={() => this.filter("pat")}
            >
              Paturi
            </Button>{" "}
            <Button
              className="categorie"
              variant="outline-dark"
              onClick={() => this.filter("masa")}
            >
              Mese
            </Button>{" "}
            <Button
              className="categorie"
              variant="outline-dark"
              onClick={() => this.filter("scaun")}
            >
              Scaune
            </Button>{" "}
            <Button
              className="categorie"
              variant="outline-dark"
              onClick={() => this.filter("frigider")}
            >
              Frigidere
            </Button>{" "}
            <Button
              className="categorie"
              variant="outline-dark"
              onClick={() => this.filter("saltea")}
            >
              Saltele
            </Button>{" "}
            <Button
              className="categorie"
              variant="outline-dark"
              onClick={() => this.filter("fotoliu")}
            >
              Fotolii
            </Button>{" "}
            <Button
              className="categorie"
              variant="outline-dark"
              onClick={() => this.filter("vandut")}
            >
              Vândute
            </Button>{" "}
          </div>
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
          >
            <Masonry>
              {products?.map(({ id, ...otherProps }) => (
                <Product key={id} {...otherProps} />
              ))}
            </Masonry>
          </ResponsiveMasonry>
          <div className="previous-next-buttons">
            <Button
              variant="outline-dark"
              onClick={() => {
                this.previousPage();
              }}
            >
              Previous page
            </Button>
            {"  "}
            <Button
              variant="outline-dark"
              onClick={() => {
                this.nextPage();
              }}
            >
              Next page
            </Button>
          </div>
          <ul className="pagination-list">
            <ButtonToolbar
              key="toolbar"
              aria-label="Toolbar with button groups"
            >
              <ButtonGroup
                key="group"
                className="me-2"
                aria-label="First group"
              >
                {[...Array(this.props.state.prods.filteredPages)].map(
                  (value, index) => (
                    <Button
                      key={index}
                      aria-label="Page 1"
                      onClick={() => this.goToPage(index + 1)}
                      aria-current="page"
                    >
                      {index + 1}
                    </Button>
                  )
                )}
              </ButtonGroup>
            </ButtonToolbar>
          </ul>
          <Footer />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { state };
}

export default connect(mapStateToProps)(Directory);
