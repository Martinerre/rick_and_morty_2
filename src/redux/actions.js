import { ADD_FAV, DELETE_FAV } from "./types";
// import axios from 'axios'

export function addFav(product) {
    return {
        type: ADD_FAV,
        payload: product
    }
};
export function deleteFav(id) {
    return {
        type: DELETE_FAV,
        payload: id
    };
};

