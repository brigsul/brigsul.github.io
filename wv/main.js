var searchURL = "/w/api.php?action=query&format=json&prop=revisions&list=search&meta=&titles=Main+Page&rvprop=content&srsearch=";
var apiURL = "https://en.wikipedia.org";
var searchValue = "";
var results = [];
var t1, t2, t3, t4, t5, t6, t7, t8, t9, t10 = "";
var s1, s2, s3, s4, s5, s6, s7, s8, s9, s10 = "";
var a1, a2, a3, a4, a5, a6, a7, a8, a9, a10 = "";
var searchLink = 'https://en.wikipedia.org/wiki/';

console.log(apiURL);

function fetchList () {
  $.ajax({
      type: 'POST',
      dataType: 'jsonp',
      url: apiURL,
      xhrFields: {
        withCredentials: false
      },
      success: fetchSuccess,

      error: fetchError
    });
}

function fetchSuccess (response) {
  console.log(response);
  t1 = response.query.search[0].title.toString();
  s1 = response.query.search[0].snippet.toString();
  a1 = searchLink + t1.replace(/[^a-zA-Z0-9()]/g,'_');
  t2 = response.query.search[1].title.toString();
  s2 = response.query.search[1].snippet.toString();
  a2 = searchLink + t2.replace(/[^a-zA-Z0-9()]/g,'_');
  t3 = response.query.search[2].title.toString();
  s3 = response.query.search[2].snippet.toString();
  a3 = searchLink + t3.replace(/[^a-zA-Z0-9()]/g,'_');
  t4 = response.query.search[3].title.toString();
  s4 = response.query.search[3].snippet.toString();
  a4 = searchLink + t4.replace(/[^a-zA-Z0-9()]/g,'_');
  t5 = response.query.search[4].title.toString();
  s5 = response.query.search[4].snippet.toString();
  a5 = searchLink + t5.replace(/[^a-zA-Z0-9()]/g,'_');
  t6 = response.query.search[5].title.toString();
  s6 = response.query.search[5].snippet.toString();
  a6 = searchLink + t6.replace(/[^a-zA-Z0-9()]/g,'_');
  t7 = response.query.search[6].title.toString();
  s7 = response.query.search[6].snippet.toString();
  a7 = searchLink + t7.replace(/[^a-zA-Z0-9()]/g,'_');
  t8 = response.query.search[7].title.toString();
  s8 = response.query.search[7].snippet.toString();
  a8 = searchLink + t8.replace(/[^a-zA-Z0-9()]/g,'_');
  t9 = response.query.search[8].title.toString();
  s9 = response.query.search[8].snippet.toString();
  a9 = searchLink + t9.replace(/[^a-zA-Z0-9()]/g,'_');
  t10 = response.query.search[9].title.toString();
  s10 = response.query.search[9].snippet.toString();
  a10 = searchLink + t10.replace(/[^a-zA-Z0-9()]/g,'_');
  createCards();
  displayCards();
}

function fetchError () {
  alert('Could not retreive search results');
}

function setSearch (form) {
  searchValue = form.searchBox.value;
  console.log(searchValue);
  searchURL += searchValue;
  console.log(searchURL);
  apiURL += searchURL;
}

function parseResults (arr) {
  //t1 = results[0].title.toString();
  //s1 = results[0].snippet.toString();
  //console.log(t1 + s1);

}

function createCards () {
  $('.listResults').html("<div class='card' id='res1'></div><br><div class='card' id='res2'></div><br><div class='card' id='res3'></div><br><div class='card' id='res4'></div><br><div class='card' id='res5'></div><br><div class='card' id='res6'></div><br><div class='card' id='res7'></div><br><div class='card' id='res8'></div><br><div class='card' id='res9'></div><br><div class='card' id='res10'></div>");
}

function displayCards() {
  $('#res1').html("<a href="+a1+"><h3>"+t1+"</h3><p>"+s1+"...</p></a>");
  $('#res2').html("<a href="+a2+"><h3>"+t2+"</h3><p>"+s2+"...</p></a>");
  $('#res3').html("<a href="+a3+"><h3>"+t3+"</h3><p>"+s3+"...</p></a>");
  $('#res4').html("<a href="+a4+"><h3>"+t4+"</h3><p>"+s4+"...</p></a>");
  $('#res5').html("<a href="+a5+"><h3>"+t5+"</h3><p>"+s5+"...</p></a>");
  $('#res6').html("<a href="+a6+"><h3>"+t6+"</h3><p>"+s6+"...</p></a>");
  $('#res7').html("<a href="+a7+"><h3>"+t7+"</h3><p>"+s7+"...</p></a>");
  $('#res8').html("<a href="+a8+"><h3>"+t8+"</h3><p>"+s8+"...</p></a>");
  $('#res9').html("<a href="+a9+"><h3>"+t9+"</h3><p>"+s9+"...</p></a>");
  $('#res10').html("<a href="+a10+"><h3>"+t10+"</h3><p>"+s10+"...</p></a>");
}

function createLinks() {

}

$(document).ready(function(){
  $('#searchBtn').on('click', function () {
    setSearch(searchForm);
    $('.main').css("margin-top", "5%");
    fetchList();


  });
});
