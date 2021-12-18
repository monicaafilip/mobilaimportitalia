import React, { useState, useMemo } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Fuse from "fuse.js";

import { Form, FormControl } from "react-bootstrap";

import "./directory.css";
import "../../App.css";

import MyNavbar from "../../components/mynavbar/mynavbar";
import Product from "../../components/product/product";
import Footer from "../../components/footer/footer";

import { selectProducts } from "../../redux/directory/directory.selectors";
import Pagination from "../../components/pagination/pagination.component";

let PageSize = 10;

const Directory = ({ products }) => {
  const [prods, setProds] = useState(products);

  const searchData = (pattern) => {
    if (!pattern) {
      setProds(products);
      return;
    }
    const fuse = new Fuse(products, {
      keys: ["id", "title"],
    });

    const result = fuse.search(pattern);
    const matches = [];

    if (!result.length) {
      setProds([]);
    } else {
      result.forEach(({ item }) => {
        matches.push(item);
      });
      setProds(matches);
    }
  };
  const [currentPage, setCurrentPage] = useState(1);

  const currentProducts = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return prods.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);

  return (
    <div className="App">
      <div className="container-fluid mainHomePage">
        <MyNavbar />

        <div className="search">
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Caută după categorie"
              className="me-2"
              onChange={(e) => searchData(e.target.value)}
            />
          </Form>
        </div>

        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
          <Masonry>
            {currentProducts.map(({ id, ...otherProps }) => (
              <Product key={id} {...otherProps} />
            ))}
          </Masonry>
        </ResponsiveMasonry>
        <Pagination
          className="pagination-bar"
          currentPage={currentPage}
          totalCount={prods.length}
          pageSize={PageSize}
          onPageChange={(page) => setCurrentPage(page)}
        />
        <Footer />
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  products: selectProducts,
});

export default connect(mapStateToProps)(Directory);
