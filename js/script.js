const numberOfFilms = +prompt('Сколько фильмов посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    generes: [],
    privet: false
};

const a = prompt('Один из последних просмотренных фильмов?', ''),
      b = prompt('Насколько вы оцените его?', ''),
      c = prompt('Один из последних просмотренных фильмов?', ''),
      d = prompt('Насколько вы оцените его?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);

//*привет тест
