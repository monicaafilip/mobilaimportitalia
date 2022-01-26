import React from "react";
import ReactGA from "react-ga";
import { connect } from "react-redux";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

import MyNavbar from "../../components/mynavbar/mynavbar";
import Product from "../../components/product/product";
import Footer from "../../components/footer/footer";

import {
  loadData,
  loadNewPage,
  loadExactPage,
  filterByCategory,
  filterByPrice,
  filterByLocation,
} from "../../redux/directory/directory.actions";

import Filters from "./filters/filters";
import Pagination from "../../components/pagination/pagination.component";

import "./directory.scss";
import "../../App.css";

let perPage = 10;

class Directory extends React.Component {
  constructor(props) {
    super(props);
    const pathname = props.match.path;

    this.state = {
      minPrice: 0,
      maxPrice: 10000,
    };
    let pageView;
    if (pathname === "*") pageView = "/not-found";
    else pageView = pathname;

    ReactGA.pageview(pageView);

    this.goToPage = this.goToPage.bind(this);
    this.previousPage = this.previousPage.bind(this);
    this.nextPage = this.nextPage.bind(this);
    this.filter = this.filter.bind(this);
    this.filterPrice = this.filterPrice.bind(this);
    this.filterLocation = this.filterLocation.bind(this);
    this.renderAll = this.renderAll.bind(this);
  }
  componentDidMount() {
    this.props.dispatch(loadData({ countPerPage: perPage }));

    const minPrice = localStorage.getItem("minPrice");
    const maxPrice = localStorage.getItem("maxPrice");

    this.setState({ minPrice: minPrice === "true" ? true : false });
    this.setState({ maxPrice: maxPrice === "true" ? true : false });
  }
  componentDidUpdate(nextProps, nextState) {
    localStorage.setItem("minPrice", "" + this.state.minPrice);
    localStorage.setItem("maxPrice", "" + this.state.maxPrice);
  }
  renderAll() {
    this.props.dispatch(filterByCategory({ category: null }));
  }
  filter(cat) {
    this.props.dispatch(filterByCategory({ category: cat }));
  }
  filterPrice(min, max) {
    if (min === 0 && max === 10000) {
      if (min !== this.state.minPrice && max !== this.state.maxPrice)
        this.props.dispatch(
          filterByPrice({
            minValue: undefined,
            maxValue: undefined,
          })
        );
    }
    if (min !== this.state.minPrice || max !== this.state.maxPrice) {
      this.setState(() => ({
        minPrice: min,
        maxPrice: max,
      }));
      this.props.dispatch(
        filterByPrice({
          minValue: min,
          maxValue: max,
        })
      );
    }
  }
  filterLocation(loc) {
    this.props.dispatch(filterByLocation({ location: loc }));
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
    let products = this.props.state.prods.valuesPerPage;
    let currentPage = this.props.state.prods.currentPage;
    let filteredPages = this.props.state.prods.filteredPages;

    return (
      <div className="App">
        <div className="container-fluid mainHomePage">
          <MyNavbar />
          <div className="content">
            <Filters
              className="filters"
              filter={this.filter}
              renderAll={this.renderAll}
              filterByPrice={this.filterPrice}
              filterLocation={this.filterLocation}
            />

            <ResponsiveMasonry
              className="products"
              columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
            >
              <Masonry>
                {products?.map(({ id, ...otherProps }) => (
                  <Product key={id} {...otherProps} />
                ))}
              </Masonry>
            </ResponsiveMasonry>
          </div>
          <Pagination
            currentPage={currentPage}
            lastPage={filteredPages}
            totalPageCount={this.props.state.prods.filteredPages}
            goToPage={this.goToPage}
            previousPage={this.previousPage}
            nextPage={this.nextPage}
          />
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
