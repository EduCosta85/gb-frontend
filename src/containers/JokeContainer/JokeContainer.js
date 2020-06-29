import React from "react";
import {connect} from "react-redux";
import {getJoke, setLoadingOn} from '../../actions/chuckNorrisApi'
import {Button, Typography} from '@material-ui/core';
import {CategoryWrapper, ActionsWrapper, JokeWrapper, PaperStyled} from './styled'
import AddCircleIcon from '@material-ui/icons/AddCircle';

function JokeContainer(props) {
    const handleWithJoke = (item) => {
        props.setLoadingOn()
        props.getJoke(item)
    }

    return (
        <PaperStyled elevation={5}>
            <CategoryWrapper>
                <Typography variant="body1" color="primary">
                    <b>About {
                        props.category.toUpperCase()
                    }</b>:
                </Typography>
            </CategoryWrapper>
            <JokeWrapper>
                <Typography variant="h5" color="secondary">
                    {
                    props.joke
                } </Typography>
            </JokeWrapper>
            <ActionsWrapper>
                <Button variant="contained" color="secondary"
                    onClick={
                        () => {
                            handleWithJoke(props.category)
                        }
                } startIcon={<AddCircleIcon color='primary'/>}
                >hahaha! Tell me another about {props.category}, plz!</Button>
            </ActionsWrapper>
        </PaperStyled>
    );
}
const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({
    getJoke: (data) => dispatch(getJoke(data)),
    setLoadingOn: () => dispatch(setLoadingOn())
});

export default connect(mapStateToProps, mapDispatchToProps)(JokeContainer);
