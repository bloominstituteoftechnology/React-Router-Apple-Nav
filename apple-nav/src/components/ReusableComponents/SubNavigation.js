import styled from 'styled-components';

export const SubNavigationWrapper = styled.div`
    padding: 12px 0;
    max-height: 116px;
`

export const SubNavigationContent = styled.ul`
    list-style-type: none;
    display: flex;
    justify-content: center;
    margin: 0 34px;
    padding-left: 0;
    padding-bottom: 49px;
    overflow-x: auto;
    overflow-y: hidden;
`

export const SubNavIcon = styled.img`
    font-size: 2rem;
`

export const StyledIconWrapper = styled.li`
    display: inline-block;
    padding: 0 18px;

    span {
        display: block;
        font-size: 11px;
        max-width: 7em;
        margin-top: 3px;
    }

    &:hover {
        color: #6bf;   
    }
`
