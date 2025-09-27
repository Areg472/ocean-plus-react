import { MoviePage } from "@/components/MoviePage.tsx";
import { movies } from "@/data/movies.ts";

const movieComponents: Record<string, () => JSX.Element> = {};

movies.forEach((movie) => {
  movieComponents[movie.functionName] = () => (
    <MoviePage
      year={movie.year}
      movieLink={movie.movieLink}
      movieLink_2={movie.movieLink_2}
      creator={movie.creator}
      genres={movie.genres}
      title={movie.title}
    />
  );
});

export { movieComponents };

export default movieComponents;
