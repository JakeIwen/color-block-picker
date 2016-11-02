$(document).ready(function() {
  const allColorNames = ["AliceBlue","AntiqueWhite","Aqua","Aquamarine","Azure","Beige","Bisque","Black","BlanchedAlmond","Blue","BlueViolet","Brown","BurlyWood","CadetBlue","Chartreuse","Chocolate","Coral","CornflowerBlue","Cornsilk","Crimson","Cyan","DarkBlue","DarkCyan","DarkGoldenRod","DarkGray","DarkGrey","DarkGreen","DarkKhaki","DarkMagenta","DarkOliveGreen","Darkorange","DarkOrchid","DarkRed","DarkSalmon","DarkSeaGreen","DarkSlateBlue","DarkSlateGray","DarkSlateGrey","DarkTurquoise","DarkViolet","DeepPink","DeepSkyBlue","DimGray","DimGrey","DodgerBlue","FireBrick","FloralWhite","ForestGreen","Fuchsia","Gainsboro","GhostWhite","Gold","GoldenRod","Gray","Grey","Green","GreenYellow","HoneyDew","HotPink","IndianRed","Indigo","Ivory","Khaki","Lavender","LavenderBlush","LawnGreen","LemonChiffon","LightBlue","LightCoral","LightCyan","LightGoldenRodYellow","LightGray","LightGrey","LightGreen","LightPink","LightSalmon","LightSeaGreen","LightSkyBlue","LightSlateGray","LightSlateGrey","LightSteelBlue","LightYellow","Lime","LimeGreen","Linen","Magenta","Maroon","MediumAquaMarine","MediumBlue","MediumOrchid","MediumPurple","MediumSeaGreen","MediumSlateBlue","MediumSpringGreen","MediumTurquoise","MediumVioletRed","MidnightBlue","MintCream","MistyRose","Moccasin","NavajoWhite","Navy","OldLace","Olive","OliveDrab","Orange","OrangeRed","Orchid","PaleGoldenRod","PaleGreen","PaleTurquoise","PaleVioletRed","PapayaWhip","PeachPuff","Peru","Pink","Plum","PowderBlue","Purple","Red","RosyBrown","RoyalBlue","SaddleBrown","Salmon","SandyBrown","SeaGreen","SeaShell","Sienna","Silver","SkyBlue","SlateBlue","SlateGray","SlateGrey","Snow","SpringGreen","SteelBlue","Tan","Teal","Thistle","Tomato","Turquoise","Violet","Wheat","White","WhiteSmoke","Yellow","YellowGreen"];
  var numColors = 12;
  var colorArray = randomColors(allColorNames, numColors);
  var correctColor = colorArray[randomNumber(1, numColors)];
  appendDom();
  console.log(correctColor);

  $('.container').on('click', '.color', function(event) {
    event.preventDefault();
    $('.msg').remove(); //delete any printed messages
    // get color from class name
    var thisClass = $(this).attr('class').split(' ')[1];
    //check if right color was clicked and print appropriate mes
    if (checkClick(correctColor, thisClass) == false) {
      $('h2').append('<span class="msg"> Incorrect!</span>')
    } else {
      $('h2').append('<span class="msg"> Wow. Amazing job. I am so impressed. </span>')
    }
  });



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
      var colorNum = randomNumber(0, allColors.length - 1);
      colors[i] = allColors[colorNum];
      allColors.splice(colorNum, 1); //prevent duplicate colors
    }
    console.log(allColors);
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
