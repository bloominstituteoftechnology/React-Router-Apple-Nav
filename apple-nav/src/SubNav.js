import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import data from './assets/data';

const Bar = styled.section`
    width: 100%;
    margin-top: 10px;

    > div {
        width: 70%;
        height: 100px;
        margin: 0 auto;
        display: flex
        justify-content: space-between;
        align-items: baseline;
        text-align: center;
    }

    a {
        color: #222;
        text-decoration: none;
        font-size: 1.1rem;

        &:hover {
            color: #0070c9
        }
        img {
            user-select: none;
            max-height: 60px;
        }
    }

    .active {
        color: #0070c9;
    }
    .new-text {
        color: #ef5602;
        font-size: 0.9rem;
    }
`;

class SubNav extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            cards: [],
        };
    }
    componentDidMount(){
        this.setState({
            cards: data.filter(x => x.type === this.props.match.params.type),
        });
    }

    /* There are three conditions under which the bar should re-render on update:
        1. There were previously no entries but now there are.
        2. There were previously entries, but now there are none.
        3. (The most common) The type of the previous entries is not the same as the
        type of the new entries.
    */

    componentDidUpdate(prevProps, prevState){
        const newData = data.filter(x => x.type === this.props.match.params.type);
        if (!prevState.cards.length && newData.length){
            this.setState({
                cards: data.filter(x => x.type === this.props.match.params.type),
            });
        }
        else if (prevState.cards.length && !newData.length){
            this.setState({
                cards: data.filter(x => x.type === this.props.match.params.type),
            });
        }
        else if (prevState.cards.length && this.state.cards.length){
            if (prevState.cards[0].type !== this.props.match.params.type){
                this.setState({
                    cards: data.filter(x => x.type === this.props.match.params.type),
                });
            }
        }
    }
    render(){
        return (
            this.props.match.params.type === 'support' ? null :
            <Bar>
                <div>
                    {this.state.cards === null ? 
                    null :
                    this.state.cards.map(device => (
                        <Link to={`/${device.type}/${device.route}`} key={device.route}>
                            <div>
                                <img draggable={false} src={device.img} alt={device.name} />
                                <h4>{device.name}</h4>
                                {device.new ? <span className="new-text">New</span> : null}
                            </div>  
                        </Link>
                    ))}
                </div>
            </Bar>
        );
    }
}

export default SubNav;