const numberOfFilms=+prompt("Сколько фильмов вы уже посмотрели");
const personalMovieDB= {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
const first=prompt("Один из последних фильмоыв?");
const second=prompt("На сколько оцените его?");
personalMovieDB.movies[first] = second;