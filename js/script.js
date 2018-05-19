
$.get("http://api.wunderground.com/api/bc83691ee725e7bb/geolookup/conditions/hourly/q/UA/Kiev.json", function(parsed_json) {
  var location = parsed_json['location']['city'];
  var temp_c = parsed_json['current_observation']['temp_c'];
  var temp_f = parsed_json['current_observation']['temp_f'];
  var windString = parsed_json.current_observation.wind_string;
  var sky = parsed_json.current_observation.weather;
  console.log(parsed_json);
  $(".headContent").append(`
    ${location}
    `);
  $(".centerBot div").append(`
    Wind: ${windString} <br/>
    <span>Sky: ${sky}</span>
    `);
  $(".centerTop div").append(`
    Temperature: ${temp_c} C (${temp_f} F)
    `);
  if(sky = "Rain") {
    $(".skySpan span").append("<img src='img/ifRain.png' height=50px width50px>");
  }

  if(temp_c < 0) {
   $(".indicator").css("background", "#ff9f3f");
   $(".boysHead").append("<img src='img/boysHeadCold.png'></img>");
   $(".boysTop").append("<img src='img/boysTopCold.png'></img>");
   $(".boysBot").append("<img src='img/boysBotCold.png'></img>");
   $(".boysShoe").append("<img src='img/boysShoeCold.png'></img>");   
   $(".girlsHead").append("<img src='img/girlsHeadCold.png'></img>");
   $(".girlsTop").append("<img src='img/girlsTopCold.png'></img>");
   $(".girlsBot").append("<img src='img/girlsBotCold.png'></img>");
   $(".girlsShoe").append("<img src='img/girlsShoeCold.png'></img>");
  } else if(temp_c <10){
   $(".indicator").css("background", "#66ffa5");
   $(".boysHead").append("<img src='img/boysHeadLightWarm.png'></img>");
   $(".boysTop").append("<img src='img/boysTopLightWarm.png'></img>");
   $(".boysBot").append("<img src='img/boysBotLightWarm.png'></img>");
   $(".boysShoe").append("<img src='img/boysShoeLightWarm.png'></img>");   
   $(".girlsHead").append("<img src='img/girlsHeadLightWarm.png'></img>");
   $(".girlsTop").append("<img src='img/girlsTopLightWarm.png'></img>");
   $(".girlsBot").append("<img src='img/girlsBotLightWarm.png'></img>");
   $(".girlsShoe").append("<img src='img/girlsShoeLightWarm.png'></img>");
  } else if(temp_c <20) {
    $(".indicator").css("background", "rgba(255, 230, 50, 0.6)");
   $(".boysHead").append("<img src='img/boysHeadStrongWarm.png'></img>");
   $(".boysTop").append("<img src='img/boysTopStrongWarm.png'></img>");
   $(".boysBot").append("<img src='img/boysBotStrongWarm.png'></img>");
   $(".boysShoe").append("<img src='img/boysShoeStrongWarm.png'></img>");   
   $(".girlsHead").append("<img src='img/girlsHeadStrongWarm.png'></img>");
   $(".girlsTop").append("<img src='img/girlsTopStrongWarm.png'></img>");
   $(".girlsBot").append("");
   $(".girlsShoe").append("<img src='img/girlsShoeStrongWarm.png'></img>");
  } else if(temp_c > 20) {
    $(".indicator").css("background", "#ff3838");
   $(".boysHead").append("<img src='img/boysHeadHot.png'></img>");
   $(".boysTop").append("<img src='img/boysTopHot.png'></img>");
   $(".boysBot").append("<img src='img/boysBotHot.png'></img>");
   $(".boysShoe").append("<img src='img/boysShoeHot.png'></img>");   
   $(".girlsHead").append("<img src='img/girlsHeadHot.png'></img>");
   $(".girlsTop").append("<img src='img/girlsTopHot.png'></img>");
   $(".girlsBot").append("<img src='img/girlsBotHot.png'></img>");
   $(".girlsShoe").append("<img src='img/girlsShoeHot.png'></img>");   
 } else {
  document.html("It's really cold or really hot. Take a look outside and choose obvious things")
 };
  });
