import React from "react";
import styled from "styled-components";
import ProD from "../../images/prodisp.jpg";

const Prodimg = styled.img `
    min-width: 100%;
    max-width: 100%;
    height: auto;
`;

const Prodisplay = () => {
    return (
        <div>
            <Prodimg src={ProD}></Prodimg>
        </div>
    );
};

export default Prodisplay;