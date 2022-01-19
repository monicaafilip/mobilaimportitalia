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
} from "../../redux/directory/directory.actions";

import Filters from "./filters";
import Pagination from "../../components/pagination/pagination.component";

import "./directory.scss";
import "../../App.css";

let perPage = 10;

class Directory extends React.Component {
  constructor(props) {
    super(props);
    const pathname = props.match.path;

    let pageView;
    if (pathname === "*") pageView = "/not-found";
    else pageView = pathname;

    ReactGA.pageview(pageView);

    this.goToPage = this.goToPage.bind(this);
    this.filter = this.filter.bind(this);
    this.renderAll = this.renderAll.bind(this);
  }
  componentDidMount() {
    this.props.dispatch(loadData({ countPerPage: perPage }));
  }

  renderAll() {
    this.props.dispatch(loadData({ countPerPage: perPage }));
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
    let currentPage = this.props.state.prods.currentPage;
    let filteredPages = this.props.state.prods.filteredPages;
    return (
      <div className="App">
        <div className="container-fluid mainHomePage">
          <MyNavbar />
          <Filters filter={this.filter} renderAll={this.renderAll} />
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
          >
            <Masonry>
              {products?.map(({ id, ...otherProps }) => (
                <Product key={id} {...otherProps} />
              ))}
            </Masonry>
          </ResponsiveMasonry>

          <Pagination
            currentPage={currentPage}
            lastPage={filteredPages}
            totalPageCount={this.props.state.prods.filteredPages}
            goToPage={this.goToPage}
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
