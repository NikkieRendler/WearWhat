jQuery(document).ready(function($) {
  $.ajax({
  url : "http://api.wunderground.com/api/bc83691ee725e7bb/geolookup/conditions/q/UA/Kiev.json",
  dataType : "jsonp",
  success : function(parsed_json) {
  var location = parsed_json['location']['city'];
  var temp_c = parsed_json['current_observation']['temp_c'];
  var temp_f = parsed_json['current_observation']['temp_f'];

  $(".temp").append(`<div>${location}: ${temp_c}</div>`);

  if(temp_c < 15) {
	$(".indicator").css("background", "#81e9ef").append("Recommended", "<img src='img/for_cold.png'></img>");
	} else {
	$(".indicator").css("background", "#e98630").append("Recommended", "<img src='img/for_warm.png'></img>");
	} 
  }
  });
});
