
var tweetQuote = '';


function fetchSuccess (response) {
  console.log(response);
  $('#quote').html(' " ' + response.quoteText);
  tweetQuote = response.quoteText;
  console.log(tweetQuote);
  if (response.quoteAuthor === '') {
    $('#author').html(' - Unknown');
  }
  else {
    $('#author').html(' - ' + response.quoteAuthor);
  }
}

function fetchError () {
  alert('Could not retreive quote');
}

function fetchQuote () {
  $.ajax({
    type: 'GET',
    dataType: 'jsonp',
    url: 'http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?',
    xhrFields: {
      withCredentials: false
    },
    success: fetchSuccess,

    error: fetchError
  });
}

function newColor () {
  var colors = ['#e67e22', '#3498db', '#9b59b6', '#e74c3c', '#2c3e50'];
  var primColor = colors[Math.floor(Math.random() * colors.length)];
  $('body').css({'background': '' + primColor});
  $('#quotebox').css({'color': '' + primColor});
  $('#creditbox').css({'color': '' + primColor});
  $('button').css({'background': '' + primColor});
}

$(document).ready(function () {
  newColor();
  fetchQuote();

  $('#newQuote').on('click', function () {
    newColor();
    fetchQuote();
  });

  $('#tweetthis').on('click', function () {
    window.open('http://twitter.com/intent/tweet?text=' + tweetQuote);
  });
});
