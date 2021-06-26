import React, { Component } from "react";
import "./Style.css"




class ModalSelect extends Component {


    render() {
        var options = ['-', '0', '1', '2', '3'];
        var createItem = function (X) {
            return <option>{X}</option>;
        };



        return (

            <div className="modalselect">
                <p>{this.props.para}</p>
                <select>{options.map(createItem)}</select>
            </div>




        )
    }
}

export default ModalSelect;
