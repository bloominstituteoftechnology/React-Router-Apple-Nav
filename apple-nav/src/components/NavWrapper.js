import React from "react";
import { Link, NavLink, Route } from "react-router-dom";
import './NavWrapper.css';




const products = [
    {
      id: '1',
      name: 'Iron Man',
      nickname: 'Armored Avenger',
      description: 'Genius. Billionaire. Playboy. Philanthropist. Tony Stark\'s confidence is only matched by his high-flying abilities as the hero called Iron Man.',
      thumbnail: 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/002irm_com_crd_01.jpg',
      img: 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/002irm_com_mas_dsk_03_0.jpg',
    },
    {
      id: '2',
      name: 'Thor',
      nickname: 'God of Thunder',
      description: 'The son of Odin uses his mighty abilities as the God of Thunder to protect his home Asgard and planet Earth alike.',
      thumbnail: 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/004tho_com_crd_01.jpg',
      img: 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/004tho_com_mas_dsk_03_1.jpg',
    },
    {
      id: '3',
      name: 'Captain America',
      nickname: 'Sentinel of Liberty',
      description: 'Recipient of the Super-Soldier serum, World War II hero Steve Rogers fights for American ideals as one of the world’s mightiest heroes and the leader of the Avengers.',
      thumbnail: 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/003cap_com_crd_01.jpg',
      img: 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/003cap-com-mas-one_1.jpg',
    },
    {
      id: '4',
      name: 'Spiderman',
      nickname: 'The Wallcrawler',
      description: 'Bitten by a radioactive spider, Peter Parker’s arachnid abilities give him amazing powers he uses to help others, while his personal life continues to offer plenty of obstacles.',
      thumbnail: 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/005smp_com_crd_01.jpg',
      img: 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/005smp_com_mas_dsk_03_2.jpg',
    },
    {
      id: '5',
      name: 'Hulk',
      nickname: 'Big guy',
      description: 'Dr. Bruce Banner lives a life caught between the soft spoken scientist he’s always been and the uncontrollable green monster powered by his rage.',
      thumbnail: 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/006hbb_com_crd_01.jpg',
      img: 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/006hbb_com_mas_dsk_01_4.jpg',
    },
    {
      id: '6',
      name: 'Black Widow',
      nickname: 'Super Spy Assassin',
      description: 'Despite super spy Natasha Romanoff’s checkered past, she’s become one of S.H.I.E.L.D.’s most deadly assassins and a frequent member of the Avengers.',
      thumbnail: 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/011blw_com_crd_01.jpg',
      img: 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/011blw_com_mas_mob_01.jpg',
    },
    {
      id: '7',
      name: 'The Vision',
      nickname: 'Android Avenger',
      description: 'The android called Vision defies physics and fights as an Avenger with the power of density manipulation and his flawless computer brain',
      thumbnail: 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/013vis_com_crd_01.jpg',
      img: 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/013vis_com_mas_dsk_02_0.jpg',
    },
    {
      id: '8',
      name: 'Black Panter',
      nickname: 'King of Wakanda',
      description: 'T’Challa is the king of the secretive and highly advanced African nation of Wakanda - as well as the powerful warrior known as the Black Panther.',
      thumbnail: 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/007blp_com_crd_01_0.jpg',
      img: 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/007blp_com_mas_mob_05.jpg',
    },
    {
      id: '9',
      name: 'Doctor Strange',
      nickname: 'Master of Magic',
      description: 'Formerly a renowned surgeon, Doctor Stephen Strange now serves as the Sorcerer Supreme—Earth’s foremost protector against magical and mystical threats.',
      thumbnail: 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/009drs_com_crd_01.jpg',
      img: 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/009drs_com_mas_dsk_02.jpg',
    }
  ];
  






const NavWrapper = props => {
    return (
        <div>
            <header className="Nav-header">
                <div>
                    <i className="fa fa-apple fa-2x" aria-hidden="true"></i>
                </div>
                <div>
                    <NavLink exact activeClassName="activeNavButton" to="/mac">
                        Mac
                 </NavLink>
                </div>
                <div>
                    <NavLink exact activeClassName="activeNavButton" to="/ipad">
                        iPad
                 </NavLink>
                </div>
                <div>
                    <NavLink exact activeClassName="activeNavButton" to="/iphone">
                        iPhone
                 </NavLink>
                </div>
                <div>
                    <NavLink exact activeClassName="activeNavButton" to="/watch">
                        Watch
                 </NavLink>
                </div>
                <div>
                    <NavLink exact activeClassName="activeNavButton" to="/tv">
                        TV
                 </NavLink>
                </div>
                <div>
                    <NavLink exact activeClassName="activeNavButton" to="/music">
                        Music
                 </NavLink>
                </div>
                <div>
                    <NavLink exact activeClassName="activeNavButton" to="/support">
                        Support
                 </NavLink>
                </div>
                <div>
                    <i className="fa fa-search fa-2x" aria-hidden="true"></i>
                </div>
                <div>
                    <i className="fa fa-shopping-cart fa-2x" aria-hidden="true"></i>
                </div>
            </header>
            {/* <Route
                exact
                path="/characters"
                render={props => <Characters {...props} characters={characters} />}
            /> */}
        </div>
    );
}



export default NavWrapper;