import styled from 'styled-components';

export const MainPokemon = styled.div`
max-width: 68%;
width:90%;
left:0;
right:0;
position: fixed;
margin: 0 auto ;
background:rgba(20, 20, 20, .92);
box-shadow: 0px 0px 5px 2px var(--color2);
padding: 5em 0;
display: flex;
flex-direction: column;
z-index:9999;
font-size:1rem;
transition: all .5s;
animation : scale .5s linear 1;
@media(max-width: 767px){
  min-width: 98%;
}
@keyframes scale{
  0%{
    width:20%;
    position: fixed;
    top:40%;
    left:40%;
    right:40%;
    bottom:40%;
    transition: all .5s;
    opacity:0;
    font-size:.5rem;
  }
  100%{
    top:3em;
    left:0;
    right:0;
    top:3em;
    transition: all .5s;
    opacity:1;
    font-size:1rem;
  }
}
`

export const Img = styled.div`
margin: 1em auto;
width:50%;
border-radius: 40px;
box-shadow: 0px 0px 5px 2px var(--color2);
background: var(--color3);
display:flex;
align-items:center;
justify-content:center;
`

export const Container = styled.div`
display: flex;
justify-content: space-between;
flex-direction: row;
width: 100%;
background: var(--color3);
&::after{ 
  content: '';
    position: absolute;
    width: 100%;
    top: 100%;
    left: 0em;
    bottom: 50%;
    background: var(--color3);
  }
`
export const ContainerType = styled.div`
position: relative;
box-shadow: 0px 0px 5px var(--color1);
margin: .7em .3em;
padding: .2em .5em;
width: 100%;
display: flex;
align-items: flex-start;
justify-content: space-between;
flex-direction: column;
text-align: center;
font-size:1rem;
&:: after{
	position: absolute;
	top: 0;
	bottom: 0;
  content: '';
}
@media(max-width: 900px) {
  width: 97% ;
  margin: 1em auto;
  box-shadow: 0px 0px 5px var(--color1);
}
@media(max-width: 767px) {
  width: 97%;
  padding: .1em;
  margin: 1em auto;
  font-size:.9rem;
  box-shadow: 0px 0px 5px var(--color1);
}
`

export const Type = styled.div`
margin: .2em 0 .2em .1em;
padding-left: .3em;
background: var(--color2);
color: var(--color3);
font-weight: 900;
border-radius: 5px;
display: flex;
align-items: center;
justify-content: space-between;
}
`
export const Span = styled.span`
color: var(--color4);
background: var(--color1);
padding: .25em 1.5em;
border-radius: 5px;
margin-right: -1em;
margin-left: .5em;
`