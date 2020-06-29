import styled from 'styled-components';
import img from '../../img/chuckbg2.png';

export const DivBG = styled.div `
width: 100%;
height: 100vh;
max-width: 1280px;
margin: 0 auto;
background-image: url(${img});
background-position:center;
background-repeat: no-repeat;
box-shadow: inset 0px 0px 10px 20px rgba(0,0,0,1);
`
export const WrapperDivMain = styled.div `
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
padding: 1%;
background-color: rgba(0,0,0,0.7);
`
export const WrapperDivItens = styled.div `
width: 100%;
display: flex;
flex-direction: row;
    @media(max-width:770px) {
        flex-direction: column;
    }
`
export const WrapperSection = styled.div `
justify-content: center;
padding: 5%;
width: 100%;
`
