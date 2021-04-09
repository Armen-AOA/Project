'use strict';
let numberOfFilms;
function start(){
     numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?','');
    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
         numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?','');
    }
}
start();

 const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
function rememberMyFilms(){
    for(let i = 0; i < 2; i++){
        const a = prompt('Один из последних просмотренных фильмов?',''),
              b = prompt('На сколько оцените его?','');
    
        if(a != null && b != null && a != '' && b != '' && a.length < 50){
            personalMovieDB[a] = b;
            console.log('done');
        }else{
            console.log('error');
            i--;
        }
    }
}

//rememberMyFilms();


function detectPersonalLevel(){
    if(personalMovieDB.count < 10){
        console.log('malo');
    }else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30){
        console.log('classic');
    }else if(personalMovieDB.count >= 30){
        console.log('tou are kinoman');
    }else{
        console.log('error');
    }
}
//detectPersonalLevel();

function showMyDB(){
    if(!personalMovieDB.privat){
        console.log(personalMovieDB);
    }
}
showMyDB();

 function writeYourGenres(){
     for(let i = 1; i < 4; i++){
         let answer = prompt(`your likely genre have number ${i}`);
         personalMovieDB.genres[i-1] = answer; 
     }
 }
 writeYourGenres();
