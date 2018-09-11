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

    componentDidUpdate() {
        if (this.state.subCat !== this.props.match.params.subCat) {
            this.setState({ 
                subCat: this.props.match.params.subCat
            });
        }
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
