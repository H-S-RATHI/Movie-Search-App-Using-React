import React from 'react';

function MovieCard({ allMovieData, loading }) {
    return (
        <div>
            {Array.isArray(allMovieData) && allMovieData.length > 0 ? (
                <div className='flex flex-wrap px-4 lg:px-10 '>
                    {allMovieData.map((item, index) => {
                        const { Title, Year, Poster } = item;
                        return (
                            <div key={index} className="p-2 md:w-1/4 w-full">
                                <div className="bg-[#40407a] p-3 rounded-2xl shadow-lg hover:-translate-y-1 border-2 border-gray-200">
                                    <img className='rounded-lg w-full h-full mb-2' src={Poster} alt="" />
                                    <h2 className='text-xl text-white font-bold'>{Title}</h2>
                                    <h2 className='text-lg text-white mb-2'>Year : {Year}</h2>
                                </div>
                            </div>
                        );
                    })}
                </div>
            ) : (
                // Add a placeholder or message when allMovieData is empty or not an array
                <div>No movie data available.</div>
            )}
        </div>
    );
}

export default MovieCard;