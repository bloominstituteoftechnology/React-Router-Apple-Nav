import React from "react";
import styled from "styled-components";
import Airimg from "../../images/macbookair.jpg";

const AirImg = styled.img `
    min-width: 100%;
    height: auto;
`;

const MacbookAir = () => {
    return (
        <div>
            <AirImg src={Airimg}></AirImg>
        </div>
    );
};

export default MacbookAir;