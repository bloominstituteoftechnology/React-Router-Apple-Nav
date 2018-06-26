import React, { Component } from "react";
import Styled, {ThemeProvider} from "styled-components";
import navBarTheme from "./NavBarTheme";
import Button from './Button';

const WrappedNavBar = Styled.div`
    background-color: ${props => props.theme.color.bg};
    display: flex;
    justify-content: center;
`;

export default class NavBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ThemeProvider theme={navBarTheme}>
        <WrappedNavBar>
        <Button />
        <Button />
        <Button />
        <Button />
        <Button />
        <Button />
        </WrappedNavBar>
      </ThemeProvider>
    );
  }
}
