import React from 'react';
import NavFile from './NavFile';
import Styled from 'styled-components';
import NavBar from './NavBar';

const MenuContainer = Styled.div`
    background: #141414;
    min-width: 1024px;
    width: 100%;
    height: 92px;
    color: white;
    padding: 12px 0px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: space-around;
`;

const images = [ 
    { 
        id: 'iphone',
        items: ['accessories.png', 'airpods.png', 'compare.png', 'ios12.png', 'iphone7.png', 'iphone8.png', 'iphonexr.png', 'iphonexs.png'] 
    },
    {
        id: 'mac',
        items: ['accessories.png', 'compare.png', 'imac.png', 'imacpro.png', 'macbook.png', 'macbookair.png', 'macbookpro.png', 'macmini.png', 'macpro.png', 'mojave.png']
    },
    {
        id: 'ipad',
        items: ['ipadpro_light_large.svg', 'ipad_large.svg', 'ipadmini_large.svg', 'ipad_ios10_large.svg', 'ipad_acc_large.svg', 'ipad_comp_large.svg']
    },
    {
        id: 'music',
        items: ['accessories.png', 'airpods.png', 'gift.png', 'homepod.png', 'ipodtouch.png', 'itunes.png', 'music.png']
    },
    {
        id: 'tv',
        items: ['accessories.png', 'app.png', 'compare.png', 'tv.png', 'tv4k.png']
    },
    {
        id: 'watch',
        items: ['accessories.png', 'bands.png', 'compare.png', 'watch3.png', 'watch4.png', 'watchhermes.png', 'watchnike+.png', 'watchos.png']
    }
]

const SubBar = ({match}) => {
    const id = match.params.id;
    const navItem = images.filter( item => item.id === id);
    return (
        <div>
        <NavBar />
        <MenuContainer>
            {navItem[0].items.map( (item, index) => {
                return(
                <img key={index} src={require(`../Assets/${id}/${item}`)} />
                )
            })}
        </MenuContainer>
        </div>
    );
};

export default SubBar;