import {ADDMOVIES,DELETEMOVIES} from '../action/type' 
const initialState = [
    {
        id:Math.random(),
        title: 'Brid Box',
        image: 'https://images-eu.ssl-images-amazon.com/images/I/41sRIihnXzL.jpg',
        rating: 5 ,
    },

    {id:Math.random(),
        title: 'Game of throne',
        image: ' https://target.scene7.com/is/image/Target/GUEST_968b46db-9670-48a8-aae7-62b26de5d4be?wid=488&hei=488&fmt=pjpeg',
        rating: 4 },

    {id:Math.random(),
        title: 'EScape Room ',
        image : ' https://m.media-amazon.com/images/M/MV5BMjQ2NDMwMTY3MF5BMl5BanBnXkFtZTgwNDg5OTc1NjM@._V1_.jpg ' , 
        rating: 4},
        
    {id:Math.random(),
        title: ' Toy Story ',
        image: '  https://vignette.wikia.nocookie.net/pixar/images/b/b8/OriginalToyStoryVHSCover.jpg/revision/latest?cb=20150623115504' , 
        rating: 3 }
    
]
const MovieListReducer =(state=initialState, action)=>{
    switch(action.type) {
        case ADDMOVIES : 
        return (
            state.concat(action.newMovie) 

        )
        case DELETEMOVIES:
            return(
               state.filter((el,index)=>el.id!==action.newId ) 
            )
        default : return state 
    }
    
}
export default MovieListReducer ; 