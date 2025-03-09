import styled from 'styled-components';

export const Main = styled.div`
max-width: 70%;
margin: 0 auto ;
background: var(--color3);
padding: 5rem 0;
display: flex;
flex-direction: column;
align-items: center;
@media(max-width: 767px){
  min-width: 98%;
}  
`
export const Title = styled.h1`
display:flex;
color: var(--color2);
padding: 0 0 5rem;
font-size: 5rem;
text-align: center;
text-transform: none;
letter-spacing: .3rem;
font-family:'Courier New', Courier, monospace;
text-shadow:0px 0px 3px var(--color1);
@media(max-width: 767px){
  font-size: 2.6rem;
} 
`
export const ImgLogo = styled.img`
	// width: 1em;
	height: 1em;
	margin:0 -20px;
	animation: imageAnimated 2s linear infinite alternate;
	@keyframes imageAnimated{
	0%{
		transform: scale(.7) rotate(0deg);
	}
	50%{
		transform: scale(1) rotate(20deg);
	}
	100%{
		transform: scale(.7) rotate(0deg);
	}
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
flex: 1 0 21.94%;
margin: 20px;
@media(max-width: 767px){
  flex: 1 0 44.4% ;
}
`
export const Alink = styled.a`
width: 100%;
margin: auto;
margin-top: .5rem;
margin-bottom: .5rem;font-weight: 900;
text-shadow: 0px 1px 3px var(--color3);
cursor:pointer;
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
	background-color: var(--color1);
	opacity: .7;
	transition: all .25s;
}
`
export const Figure = styled.figure`
margin: 0 auto;
position: relative;
padding: .3rem;
background: rgba(247, 246, 241, .7);
box-shadow: 0px 0px 30px var(--color2);
transition: all .25s;
&:hover{
	box-shadow: 0px 0px 30px var(--color1);
}
&: hover a:: after{
	position: absolute;
	top: 0;
	bottom: 0;
	content: 'Details';
	font-size: 4rem;
	color: #fff;
}
& img{
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
background: var(--color3);
color: var(--color4);
text-shadow:0px 0px 1px var(--color1);
padding: .1rem;
font-size: 1rem;
`
export const Span = styled.span`
	color: var(--color4);
	font-weight:600;
	`

