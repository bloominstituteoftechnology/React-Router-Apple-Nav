import React from "react";
import styled from "styled-components";
import Imac from "../../images/imac.jpg";

const Imacimg = styled.img `
    min-width: 100%;
    height: auto;
`;

const Imacpage = () => {
    return (
        <div>
            <Imacimg src={Imac}></Imacimg>
        </div>
    );
};

export default Imacpage;