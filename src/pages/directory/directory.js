import React from "react";
import { connect } from "react-redux";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

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
  componentDidMount() {
    const params = new URLSearchParams(window.location.search);
    const pageQueryParam = params.get("page");
    if (!pageQueryParam) {
      window.history.pushState({ page: 1 }, "title 1", "?page=1");
    } else {
    }

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
          <button
            onClick={() => {
              this.previousPage();
            }}
          >
            Previous
          </button>
          <button
            onClick={() => {
              this.nextPage();
            }}
          >
            Next page
          </button>

          <ul className="pagination-list">
            {[...Array(this.props.state.prods.filteredPages)].map(
              (value, index) => (
                <button
                  key={index}
                  className={`button pagination-link ${
                    this.props.state.currentPage === index + 1
                      ? "is-current"
                      : ""
                  }`}
                  aria-label="Page 1"
                  onClick={() => this.goToPage(index + 1)}
                  aria-current="page"
                >
                  {index + 1}
                </button>
              )
            )}
          </ul>
          {/* <input
            onChange={(e) => {
              this.filter(e);
            }}
            style={{ width: "100%" }}
            placeholder="Filter by"
            type="text"
          /> */}
          <button onClick={() => this.filter("bucatarie")}>Bucătărie</button>
          <button onClick={() => this.filter("baie")}>Baie</button>
          <button onClick={() => this.filter("canapea")}>Canapele</button>
          <button onClick={() => this.filter("dulap")}>Dulapuri</button>
          <button onClick={() => this.filter("pat")}>Paturi</button>
          <button onClick={() => this.filter("masa")}>Mese</button>
          <button onClick={() => this.filter("scaun")}>Scaune</button>
          <button onClick={() => this.filter("frigider")}>Frigidere</button>
          <button onClick={() => this.filter("saltea")}>Saltele</button>
          <button onClick={() => this.filter("fotoliu")}>Fotolii</button>
          <button onClick={() => this.filter("vandut")}>Vândute</button>

          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
          >
            <Masonry>
              {products.map(({ id, ...otherProps }) => (
                <Product key={id} {...otherProps} />
              ))}
            </Masonry>
          </ResponsiveMasonry>
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
