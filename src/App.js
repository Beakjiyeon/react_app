import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './Movie';



class App extends Component{

  state={

  }

  componentDidMount(){
    this._getMovies();
  }
  
  _callApi=()=>{
    // promise와 fetch
    // ajax를 비동기로 불러오는 장점 fetch
    return fetch('https://yts.lt/api/v2/list_movies.json/sort_by=raiting')
    .then(response=>response.json())
     .then(json=>json.data.movies)
    //.then(json=>console.log(">>>>", json))
    .catch(err=>console.log(err))
  }
  _renderMovies=()=>{
    // const movies=[<Movie props />,<Movie props/>]
    
    const movies=this.state.movies.map((movie, index) =>{
      return <Movie key={movie.id} 
      genres={movie.genres} 
      title={movie.title} 
      poster={movie.small_cover_image}
      synopsis={movie.synopsis}/>
    })
    
    return movies
  }
  _getMovies=async ()=>{
    const movies=await this._callApi()
    // await 모드에서 호출
    // await
    this.setState({movies})
  }
  render(){
    return(
      <div className="App">
        {this.state.movies ? this._renderMovies() : 'loading'}
      </div>
    );
  }

  
}
export default App;
