// React
import React from 'react';

class SubNav extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            mainCat: ''
        };
    }

    componentDidMount() {
        this.setState({ mainCat: this.props.match.params.mainCat });
    }

    componentDidUpdate() {
        if (this.state.mainCat !== this.props.match.params.mainCat) {
            this.setState({ mainCat: this.props.match.params.mainCat });
        }
    }

    render() {
        return (
            <div>
                This is a subnav. { this.state.mainCat }
            </div>
        );
    }
}

export default SubNav;
