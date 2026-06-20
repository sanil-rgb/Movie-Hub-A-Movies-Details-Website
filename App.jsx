import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import SearchIcon from "./search.svg";
import "./App.css";

const API_URL = "https://www.omdbapi.com/?apikey=4dcfa833";

function App() {
const [movies, setMovies] = useState([]);
const [searchTerm, setSearchTerm] = useState("");

const searchMovies = async (title) => {
try {
const response = await fetch(`${API_URL}&s=${title}`);
const data = await response.json();

```
  if (data.Search) {
    setMovies(data.Search);
  } else {
    setMovies([]);
  }
} catch (error) {
  console.log("Error fetching movies:", error);
  setMovies([]);
}
```

};

useEffect(() => {
searchMovies("Superman");
}, []);

return ( <div className="app"> <h1>Movie Hub</h1>

```
  <div className="search">
    <input
      placeholder="Search for movies..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          searchMovies(searchTerm);
        }
      }}
    />

    <img
      src={SearchIcon}
      alt="search"
      onClick={() => searchMovies(searchTerm)}
    />
  </div>

  {movies.length > 0 ? (
    <div className="container">
      {movies.map((movie) => (
        <MovieCard
          key={movie.imdbID}
          movie1={movie}
        />
      ))}
    </div>
  ) : (
    <div className="empty">
      <h2>No Movies Found</h2>
    </div>
  )}
</div>
```

);
}

export default App;
