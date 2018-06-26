import React from 'react';
import { SubNavigationWrapper, SubNavigationContent } from '../ReusableComponents/SubNavigation';
import AppleIcons from '../../AppleIcons';
import SubNavigationItems from './SubNavigationItems';

class SubNavigation extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            appleIcons: AppleIcons,
            icon: null
        }
    }

    componentDidMount() {
        let { name } = this.props.match.params;
        this.getIcons(name);
    }

    componentWillReceiveProps(newProps) {
        if (this.props.match.params.name !== newProps.match.params.name) {
            this.getIcons(newProps.match.params.name);
        }
    }

    getIcons = name => {
        for (let i = 0; i < this.state.appleIcons.length; i++) {
            console.log(name);
            if (this.state.appleIcons[i].name.toLowerCase() === name) {
                this.setState({ icon: this.state.appleIcons[i] });
                this.props.changeBackground(this.state.appleIcons[i].headerBackground);
            }
        }
    }

    render() {
        if (!this.state.icon) {
            return <div>Error</div>;
        }
        return (
            <SubNavigationWrapper style={{ background: this.state.icon.background, color: this.state.icon.color }}>

                <SubNavigationContent>
                    <SubNavigationItems icons={this.state.icon} />
                </SubNavigationContent>

            </SubNavigationWrapper>
        );
    }
}

export default SubNavigation;