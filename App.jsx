 import React from "react";
 import { useEffect , useState} from "react";
 import MovieCard from "./MovieCard";
 import SearchIcon from './search.svg'
 const API = ' http://www.omdbapi.com?&apikey=4dcfa833'
 
 const movie1 = {
    "Title": "Superman",
    "Year": "1978",
    "imdbID": "tt0078346",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMzA0YWMwMTUtMTVhNC00NjRkLWE2ZTgtOWEzNjJhYzNiMTlkXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg"
}
 
 
 function App (){
    const [movies,setMOvies]=useState([]);
    const [searchTerm, setSearchTerm]=useState('');

    const searchMovie = async (title) =>{
        const res = await fetch ( `${API}&s=${title}`)
        const data = await res.json();
        setMOvies(data.Search);


    }
    useEffect(() => {searchMovie('superman');
    },[]);





     return(
        <div className="app">
        <h1> Movie hub </h1>
        <div className="search">
                <input 
                placeholder="search for movies"
                 value={searchTerm}
                 onChange={(e)=>setSearchTerm(e.target.value)}
                />
                <img 
                src={SearchIcon}
                alt="search"
                onClick={ ()=>searchMovie(searchTerm)} />
        </div>
        {
            movies?.length> 0 
            ? (
                <div className="container">
                { movies.map(movie =>( <MovieCard movie1={movie}/>
                ))

                }
               
            </div>
            ):(
                <div className="empty">
                    <h2> no movies found </h2>
                </div>
            )
        }
       
        </div>

    );



 }
export default App ;