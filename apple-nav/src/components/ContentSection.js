// React
import React from 'react';

// Styles
import './ContentSection.css';

class ContentSection extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            subCat: '',
        };
    }

    componentDidMount() {
        this.setState({ 
            subCat: this.props.match.params.subCat
        });
    }

    static getDerivedStateFromProps(props, state) {
        if (props.match.params.subCat !== state.subCat) {
            return {
                subCat: props.match.params.subCat
            };
        }

        return null;
    }

    render() {
        return(
            <section className = 'content-section'>
                Content for { this.state.subCat }
            </section>
        );
    }
}

export default ContentSection;
