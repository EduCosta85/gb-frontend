import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import {getAllCategories, getJoke, setLoadingOn} from '../../actions/chuckNorrisApi'
import {Typography, ExpansionPanel, ExpansionPanelSummary, ListItem} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

function Categories(props) {

    useEffect(() => {
        props.getCategories()
    }, [props])
    
    const [expanded, setExpanded] = useState(true);

    const handleWithJoke = (item) => {
        handleExpand()
        props.setLoadingOn()
        props.getJoke(item)
    }
    const handleExpand = () => {
        if (window.matchMedia("(min-width:770px)").matches) {
            setExpanded(true);
        } else {
            setExpanded(!expanded);
        }
    };

    return (
        <ExpansionPanel 
            expanded={expanded}
            onClick={ () => { handleExpand() } }>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
                <Typography color='secondary'>Categories</Typography>
            </ExpansionPanelSummary>
            {
            props.CategoriesList && props.CategoriesList.map((item, index) => {
                return (
                    <ListItem button
                        key={index}
                        onClick={ () => { handleWithJoke(item) } }>
                        <Typography color='secondary'>
                            { item.charAt(0).toUpperCase() + item.slice(1) } </Typography>
                    </ListItem>
                )
            })
        } </ExpansionPanel>
    );
}

const mapStateToProps = state => ({CategoriesList: state.chuck.categories});
const mapDispatchToProps = dispatch => ({
    getCategories: () => dispatch(getAllCategories()),
    getJoke: (data) => dispatch(getJoke(data)),
    setLoadingOn: () => dispatch(setLoadingOn())
});

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
