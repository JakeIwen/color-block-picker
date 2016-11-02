$(document).ready(function() {

var correctColor = randomColor();


  console.log(correctColor);

  $('.container').on('click', '.color', function(event) {
    event.preventDefault();
    var thisClass = $(this).attr('class').split(' ')[1];
    console.log(thisClass);
    if (checkClick(correctColor, thisClass)) {
      alert('You win!');
    } else {
    console.log('Try again');
  }
  });

function randomColor() {
  var colorNum = randomNumber(1,4);
  switch (colorNum) {
    case 1:
      return 'green';
      break;
    case 2:
      return 'red';
      break;
    case 3:
      return 'blue';
      break;
    case 4:
      return 'orange';
      break;
    default:
    }
  }
  appendDom();

  function appendDom() {
    //add new row to table with new employee data
    //provide unique row class for each table row
    var $el = $('.container');
    $el.append(
      '<div class="color green"></div>' +
      '<div class="color red"></div>' +
      '<div class="color blue"></div>' +
      '<div class="color orange"></div>');
  }

  function checkClick(correct, chosen) {
      if (correct == chosen) {
        return true;
      } else {
        return false;
      }
  }
  function randomNumber(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);
  }

});
