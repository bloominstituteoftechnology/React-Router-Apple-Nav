import React, { Fragment } from "react";
import { Link, Route } from "react-router-dom";
import products from "../../data";


function ProductPage(props) {
    const product = products.find(
        event => event.id === props.match.params.id);

}

