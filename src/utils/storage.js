import AsyncStorage from "@react-native-async-storage/async-storage";

export async function getMoviesSave() {
  const myMovies = await AsyncStorage.getItem("@movflix");

  let MoviesSave = JSON.parse(myMovies) || [];

  return MoviesSave;
}

export async function saveMovie(newMoview) {
  let movieStorage = await getMoviesSave();

  const hasMovies = movieStorage.some((item) => item.id === newMoview.id);

  if (hasMovies) {
    console.log("Esse filme já está na sua lista!");
    return;
  }

  movieStorage.push(newMoview);

  await AsyncStorage.setItem("@movflix", JSON.stringify(movieStorage));

  console.log("Filme salvo!");
}

export async function deleteMovie(id) {
  let movieStorage = await getMoviesSave("@movflix");

  let myMovies = movieStorage.filter((item) => {
    return item.id !== id;
  });

  await AsyncStorage.setItem("@movflix", JSON.stringify(myMovies));
  console.log("Filme retirado da lista!");
  return myMovies;
}

export async function hasMovie(movie) {
  let moviesStored = await getMoviesSave("@movflix");

  const hasMovie = moviesStored.find((item) => item.id === movie.id);

  if (hasMovie) {
    return true;
  }

  return false;
}
