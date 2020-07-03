import styled from 'styled-components';

export const Main = styled.div`
max-width: 70%;
margin: 0 auto ;
background:#F7F6F1;
padding: 5rem 0;
display: flex;
flex-direction: column;
@media(max-width: 767px){
  min-width: 98%;
}  
`
export const Title = styled.h1`
display: block ;
color: #219E40;
padding: 0 0 5rem;
font-size: 5rem;
text-align: center;
letter-spacing: .3rem;
font-family:'Courier New', Courier, monospace;
text-shadow:0px 0px 3px #EB1D18;
@media(max-width: 767px){
  font-size: 3rem;
} 
`
export const PokemonDiv = styled.div`
display: flex;
width: 100%;
flex-direction: row;
flex-wrap: wrap;
justify-content: space-around;
align-items: center;
`
export const PokemonWrap = styled.div`
flex: 1 1 21.94%;
margin: 20px;
@media(max-width: 767px){
  flex: 1 1 44.4% ;
}
`
export const Alink = styled.a`
width: 100%;
margin: auto;
margin-top: .5rem;
margin-bottom: .5rem;
text-shadow: 0px 1px 3px #222;
&::after{
  content: '';
	position: absolute;
	width: 100%;
	top: 100%;
	left: 0rem;
	bottom: 50%;
	font-size: .3rem;
	font-weight: 900;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: #D59203;
	opacity: .7;
	transition: all .5s;
}
`
export const Figure = styled.figure`
margin: 0 auto;
position: relative;
padding: .3rem;
background:#F6F5F0;
box-shadow: 0px 0px 10px #D59203;
&:hover a::after{
  position: absolute;
	top: 0;
	bottom: 0;
	content: 'Details';
  font-size: 4rem;
  color: #fff;
}
&img{
  position: relative;
  width: 100%;
  margin: 0 auto;
  padding: .5rem;
  border-radius: .5rem .5rem 0 0;
}
`
export const Paragraph = styled.p`
text-align: center;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
font-weight: 600;
font-family: 'Courier New', Courier, monospace;
letter-spacing: 5px;
background:#D59203;
padding: .1rem ;
font-size: 1rem;
`
export const Span = styled.span`
// color: #222;
`

