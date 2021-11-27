import React, {useState} from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Fuse from 'fuse.js';

import { Form, FormControl } from "react-bootstrap";

import "./directory.css";
import "../../App.css";

import MyNavbar from "../../components/mynavbar/mynavbar";
import Product from "../../components/product/product";
import Footer from "../../components/footer/footer";

import {selectProducts} from "../../redux/directory/directory.selectors";

const Directory = ({ products }) => {
  const [prods, setProds] = useState(products);
  
  const searchData = (pattern) => {
      if (!pattern) {
        setProds(products);
        return;
      }
	  const fuse = new Fuse(products,{
		keys:["id", "title"]
	  });
	  
      const result = fuse.search(pattern);
      const matches = [];

      if(!result.length){
          setProds([]);
      }
      else {
          result.forEach( ({item}) => {
              matches.push(item);
          });
          setProds(matches);
      }
	  console.log(prods);
	}
  return (
    <div className="App">
      <div className="container-fluid mainHomePage">
        <MyNavbar />

		<div className="search">
			<Form className="d-flex">
				<FormControl
				type="search"
				placeholder='Caută după categorie'
				className="me-2"
				onChange={(e) => searchData(e.target.value)}
				/>
			</Form>
			{/* {prods.length !== 0 && (
				<div className="dataResult">
				{prods.slice(0, 1).map((value, key) => {
					return (
					<a
						key={key}
						className="dataItem"
						href={value.link}
						target="_blank"
						rel="noreferrer"
					>
						<div>
						<p>{value.title}</p>
						</div>
					</a>
					);
				})}
				</div>
			)} */}
		</div>

        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
          <Masonry>
            {prods.map(({ id, ...otherProps }) => (
              <Product key={id} {...otherProps} />
            ))}
          </Masonry>
        </ResponsiveMasonry>
        <Footer />
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  products: selectProducts
});

export default connect(mapStateToProps)(Directory);
