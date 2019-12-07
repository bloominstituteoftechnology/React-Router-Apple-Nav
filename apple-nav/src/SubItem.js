import React from 'react';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

export default class SubItem extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            appear: true,
        };
    }
    render(){
        return (
            <CSSTransition
                in={this.state.appear}
                appear={true}
                timeout={600}
                classNames="slide"
            >
                <Link to={`/${this.props.device.type}/${this.props.device.route}`}>
                    <div>
                        <img draggable={false} src={this.props.device.img} alt={this.props.device.name} />
                        <h4 style={this.props.device.type === 'iphone' ||
                            this.props.device.type === 'tv' ? {color: '#EFEFEF'} : null}>{this.props.device.name}</h4>
                        {this.props.device.new ? <span className="new-text">New</span> : null}
                    </div>  
                </Link>
            </CSSTransition>
        );
    }
}