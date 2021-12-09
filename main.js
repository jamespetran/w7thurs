$(document).ready( readyNow);

function readyNow() {
      console.log('JQ');

      $('#top').append(`
      <h1>
            Hi there this is my jQuery test page and its cool
      </h1>
      <h5>this is h5 text</h5>
      `)
      $(`plantButton`).on('click', plantAdder)


  } // end readyNow

function plantAdder() {
      let inputBox = $('#plantName').val();
      console.log(inputBox);
}