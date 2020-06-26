import React, {useEffect} from "react";
import {connect} from "react-redux";
import {getAllCategories, getJoke, setLoadingOn} from '../../actions/chuckNorrisApi'
import {CategoriesWrapper} from './styled'
import {List, ListItem, ListItemText} from '@material-ui/core';

function Categories(props) {

    useEffect(() => {
        props.getCategories()
    }, [props])

    const handleWithJoke = (item) => {
        props.setLoadingOn()
        props.getJoke(item)
    }

    return (
        <CategoriesWrapper> {
            props.CategoriesList && props.CategoriesList.map((item, index) => {
                return (
                    <List component="nav" key={index} onClick={() =>{handleWithJoke(item)}}>
                        <ListItem button>
                            <ListItemText primary={item.charAt(0).toUpperCase() + item.slice(1)}/>
                        </ListItem>
                    </List>
                )
            })
        } </CategoriesWrapper>
    );
}

const mapStateToProps = state => ({CategoriesList: state.chuck.categories});

const mapDispatchToProps = dispatch => ({
    getCategories: () => dispatch(getAllCategories()),
    getJoke: (data) => dispatch(getJoke(data)),
    setLoadingOn: () => dispatch(setLoadingOn())
    
});

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
