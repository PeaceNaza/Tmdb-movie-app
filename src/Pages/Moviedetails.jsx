import React from 'react'
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';


const Moviedetails = () => {
  const { movieId } = useParams() 

  const { data: movieDetails, isLoading, error } = useQuery({
    queryKey: ["movieDetails", movieId],

    queryFn: () => 
      fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=11eec6b26256cd542c6f92ff289594c5`).then((res) => res.json()), //fetching data from tmdb api

  });

  if (isLoading) {
    return <div className='text-white'>
      <span className="loading loading-spinner loading-xs"></span>
      <span className="loading loading-spinner loading-sm"></span>
      <span className="loading loading-spinner loading-md"></span>
      <span className="loading loading-spinner loading-lg"></span>
    </div>
  } 

  if (error) {
    return <p className='text-red-600 font-bold text-lg'>Something went wrong</p>
  }
  return (
    <div className='text-white bg-[#233549] min-h-screen'>
      <h1 className='text-center font-bold text-2xl pt-5'>Movies details</h1>
    <div className='card text-black bg-white w-[90%] ml-16 mt-5'>
      {movieDetails && (
        <div className='card-body'>
          <img src={`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`} alt={movieDetails.title} className='w-[280px] h-[300px] rounded-sm' />
          <h1>{movieDetails.title}</h1>
          <p>{movieDetails.id}</p>
          <p>{movieDetails.release_date}</p>
          <p>{movieDetails.vote_average}</p>
          <p>{movieDetails.overview}</p> 
        </div>
      )} 
    </div>
    </div>
  )
}

export default Moviedetails