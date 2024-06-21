import { json, useParams } from 'react-router-dom';
import CardContainer from '../components/CardContainer';
import { useEffect, useState } from 'react';

const SimilarPage = () => {
  const [popularMovie, setPopularMovie] = useState([]);
  const {id} = useParams();
  useEffect(() => {
    getSimilarMovies();
  }, [id])

  const getSimilarMovies = async () => {
    const res = await fetch(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=f50903fbca07fdf0f53872cb703e824f&language=en-US`);
    if (!res.ok) {
      throw json({ message: "Can't get Movies" });
    }
    const data = await res.json();
    setPopularMovie(data.results);
  }
  
  return (
    <div>
      <CardContainer title={"Similar Movies"} popularMovie={popularMovie}/>
    </div>
  )
}

export default SimilarPage;

