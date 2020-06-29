import React from "react";
import {connect} from "react-redux";
import Categories from "../Categories/Categories";
import JokeContainer from "../JokeContainer/JokeContainer";
import Loading from '../Loading/Loading'
import {WrapperDivMain, WrapperDivItens, WrapperSection, DivBG} from './styled'
import {Typography} from '@material-ui/core';

function Main(props) {

    return (
        <DivBG>
            <WrapperDivMain>
                <header>
                    <b>
                    <Typography color='primary' variant='h4' display='block' align='center' gutterBottom>Chuck Norris Jokes/Facts</Typography>
                    </b>
                </header>
                <WrapperDivItens>
                    <nav>
                        <Categories></Categories>
                    </nav>
                    <WrapperSection> {
                        props.Joke && <JokeContainer category={props.Joke.categories[0]}
                            joke={props.Joke.value}
                            />
                    } </WrapperSection>
                </WrapperDivItens>
                <Loading></Loading>
            </WrapperDivMain>
        </DivBG>
    );
}

const mapStateToProps = state => ({Joke: state.chuck.joke});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
