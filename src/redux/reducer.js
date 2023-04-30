import { ADD_FAV, DELETE_FAV } from "./types"

const initialState = {
    myFavorites: []
}

const rootReducer = (state = initialState, action) => {
    console.log(state);
    switch (action.type) {
        case ADD_FAV:
            return {
                ...state,
                myFavorites: [...state.myFavorites, action.payload]
            }
        case DELETE_FAV:
            return {
                ...state,
                myFavorites: state.myFavorites.filter(elemento => elemento.id !== action.payload) //si es igual no lo incluye en la lista
            }
        default:
            return { ...state }
    }
}

export default rootReducer