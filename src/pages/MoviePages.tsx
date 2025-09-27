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

const movieExports = Object.fromEntries(
  movies.map((movie) => [movie.functionName, movieComponents[movie.functionName]])
);
export const {
  Cailloumovie,
  Cftwcftl123,
  Cftwcftl4,
  Cftwcftl5,
  Jackpaul,
  Jpspooktacular,
  Comedyworld,
  Gabricks,
  Goofus1,
  Goofus2,
  Littlevalendies,
  Mathwarfare,
  Unhappy,
  Veyshalmovie,
  Vyondcinema,
  Nightshiftsurvival,
  Rosiegetsgrounded,
  Jpchristmas,
  Serbs,
  HorridJames,
  CaillouInto,
  CaillouAcross,
  AndrewOrozco1,
  AndrewOrozco2,
  AndrewOrozco3,
  RetroAndEllie,
  VanceProd,
} = movieExports;

export { movieComponents };
