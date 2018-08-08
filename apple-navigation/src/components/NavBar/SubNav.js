import React from 'react';
import styled from 'styled-components';
import SubTab from './SubTab';
 const Products = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    text-decoration: none;
    height: 3rem;
    padding: 0 5rem;
    font-size: 1rem;
    color: white;
    background: #403C3B;
`;
  const SubNav = (props) => {
    const subTab = props.subTabs.find(
        item => `${item.id}` === props.match.params.productId);
    return (
        <Products>
            {subTab.link.map(item => (
                <div key={item.id}>
                    <SubTab link={item} />
                </div>
            ))}
        </Products>
    )
}
 export default SubNav;