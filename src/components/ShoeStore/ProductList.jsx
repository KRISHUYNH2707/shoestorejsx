import React, { Component } from "react";
import ProductItem from "./ProductItem";

export default class ProductList extends Component {

    renderShoeList = () => {
        // console.log(this.props.data)
        const data = this.props.data
        // console.log(this.props.data)

        return data.map((element) => {
            return (
                <div className="col-4 my-4" key={element.id}>
                    <ProductItem element={element} getShoeDetails={this.props.getShoeDetails}></ProductItem>
                </div>
            )
        })
    }
    render() {
        // console.log(this.props)
        return (
            <div className='container'>
                <div className="row">{this.renderShoeList()}</div>
            </div>
        )
    }
}
