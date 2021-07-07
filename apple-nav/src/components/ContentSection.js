// React
import React from 'react';

// Styles
import './ContentSection.css';

class ContentSection extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            subCat: {}
        };
    }

    componentDidMount() {
        this.setState({ 
            subCat: this.props.match.params.subCat,
            glyph: this.props.navData.find(navDataItem => navDataItem.mainCat === this.props.match.params.mainCat).subCats.find(subCat => subCat.name === this.props.match.params.subCat).glyph
        });
    }

    static getDerivedStateFromProps(props, state) {
        if (props.match.params.subCat !== state.subCat) {
            return {
                subCat: props.match.params.subCat,
                glyph: props.navData.find(navDataItem => navDataItem.mainCat === props.match.params.mainCat).subCats.find(subCat => subCat.name === props.match.params.subCat).glyph
            };
        }

        return null;
    }

    render() {
        return(
            <section className = 'content-section'>
    { this.state.subCat === 'Compare' ? <h2>{ this.state.subCat } different { this.props.match.params.mainCat } products!</h2> : this.state.subCat === 'Accessories' ? <h2>Look through { this.props.match.params.mainCat } { this.props.match.params.subCat }!</h2> : <h2>Introducing the new { this.state.subCat }!</h2> }

                <div className = 'i-div'>
                    <i className = { this.state.glyph }></i>
                </div>
            </section>
        );
    }
}

export default ContentSection;
