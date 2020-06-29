import styled from 'styled-components';
import {Paper} from '@material-ui/core';

export const PaperStyled = styled(Paper)`
display: flex;
flex-direction: column;
background-color: rgba(255,255,255,0.9);
height: auto;
`
export const CategoryWrapper = styled.div`
display: flex;
justify-content: center; 
text-align: justify;
background-color: rgba(0,0,0,0.7);
padding: 2%;
`
export const JokeWrapper = styled.div`
margin: 5%;
display: flex;
justify-content: center; 
text-align: justify;
`
export const ActionsWrapper = styled.div`
display: flex;
justify-content: center;
margin-bottom: 2%;
padding: 2%;
`
