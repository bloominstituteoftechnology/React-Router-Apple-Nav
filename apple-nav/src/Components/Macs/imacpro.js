import React from "react";
import styled from "styled-components";
import ImacP from "../../images/imacpro.jpg";

const Imacproimg = styled.img `
    min-width: 100%;
    max-width: 100%;
    height: auto;
`;

const Imacpro = () => {
    return (
        <div>
            <Imacproimg src={ImacP}></Imacproimg>
        </div>
    );
};

export default Imacpro;