import styled from 'styled-components';

export const Nav = styled.div`
  width: 70%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  background: #E7DDDB;
  @media(max-width: 767px){
      width: 98%;
      flex-direction: column;
      justify-content: center;
      align-items: center;
  }
`
export const Ul = styled.ul`
width: 60%;
display:flex;
justify-content:flex-end;
  @media(max-width: 767px){
    width: 100%;
    justify-content: center;
    align-items: center;
    padding-bottom: .5rem;
  }
`

export const Li = styled.li`
  float:right;
  margin-top: 4px;
  margin-left: 1rem;
  background: lightgrey;
  padding: .5rem 1rem;
  border-radius: .5rem;
  color: #222;
  transition: ease-in-out .3s;

  &:hover{
    color: #fff;
    background: #222;
  }
`
export const Image = styled.img`
  max-width: 3.9rem;
  transform:scale(1);
  margin-top: -2px;
  margin-left: -.5rem;
  transition: ease-in-out .3s; 
  &:hover{
      transform:scale(1.2);
      transform: rotate(180deg);
  }
  @media(max-width: 767px){
    max-width: 4.1rem;
    }
`