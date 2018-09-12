// React
import React from 'react';
import { Link } from 'react-router-dom';

// Styles
import './SubNav.css';

class SubNav extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            mainCat: '',
            subCats: []
        };
    }

    componentDidMount() {
        this.setState({ 
            mainCat: this.props.match.params.mainCat,
            subCats: this.props.navData.find(navDataItem => navDataItem.mainCat === this.props.match.params.mainCat).subCats
        });
    }

    componentDidUpdate() {
        if (this.state.mainCat !== this.props.match.params.mainCat) {
            this.setState({ 
                mainCat: this.props.match.params.mainCat,
                subCats: this.props.navData.find(navDataItem => navDataItem.mainCat === this.props.match.params.mainCat).subCats
            });
        }
    }

    render() {
        let subNavStyle = {};
        let iElementStyle = {};
        let pElementStyle = {};

        switch(this.props.match.url) {
            case '/iPad':
            case '/iPhone':
            case '/Music':
                subNavStyle = {
                    backgroundColor: '#F6F6F6'
                };
                iElementStyle = {
                    color: 'black'
                };
                pElementStyle = {
                    color: 'black'
                };
                break;
            case '/Watch':
                subNavStyle = {
                    backgroundColor: '#FAFAFA'
                };
                iElementStyle = {
                    color: 'black'
                };
                pElementStyle = {
                    color: 'black'
                };
                break;
            default:
                subNavStyle = {
                    backgroundColor: '#141414'
                };
        }

        return (
            <div className = 'sub-nav' style = { subNavStyle }>
                { this.state.subCats.map((subCat, i) => 
                    <span className = 'sub-nav-item' key = { i } >
                        <Link to = { `/${ this.state.mainCat }/${ subCat.name }` }>
                            <i className = { subCat.glyph } style = { iElementStyle }></i>
                            <p style = { pElementStyle }>{ subCat.name }</p>
                        </Link>
                    </span>
                )}
            </div>
        );
    }
}

export default SubNav;
