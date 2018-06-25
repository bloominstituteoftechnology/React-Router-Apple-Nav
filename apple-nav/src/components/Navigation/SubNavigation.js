import React from 'react';
import { SubNavigationWrapper, SubNavigationContent } from '../ReusableComponents/SubNavigation';
import AppleIcons from '../../AppleIcons';

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
            if (this.state.appleIcons[i].name === name) {
                this.setState({ icon: this.state.appleIcons[i] });
                return;
            }
        }
    }


    render() {
        if (!this.state.icon) {
            return <div>Loading icon information...</div>;
        }

        return (
            <SubNavigationWrapper>

                <SubNavigationContent>
                    {this.state.icon.name}


                </SubNavigationContent>

            </SubNavigationWrapper>
        );
    }
}

export default SubNavigation;