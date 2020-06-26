const initialState = {
    categories: null,
    joke: null
}

const chuck = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_CATEGORIES':
            return {
                ...state,
                categories: action.payload
            }
        case 'SET_JOKE':
            return {
                ...state,
                joke: action.payload
            }
        default:
            return state
    }
}

export default chuck