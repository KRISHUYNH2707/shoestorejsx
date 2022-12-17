import React, { Component } from "react";
import Modal from "./Modal";

export default class ProductItem extends Component {
      
    render() {
        // console.log(this.props)
        return (
            <>
                <div className="card">
                    <img
                        className="card-img-top"
                        src={this.props.element.image}
                        alt="#"
                    />
                    <div className="card-body">
                        <h4 className="card-title">
                            {this.props.element.name}
                        </h4>
                        <p className="card-text">
                            {this.props.element.shortDescription}
                        </p>
                        <h3>${this.props.element.price}</h3>

                        <button
                            type="button"
                            className="btn btn-primary"
                            data-toggle="modal"
                            data-target="#exampleModal"
                            onClick={() => {
                                console.log(this.props.element)
                                this.props.getShoeDetails(this.props.element)
                            }}
                        >
                            SHOW DESCRIPTION
                        </button>
                    </div>
                </div>
                
            </>
        );
    }
}
