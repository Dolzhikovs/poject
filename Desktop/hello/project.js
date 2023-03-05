const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели7', '');
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    geners: [],
    privat: false
};
const a = prompt('Одиниз просмотренных фильмов?', ''),
b = prompt('На сколько хотите оценить его?', ''),
c = prompt('Одиниз просмотренных фильмов?', ''),
d = prompt('На сколько хотите оценить его?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
