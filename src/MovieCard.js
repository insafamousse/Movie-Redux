import React from 'react';
import StarRatingComponent from 'react-star-rating-component';
import { Card, CardImg, CardBody,
    CardTitle } from 'reactstrap';
import {connect} from 'react-redux';
import {deleteMovie} from './action/action' 





const MovieCard = ({Y,removeMovie}) =>{ 
    
    return(
       
            <Card className='col-3 card1'>
                <div className=" List"> 
            <StarRatingComponent 
                name="rate1" 
                starCount={5}
                value={Y.rating}
            />
                <CardImg top height="300px" src={Y.image} alt="Card image cap" />
                <CardBody>
                <CardTitle>{Y.title}</CardTitle>
                </CardBody>
                </div>
                <button onClick = {() => removeMovie(Y.id) }>Delete </button>
            </Card>
        
    )
}
const mapDispatchToProps = dispatch => {
    return{
        removeMovie: newId => dispatch(deleteMovie(newId))
    }
}
export default  connect (null,mapDispatchToProps)(MovieCard);