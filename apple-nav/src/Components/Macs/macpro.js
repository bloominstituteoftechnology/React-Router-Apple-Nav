import React from "react";
import styled from "styled-components";
import MacP from "../../images/macpro.jpg";

const Macproimg = styled.img `
    min-width: 100%;
    max-width: 100%;
    height: auto;
`;

const Macpro = () => {
    return (
        <div>
            <Macproimg src={MacP}></Macproimg>
        </div>
    );
};

export default Macpro;