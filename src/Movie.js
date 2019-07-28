import React,{Component} from 'react';
import './Movie.css';
import PropTypes from 'prop-types'


class MoviePosters extends Component{
    static propTypes={
        poster:PropTypes.string.isRequired
    }
    render(){
        return (
            <img src={this.props.poster} />
            )
    }
}
function Movie({title,poster,genres,synopsis}){
    return (
        <div className="Movie"> 
        <div className="Movie__Colums">
            <MoviePoster poster={poster} alt={title}/>
        </div>
        <div className="Movie__Colums">
           <h1>{title}</h1>
           <div className="Movie__Genres">
               {genres.map((genre,index)=><MovieGenre genre={genre} key={index}/>)}
           </div>
           <p className="Movie__Synopsis">
               {synopsis}
           </p>
        </div>
        </div>
        

    )
}
// prop만 존재함.
// class : props
// function : 인수로 넣은 것을 사용하면 됨. function 은 컴포넌트라서 this가 필요없음

function MoviePoster({poster,alt}){
    return(
        
       <img src={poster} alt={alt} className="Movie__Poster"></img>
    )
}
function MovieGenre({genre}){
    return (
        <span className="Movie__Genre">{genre}</span>
    )
}
MovieGenre.propTypes={
    genre:PropTypes.string.isRequired
}
MoviePoster.propTypes={
    poster:PropTypes.string.isRequired,
    alt:PropTypes.string.isRequired
}
Movie.propTypes={
    title:PropTypes.string.isRequired,
    poster:PropTypes.string.isRequired.propTypes,
    genres:PropTypes.array.isRequired,
    sysnopsis:PropTypes.string.isRequired
}
export default Movie;