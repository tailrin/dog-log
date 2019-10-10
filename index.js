'use strict';

function getDogImage() {
  fetch(`https://dog.ceo/api/breeds/image/random/${$('#number-of-dogs').val()}`)
    .then(response => response.json())
    .then(responseJson => {
      responseJson.message.forEach(message => {
        console.log(message);
      });
    });
    
}

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    getDogImage();
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});
