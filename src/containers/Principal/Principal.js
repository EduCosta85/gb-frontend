import React from "react";
import {connect} from "react-redux";
import Categories from "../Categories/Categories";
import {Typography} from '@material-ui/core';
import {DivBG} from './styled'
import JokeContainer from "../JokeContainer/JokeContainer";
import Loading from '../Loading/Loading'

function Principal(props) {

    return (
        <DivBG>
            <Loading/>

            <Typography variant="h3" align='center'>
                Chuck Norris Jokes/Facts
            </Typography>

            <Categories/> 
            
            {
            props.Joke && <JokeContainer category={
                    props.Joke.categories[0]
                }
                joke={
                    props.Joke.value
                }
                link={
                    props.Joke.url
                }/>
        }
        </DivBG>
    );
}

const mapStateToProps = state => ({Joke: state.chuck.joke});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Principal);
