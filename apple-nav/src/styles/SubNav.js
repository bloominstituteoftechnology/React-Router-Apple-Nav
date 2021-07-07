import styled from 'styled-components'

export const Wrapper = styled.div`
  background: ${({ odd }) => odd ? '#1B1B1B' : '#F6F6F6'};
  display: flex;
  justify-content: center;
`

export const NavItem = styled.div`
  color: ${({ odd }) => odd ? '#F6F6F6' : '#1B1B1B'};
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 11px;
  margin: 0 20px;
`

export const Text = styled.p`
  font-size: 11px;
  max-width: 77px;
  text-align: center;
`
