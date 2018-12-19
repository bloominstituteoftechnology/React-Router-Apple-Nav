import React from 'react';
import SubItem from './SubItem';
import styled from 'styled-components';
import data from './assets/data';

const Bar = styled.section`
    width: 100%;
    padding-top: 10px;

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
    .new-text {
        color: #ef5602;
        font-size: 0.9rem;
    }
    .slide-appear {
        opacity: 0;
        transform: translateX(75px);
    }
    .slide-appear.slide-appear-active {
        opacity: 1;
        transform: translateX(0);
        transition: opacity 500ms ease, transform 300ms ease;
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
            <Bar style={this.props.match.params.type === 'iphone' ||
                this.props.match.params.type === 'tv' ? {background: '#141414'} : {background: '#F6F6F6'}}>
                <div>
                    {!this.state.cards.length ? 
                    null :
                    this.state.cards.map(device => <SubItem key={device.type + device.route} device={device} />)}
                </div>
            </Bar>
        );
    }
}

export default SubNav;