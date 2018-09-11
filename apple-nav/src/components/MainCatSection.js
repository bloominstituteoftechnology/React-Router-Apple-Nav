// React
import React from 'react';

// Styles
import './MainCatSection.css';

class MainCatSection extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            mainCat: ''
        };
    }

    componentDidMount() {
        this.setState({ 
            mainCat: this.props.match.params.mainCat
        });
    }

    componentDidUpdate() {
        if (this.state.mainCat !== this.props.match.params.mainCat) {
            this.setState({ 
                mainCat: this.props.match.params.mainCat
            });
        }
    }

    render() {
        return(
            <div className = 'main-cat-section'>
                This is the { this.state.mainCat } section.
            </div>
        );
    }
}

export default MainCatSection;
