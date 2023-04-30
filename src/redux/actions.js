import { ADD_FAV, DELETE_FAV } from "./types";
// import axios from 'axios'

export function addFav(char) {
    return {
        type: ADD_FAV,
        payload: char
    }
};
export function deleteFav(id) {
    return {
        type: DELETE_FAV,
        payload: id
    };
};

