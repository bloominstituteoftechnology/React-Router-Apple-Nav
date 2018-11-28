import React, { Fragment } from 'react';
import styled from 'styled-components';
import { Route, Link } from 'react-router-dom';

const MacNavContainer = styled.div`
    background-color: rgb(246, 246, 246);
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 5rem;
`;

const MacNav = styled.div`
	width: 860px;
	display: flex;
	flex-direction: row;
    justify-content: space-between;
    align-items: baseline;
`;

const IconDiv = styled.div`
    padding-top: .5rem;
	padding-bottom: 2.5rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	font-size: 1.1rem;
`;

const MacImg = styled.img`
	width: 63px;
`;

const MacDesk = styled.img`
    width: 33px;
`

const LittleMac = styled.img`
    width: 37px;
`

const AccessoriesImg = styled.img`
    width: 50px;
`

export default function Mac() {
	return (
		<Fragment>
			<MacNavContainer>
				<MacNav>
					<IconDiv className="macicon">
						<Link to="/mac/macbook">
							<MacImg src="macbook.png" alt="macbook" /><br/>
                            Macbook
						</Link>
					</IconDiv>
					<IconDiv className="macicon">
						<Link to="/mac/macbook-air">
							<MacImg src="macbook-air.png" alt="macbook" /><br/>
                            Macbook Air
						</Link>
					</IconDiv>
					<IconDiv className="macicon">
						<Link to="/mac/macbook-pro">
							<MacImg src="macbook-pro.png" alt="macbook" /><br/>
                            Macbook Pro
						</Link>
					</IconDiv>
					<IconDiv className="macicon">
						<Link to="/mac/imac">
							<MacImg src="imac.png" alt="macbook" /><br/>
                            iMac
						</Link>
					</IconDiv>
					<IconDiv className="macicon">
						<Link to="/mac/imac-pro">
							<MacImg src="imac-pro.png" alt="macbook" /><br/>
                            iMac Pro
						</Link>
					</IconDiv>
					<IconDiv className="macicon">
						<Link to="/mac/mac-pro">
							<MacDesk src="mac-pro.png" alt="macbook" /><br/>
                            Mac Pro
						</Link>
					</IconDiv>
					<IconDiv className="macicon">
						<Link to="/mac/mac-mini">
							<LittleMac src="mac-mini.png" alt="macbook" /><br/>
                            Mac mini
						</Link>
					</IconDiv>
					<IconDiv className="macicon">
						<Link to="/mac/accessories">
							<AccessoriesImg src="accessories.png" alt="macbook" /><br/>
                            Accessories
						</Link>
					</IconDiv>
					<IconDiv className="macicon">
						<Link to="/mac/mojave">
							<AccessoriesImg src="mojave.png" alt="macbook" /><br/>
                            Mojave
						</Link>
					</IconDiv>
					<IconDiv className="macicon">
						<Link to="/mac/compare">
							<MacImg src="compare.png" alt="macbook" /><br/>
                            Compare
						</Link>
					</IconDiv>
				</MacNav>
			</MacNavContainer>
            <Route exact path="/mac" component={MacHome} />
            <Route path = "/mac/macbook" component={Macbook} />
            <Route path="/mac/macbook-air" component={MacbookAir} />
            <Route path="/mac/macbook-pro" component={MacbookPro} />
            <Route path="/mac/imac" component={IMac} />
            <Route path="/mac/imac-pro" component={IMacPro} />
            <Route path="/mac/mac-pro" component={MacPro} />
            <Route path="/mac/mac-mini" component={MacMini} />
            <Route path="/mac/accessories" component={Accessories} />
            <Route path="/mac/mojave" component={Mojave} />
            <Route path="/mac/compare" component={Compare} />
		</Fragment>
	);
}


function MacHome() {
    return (
        <div>
            you're in mac!
        </div>
    );
}

function Macbook() {
    return (
        <div>
            you're in macbook!
        </div>
    );
}

function MacbookAir() {
    return (
        <div>
            you're in macbook air!
        </div>
    );
}

function MacbookPro() {
    return (
        <div>
            you're in macbook pro!
        </div>
    );
}

function IMac() {
    return (
        <div>
            you're in imac!
        </div>
    );
}

function IMacPro() {
    return (
        <div>
            you're in imac pro!
        </div>
    );
}

function MacPro() {
    return (
        <div>
            you're in mac pro!
        </div>
    );
}

function MacMini() {
    return (
        <div>
            you're in mac mini!
        </div>
    );
}

function Accessories() {
    return (
        <div>
            you're in accessories!
        </div>
    );
}

function Mojave() {
    return (
        <div>
            you're in mojave!
        </div>
    );
}

function Compare() {
    return (
        <div>
            you're in compare!
        </div>
    );
}