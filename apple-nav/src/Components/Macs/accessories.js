import React from "react";
import styled from "styled-components";
import Acc from "../../images/accessories.jpg";

const Accimg = styled.img `
    min-width: 100%;
    max-width: 100%;
    height: auto;
`;

const Accessories = () => {
    return (
        <div>
            <Accimg src={Acc}></Accimg>
        </div>
    );
};

export default Accessories;