const numberOfFilms=+prompt("Сколько фильмов вы уже посмотрели?");
const personalMovieDB= {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


for(let i=0;i<2;i++){
    const first=prompt("Один из последних фильмоыв?");
    const second=prompt("На сколько оцените его?");

    if(first!=null && second!=null && first!=''&&second!=''&&first.length<50){
        personalMovieDB.movies[first] = second;
        console.log('success');
    } else{
        console.log('error');
        i--;
    }
    
    
}
if(personalMovieDB.count <10){
    console.log('Мало');
}else if(personalMovieDB.count>10 && personalMovieDB.count<30){
    console.log('офигеть');
}else if(personalMovieDB.count>=30){
    console.log('жесткий');
}else{
    console.log('ошибка');
}
console.log(personalMovieDB);