import styled from 'styled-components';


export const Img = styled.div` 
  margin: 20px auto;
  border-radius:40px;
  box-shadow:0px 0px 5px 2px #D59203;
`

export const Container = styled.div`
  display:flex;
  justify-content:space-between;
  flex-direction:row;
  width:100%;
  background: ##F7F6F1;
  @media(max-width: 900px){
    flex-direction: column; 
  }
  @media(max-width: 767px){
    flex-direction: column; 
  }
`
export const ContainerType = styled.div`
  position:relative;
  box-shadow:0px 0px 5px #D59203;
  width:50%;
  margin:.7rem .3rem;
  display:flex;
  align-items:flex-start;
  justify-content:center;
  flex-direction:column;
  text-align:center;
  @media(max-width: 900px){
    width: 97% ;
    margin: 1rem auto ;
    box-shadow:0px 0px 5px #D59203;
  }
  @media(max-width: 767px){
    .container-type{
      width: 97%;
      padding: 1rem;
      margin: 1rem auto ;
      box-shadow:0px 0px 5px #D59203;
    }
  }
`
export const Type = styled.div`
  margin:.7rem .5rem;
  padding:.5rem 1rem;
  background:#219E40;
  color:#222;
  border-radius:5px;
  .type-color1,
  .type-color2{
    position: absolute;
    width:200px;
    margin-top: .3rem;
    left: 5rem;
    height:.6rem;
    z-index: 1;
    background: #219E40;
    border-radius: 5px;
  }
  .type-color1:after{
    width:160px;
  }
  .type-color2:after{
    width:180px;
  }
  .type-color1:after,
  .type-color2:after{
    content:'';
    position: absolute;
    border-radius: 5px;
    left: 0;
    background: #B91827;
    height:.6rem;
    z-index: 2;
  }
  @media(max-width: 767px){
    .type-color1,
    .type-color2{
      height: 1rem;
      left: 6rem;
    }
    .type-color1:after,
    .type-color2:after{
      height: 1rem;
    }
    .type-color1:after{
      width:140px;
    }
    .type-color2:after{
      width:160px;
    }
}
`
export const ContainerSpecial = styled.div`
  position:relative;
  box-shadow:0px 0px 5px #D59203;
  width:50%;
  margin:.7rem .3rem;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  text-align: center;
  @media(max-width: 900px){
    width: 97% ;
    margin: 1rem auto ;
    box-shadow:0px 0px 5px #D59203;
  }
  @media(max-width: 767px){
    .container-special{
      width: 97%;
      padding: 1rem;
      margin: 1rem auto ;
      box-shadow:0px 0px 5px #D59203;
    }
  }
`
export const Special = styled.div`
  margin:.7rem 0 .7rem .5rem;
  padding:.5rem 1rem;
  background:#219E40;
  color:#222;
  border-radius:5px;  
  .special-color1,
  .special-color2,
  .special-color3{
    position: absolute;
    width:200px;
    margin-top: .3rem;
    left: 6rem;
    height:.6rem;
    z-index: 1;
    background: #219E40;
    border-radius: 5px;
  }
  .special-color1:after{
    width:190px;
  }
  .special-color2:after{
    width:150px;
  }
  .special-color3:after{
    width:170px;
  }
  .special-color1:after,
  .special-color2:after,
  .special-color3:after{
    content:'';
    position: absolute;
    border-radius: 5px;
    left: 0;
    background: #B91827;
    height:.6rem;
    z-index: 2;
  }
  @media(max-width: 767px){
    .special-color1,
    .special-color2,
    .special-color3{
      height: 1rem;
      left: 6rem;
    }
    .special-color1:after,
    .special-color2:after,
    .special-color3:after{
      height: 1rem;
    }
    .special-color1:after{
      width:170px;
    }
    .special-color2:after{
      width:130px;
    }
    .special-color3:after{
      width:150px;
    }
  }
`