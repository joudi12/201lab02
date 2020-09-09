'use strict';

var score = 0;
var username = prompt('what is your name ???');
alert('welcome ' + username + ' nice to meet you');



var button = document.getElementById("hide");
function hide() {

  function quastion1(){
    var myname = prompt('is my name joudi ?').toLowerCase();
    if (myname === 'yes' || myname === 'y') {
    // consol.log( right my name is joudi);
      score++;
      alert('right my name is joudi :)');
    } else if (myname === 'no' || myname === 'n') {
    // consol.log(sorry your answered wrong but  it is not problem );
      alert('sorry your answered wrong but  it is not problem');
    } else {
      alert('try maybe you can know the answer');
    }
  }
  quastion1();

  function quastion2(){
    var myage = prompt('Am i 20 years old ???').toLowerCase();

    if (myage === 'yes' || myage === 'y') {
    // consol.log(wrong i am not 20 ,but it\'s okay maybe you will know the next quastion);
      alert('wrong i am not 20 ,but it\'s okay maybe you will know the next quastion');

    } else if (myage === 'no' || myage === 'n') {
    // consol.log(right i am not 20 i am 19 );
      score++;
      alert('right i am not 20 i am 19 ;)');
    } else {
      alert('try maybe you can know the answer');
    }
  }
  quastion2();


  function quastion3(){
    var myeducation = prompt('Did I graduate from the university? ').toLowerCase();
    if (myeducation === 'yes' || myeducation === 'y') {
    // consol.log(You were very close, but no problem, you can try the next question );
      alert('You were very close, but no problem, you can try the next question');
    } else if (myeducation === 'no' || myeducation === 'n') {
    // consol.log(wow You have answered correctly );
      score++;
      alert('wow You have answered correctly ');
    } else {
      alert('try maybe you can know the answer');
    }
  } 
  quastion3();


  function quastion4(){
    var myunivercity = prompt('Do i want to study computer science???').toLowerCase();
    if (myunivercity === 'yes' || myunivercity === 'y') {
    // consol.log(omg you know me well );
      score++;
      alert('omg you know me well');
    } else if (myunivercity === 'no' || myunivercity === 'n') {
    // consol.log(wrong sorry i like computer science );
      alert('wrong sorry i like computer science ;)');
    } else {
      alert('try maybe you can know the answer');
    }
  } 
  quastion4();

  function quastion5(){
    var mygols = prompt('Do you think i want to be professional in code ???? ').toLowerCase();
    if (mygols === 'yes' || mygols === 'y') {
    // consol.log(perfect that\'s it );
      score++;
      alert('perfect that\'s it ');
    } else if (mygols === 'no' || mygols === 'n') {
    // consol.log(wrong i want to be professional in code );
      alert('wrong i want to be professional in code  ');
    } else {
      alert('try maybe you can know the answer');
    }
  }
  quastion5();


  function quastion6(){
    for (var i = 1; i < 5; i++) {
      var x = 5;
      var answer = prompt('pleas guess number from 1 to 10');
      var Theanswer = Number(answer);
      if (Theanswer > x) {
        alert('too high try again :( ');
      }
      else if (Theanswer < x) {
        alert('too low try again :)');
      }
      else {
        alert('right you know it :)');
        score++;
        console.log(score);

        break;
      }
    }
    alert('the correct answer is 5 :)');
  }
  quastion6();
  var number = [2, 22, 19];

  function quastion7(){
    for (var y = 0; y < 6; y++) {
      var usernumber = prompt('in this quastion you have to guess number from 1 to 30 ');
      var thenumber = Number(usernumber);
      if (thenumber === number[0] || thenumber === number[1] || thenumber === number[2]) {
        alert('you are so smart you know it ;)');
        score++;
        console.log(score);

        break;
      }
    }
  } 



  quastion7();
  alert('the correct numbers are \n 2 \n 22 \n19');

  alert('congratioation you git ' + score + ' from 7');




  alert('thank you  ' + username + ' for giving me part of your time to get to know me and I hope you have fun ');
}










