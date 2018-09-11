// React
import React from 'react';

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
        return (
            <div className = 'sub-nav'>
                { this.state.subCats.map((subCat, i) => <span className = 'sub-nav-item' key = { i } >{ subCat }</span>) }
            </div>
        );
    }
}

export default SubNav;
