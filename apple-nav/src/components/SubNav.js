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
        let inlineStyle = {};

        switch(this.props.match.url) {
            case '/Mac':
                inlineStyle = {
                    backgroundColor: '#141414'
                };
                break;
            case '/iPad':
                inlineStyle = {
                    backgroundColor: '#141414',
                }
                break;
            default:
                inlineStyle = {
                    backgroundColor: '#141414',
                }
        }

        return (
            <div className = 'sub-nav' style = { inlineStyle }>
                { this.state.subCats.map((subCat, i) => 
                    <span className = 'sub-nav-item' key = { i } >
                        <Link to = { `/${ this.state.mainCat }/${ subCat.name }` }>
                            <i className = { subCat.glyph }></i>
                            <p>{ subCat.name }</p>
                        </Link>
                    </span>
                )}
            </div>
        );
    }
}

export default SubNav;
