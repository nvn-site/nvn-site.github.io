// JavaScript Document
$( function() {
   $("map area").click( function(){

      if ($(this).attr("id") == "Refrigerator") {
         $("#feedback").css("color","red");
         $("#feedback").html("The refrigerator is cleaned with Consume Eco-Lyzer and the white towel.");
      }

      if ($(this).attr("id") == "Table") {
         $("#feedback").css("color","green");
         $("#feedback").html("The table is cleaned with SD-20 and the green towel.");
      }

      if ($(this).attr("id") == "Trash") {
         $("#feedback").css("color","red");
         $("#feedback").html("The table is cleaned with SD-20 and the green towel.");
      }

	 if ($(this).attr("id") == "Sink") {
         $("#feedback").css("color","red");
         $("#feedback").html("The table is cleaned with Consume Eco-Lyzer and the white towel. But the counter is cleaned with SD_20 and the green towel.");
      }  
  $("#feedback").css("backgroundColor","yellow");

   });
}); //end main jQuery function


