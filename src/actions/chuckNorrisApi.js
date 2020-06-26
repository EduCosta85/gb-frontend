import axios from "axios";

const baseUrl = "https://api.chucknorris.io/jokes";

export const getAllCategories = () => async (dispatch) => {
    try {
        const response = await axios.get(`${baseUrl}/categories`);
        dispatch(setCategories(response.data))
        dispatch(setLoadingOff())
    } catch (error) {
        console.error(error)
        throw new Error("Error on trying to get all categories")
    }
};

export const getJoke = (data) => async (dispatch) => {
    try {
        const response = await axios.get(`${baseUrl}/random?category=${data}`);
        dispatch(setJoke(response.data))
        dispatch(setLoadingOff())
    } catch (error) {
        console.error(error)
        throw new Error("Error on trying to get a joke")
    }
};


export const setJoke = (data) => ({type: "SET_JOKE", payload: data});
export const setCategories = (data) => ({type: "SET_CATEGORIES", payload: data});

export const setLoadingOff = () => ({type: "SET_FALSE", payload: ""});
export const setLoadingOn = () => ({type: "SET_TRUE", payload: ""});