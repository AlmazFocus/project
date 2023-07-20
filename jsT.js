const numberOfFilms=+prompt("Сколько фильмов вы уже посмотрели?");
const personalMovieDB= {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
if (numberOfFilms===1){
    console.log('мало');
}
else{
    console.log('норм так');
}
const first=prompt("Один из последних фильмоыв?");
const second=prompt("На сколько оцените его?");
personalMovieDB.movies[first] = second;
console.log(personalMovieDB);