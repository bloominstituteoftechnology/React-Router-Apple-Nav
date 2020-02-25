import React from "react";
import styled from "styled-components";
import Pro16 from "../../images/pro16.jpg";

const Pro16img = styled.img `
    min-width: 100%;
    height: auto;
`;

const Pro16page = () => {
    return (
        <div>
            <Pro16img src={Pro16}></Pro16img>
        </div>
    );
};

export default Pro16page;