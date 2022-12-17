import React, { Component } from "react";
import ProductList from "./ProductList";
import data from "../../data/data.json";
import Modal from "./Modal.jsx";

export default class Layout extends Component {
    state = {
      shoeDetails:data[0],
    };

    getShoeDetails = (shoe) => {
        this.setState({
          shoeDetails: shoe,
        });
    };

    render() {
        return (
            <div>
                <h3 className="mt-5 text-center">SHOES SHOP</h3>
                <ProductList data={data} getShoeDetails={this.getShoeDetails}></ProductList>
                <Modal shoeDetails={this.state.shoeDetails}></Modal>
            </div>
        );
    }
}
