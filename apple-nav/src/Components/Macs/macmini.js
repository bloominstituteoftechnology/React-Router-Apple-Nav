import React from "react";
import styled from "styled-components";
import Macm from "../../images/macmini.jpg";

const Macminiimg = styled.img `
    min-width: 100%;
    max-width: 100%;
    height: auto;
`;

const Macmini = () => {
    return (
        <div>
            <Macminiimg src={Macm}></Macminiimg>
        </div>
    );
};

export default Macmini;