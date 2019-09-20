  import {ADDMOVIES, DELETEMOVIES } from './type' 
   export const addMovies = (newMovie) => {
       return {
           type : ADDMOVIES,
           newMovie
       }

   } 
   export const deleteMovie = (newId) => {
       return {
            type : DELETEMOVIES,
            newId
        }
    }
    
