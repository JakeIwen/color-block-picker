$(document).ready(function() {

  var allColorNames = ["AliceBlue","AntiqueWhite","Aqua","Aquamarine","Azure","Beige","Bisque","Black","BlanchedAlmond","Blue","BlueViolet","Brown","BurlyWood","CadetBlue","Chartreuse","Chocolate","Coral","CornflowerBlue","Cornsilk","Crimson","Cyan","DarkBlue","DarkCyan"];

  var numColors = 4;
  var colorArray = randomColors(allColorNames, numColors);
  var correctColor = colorArray[randomNumber(1, numColors)];
  console.log(correctColor);
    $('.container').on('click', '.color', function(event) {
      event.preventDefault();
      var thisClass = $(this).attr('class').split(' ')[1];
      console.log(thisClass);

      if (checkClick(correctColor, thisClass) == false) {
        alert('Try again');
      } else {
      alert('You win!');
      }
    });

    appendDom();

  function appendDom() {
    //add new row to table with new employee data
    //provide unique row class for each table row
    var $el = $('.container');
    for(var i = 0; i < numColors; i++) {
      $el.append('<div style="background-color:' + colorArray[i] + '" class="color '+ colorArray[i] +'"></div>');
    }
  }

  function randomColors(allColors, numColors) {
    var colors = [];
    for(i = 0; i < numColors; i++) {
      var colorNum = randomNumber(1, allColors.length) - 1;
      colors[i] = allColors[colorNum];
      allColors.splice(colorNum, 1);
    }
    return colors;
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
