import React from "react";
import {connect} from "react-redux";
import {getJoke, setLoadingOn} from '../../actions/chuckNorrisApi'
import {
    Button,
    Typography,
    CardContent,
    CardActions,
    Card
} from '@material-ui/core';
import {CardWrapper, CardActionsWrapper, CardJokeWrapper} from './styled'

function JokeContainer(props) {

    const handleWithJoke = (item) => {
        props.setLoadingOn()
        props.getJoke(item)
    }

    return (
        <CardWrapper>
            <Card>
                <CardContent>
                    <Typography variant="body1" color="primary">
                        <b>{
                            props.category.charAt(0).toUpperCase() + props.category.slice(1)
                        }</b>:
                    </Typography>
                </CardContent>
                <CardJokeWrapper>
                    <Typography variant="h5" color="secondary">
                        {
                        props.joke
                    } </Typography>

                </CardJokeWrapper>
                <CardActionsWrapper>
                    <Button variant="contained" color="secondary"
                        onClick={
                            () => {
                                handleWithJoke(props.category)
                            }
                    }>hahaha! Tell me another one, plz!</Button>
                </CardActionsWrapper>
            </Card>
        </CardWrapper>
    );
}
const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
    getJoke: (data) => dispatch(getJoke(data)),
    setLoadingOn: () => dispatch(setLoadingOn())
});

export default connect(mapStateToProps, mapDispatchToProps)(JokeContainer);
