import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

class subMenu extends React.Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {
        console.log('sub nav did not mount');
    }

    render () {
        const currentProd = this.props.sub.find(sl => `${sl.name}` === this.props.match.params.id );

        if(currentProd === undefined) {
            console.log('not working');
            return (
                <div>Hello</div>
            );
        }
        else {
            console.log('ready to run');
        }

        // console.log(currentProd);

        return (
            <div className='subItems' >
                {currentProd.subLinks && currentProd.subLinks.map(sub => (
                    <Link key={sub.img} to={`/${this.props.match.params.id}/${sub.name}`} >
                        <div className='subMenuNav'>
                            <div ><img src={sub.img} alt='product'/></div>
                            <div>{sub.name}</div>
                        </div>
                    </Link>
                ))}
            </div>
        );
    }

}

export default subMenu;