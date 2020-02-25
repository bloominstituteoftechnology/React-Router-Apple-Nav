import React from "react";
import styled from "styled-components";
import Cat from "../../images/catalina.jpg";

const Catimg = styled.img `
    min-width: 100%;
    max-width: 100%;
    height: auto;
`;

const Catalina = () => {
    return (
        <div>
            <Catimg src={Cat}></Catimg>
        </div>
    );
};

export default Catalina;