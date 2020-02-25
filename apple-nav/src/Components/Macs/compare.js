import React from "react";
import styled from "styled-components";
import Comp from "../../images/compare.jpg";

const Compimg = styled.img `
    min-width: 100%;
    max-width: 100%;
    height: auto;
`;

const Compare = () => {
    return (
        <div>
            <Compimg src={Comp}></Compimg>
        </div>
    );
};

export default Compare;