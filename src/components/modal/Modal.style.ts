import styled from 'styled-components';

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1050;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  outline: 0;
  transition: all .5s;
`
export const ModalContent = styled.div`
z-index: 100;
position: relative;
margin: 1.75rem auto;
border-radius: 3px;
max-width: 500px;
padding: 2rem;
transition: all .5s
`
export const Button = styled.div`
font-size: 1rem;
  font-weight: 700;
  line-height: 1;
  color: var(--color4);
  box-shadow: 0px 0px 5px var(--color1);
  border-radius: 3px;
  padding: .3rem 1rem;
  cursor: pointer;
	background: var(--color2);
  z-index: 99999;
  transition: .5s;
  position: absolute;
  right: 10em;
  bottom: 0;
  &:hover{
    background: var(--color1);
    box-shadow: 0px 0px 5px var(--color2);
  }
`
