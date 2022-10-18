<script src="js/hotspot.js"></script>
<div id="Sink" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="gridSystemModalLabel">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title" id="gridSystemModalLabel"> 
           SD-20
        </h4>
      </div>
      <div class="modal-body">
        <div id="feedback"></div>
      </div><!-- /.modal-body -->
    </div><!-- /.modal-content -->
  </div><!-- /.modal-dialog -->
</div><!-- /.modal --><script src="js/hotspot.js"></script>
<div id="Sink" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="gridSystemModalLabel">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title" id="gridSystemModalLabel"> 
           SD-20
        </h4>
      </div>
      <div class="modal-body">
        <div id="feedback"></div>
      </div><!-- /.modal-body -->
    </div><!-- /.modal-content -->
  </div><!-- /.modal-dialog -->
</div><!-- /.modal --><script src="js/hotspot.js"></script>
<div id="Sink" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="gridSystemModalLabel">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title" id="gridSystemModalLabel"> 
           SD-20
        </h4>
      </div>
      <div class="modal-body">
        <div id="feedback"></div>
      </div><!-- /.modal-body -->
    </div><!-- /.modal-content -->
  </div><!-- /.modal-dialog -->
</div><!-- /.modal --><div id="myModal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="gridSystemModalLabel">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title" id="gridSystemModalLabel"> 
           The sink, table and trash are all cleaned using SD-20. While the stainless steel refrigerator is cleaned with Consume Eco-Lyzer.
        </h4>
      </div>
      <div class="modal-body">
        <div id="feedback"></div>
      </div><!-- /.modal-body -->
    </div><!-- /.modal-content -->
  </div><!-- /.modal-dialog -->
</div><!-- /.modal --><div id="myModal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="gridSystemModalLabel">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title" id="gridSystemModalLabel"> 
           The sink, table and trash are all cleaned using SD-20. While the stainless steel refrigerator is cleaned with Consume Eco-Lyzer.
        </h4>
      </div>
      <div class="modal-body">
        <div id="feedback"></div>
      </div><!-- /.modal-body -->
    </div><!-- /.modal-content -->
  </div><!-- /.modal-dialog -->
</div><!-- /.modal --><div id="myModal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="gridSystemModalLabel">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title" id="gridSystemModalLabel"> 
           The sink, table and trash are all cleaned using SD-20. While the stainless steel refrigerator is cleaned with Consume Eco-Lyzer.
        </h4>
      </div>
      <div class="modal-body">
        <div id="feedback"></div>
      </div><!-- /.modal-body -->
    </div><!-- /.modal-content -->
  </div><!-- /.modal-dialog -->
</div><!-- /.modal -->$( function() {
   $("map area").click( function(){

      if ($(this).attr("id") == "USA") {
         $("#feedback").css("color","red");
         $("#feedback").html("No, USA is the third one");
      }

      if ($(this).attr("id") == "China") {
         $("#feedback").css("color","green");
         $("#feedback").html("Yes, China has the largest population: 1,343,239,923");
      }

      if ($(this).attr("id") == "India") {
         $("#feedback").css("color","red");
         $("#feedback").html("No,India is the second one");
      }

  $("#feedback").css("backgroundColor","yellow");
$('#myModal').modal("show");

   });
}); //end main jQuery function
// JavaScript Document