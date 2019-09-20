import React, { Component } from 'react';
import MovieCard from './MovieCard';
import { connect } from 'react-redux'
import Plus from './Plus.png';
import { addMovies } from './action/action';

class  MovieList extends Component{
    state = { 
        id: 6,
        title: '',
        rating: 1
     }
    render(){
        const { MoviesPlus, movies, onAddMovie = () => { } } = this.props
        return (
            
            <div className='card-list'>
            <div className="row">

                {movies.map(el => <MovieCard key={el.id} Y={el} />)}
            </div>
            <div >

                <img src={Plus} style={{width: "50px"}} className='prompt-button' onClick={() => {
                    MoviesPlus({...this.state})
                }} type="button" alt="image-prompt" />
            </div>
        </div>
    )
    
    
}
}

const mapStateToProps = state => {
    return{
        movies: state.MovieListReducer
    }
}
const mapDispatchToProps = dispatch => {
    return {
        MoviesPlus : newMovie => dispatch(addMovies(newMovie={
            id: Math.random(),
            title: prompt('movie title: '),
            rating: Number(prompt('movie rating: '))
        }))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(MovieList); 