let numberOfFilms;
function start(){
    numberOfFilms=+prompt("Сколько фильмов вы уже посмотрели?");

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms=+prompt("Сколько фильмов вы уже посмотрели?");
    }
}
start ();

const personalMovieDB= {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms(){
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
}
rememberMyFilms();




function detect(){
    if(personalMovieDB.count <10){
        console.log('Мало');
    }else if(personalMovieDB.count>10 && personalMovieDB.count<30){
        console.log('офигеть');
    }else if(personalMovieDB.count>=30){
        console.log('жесткий');
    }else{
        console.log('ошибка');
    }
}
detect();
function showMyDb(topd){
    if(!topd){
        console.log(personalMovieDB);
    }
}
showMyDb(personalMovieDB.privat);
console.log(personalMovieDB);

function writeYG(){
    for(let i=1;i<=3;i++){
        const genre=prompt(`Ваш любимы жанер под номером ${i}`);
        personalMovieDB.genres[i-1]=genre;
    }
}
writeYG();