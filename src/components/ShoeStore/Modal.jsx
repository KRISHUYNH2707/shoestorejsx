import React, { Component } from "react";
import ProductItem from "./ProductItem";

export default class Modal extends Component {


    render() {
        console.log(this.props.shoeDetails.name)
        return (
            <>
                <div>
                    {/* Button trigger modal */}
                    {/* Modal */}
                    <div
                        className="modal fade"
                        id="exampleModal"
                        tabIndex={-1}
                        role="dialog"
                        aria-labelledby="exampleModalLabel"
                        aria-hidden="true"
                    >
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5
                                        className="modal-title"
                                        id="exampleModalLabel"
                                    >
                                        {this.props.shoeDetails.name}
                                    </h5>
                                    <button
                                        type="button"
                                        className="close"
                                        data-dismiss="modal"
                                        aria-label="Close"
                                    >
                                        <span aria-hidden="true">×</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    {this.props.shoeDetails.description}
                                    <img width={400} src={this.props.shoeDetails.image} alt="" />
                                    <h3 className="text-primary">Price: {this.props.shoeDetails.price}$</h3>
                                </div>
                                <div>
                                    
                                </div>
                                <div className="modal-footer">
                                    <button
                                        type="button"
                                        className="btn btn-secondary"
                                        data-dismiss="modal"
                                    >
                                        Close
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
