import styled from 'styled-components';

export const LoadBody = styled.div`
position:relative;
background:rgba(247, 246, 241, .8);
transition: all .25s;
`

export const LoadImg = styled.img`
  width:50vw;
  height:40vh;
  border-radius: 40px;
  box-shadow: 0px 0px 5px 2px var(--color2);  
  animation: pulse .5s linear infinite alternate;
  transition: all .25s;
  @keyframes pulse{
    0%{
      transform:scale(.7);
    }
    50%{
      transform:scale(1.1);
    }
    100%{
      transform:scale(.7);
    }
  }
`
export const LoadTitle = styled.h1`
  position:absolute;
  top:50%;
  left:50%;
  transform:translate(-50%,-50%);
  font-size:3rem;
  color:var(--color2);
`