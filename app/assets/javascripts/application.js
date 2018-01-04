// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require_tree .


/* no miks sa siia vaatad??? */


//$("#picker-btn button").click(function() {
//  randomPicker();
//});

//function updateRecordDisplay(data) {
//  console.log(data);
//}

function randomPicker(data) {
  var places    = data["places"];
  
  var list = $("#random-place ul");
  list.html('');
  list.attr('style', '');
  list.stop();

  $(places).each(function(i,place) {
    list.append("<li>"+place+"</li>");
  });

  listHeight = (parseInt($("#random-place ul").css('height')) * -1) +48;
  list.animate({top: listHeight}, 3000);
  
  setTimeout(function() {
    console.log(data['user_name']);
    $('#history-list').prepend('<li>Now '+data['place_name']+' - '+data['user_name']+'</li>');
  }, 3500, data);
}

//function appendHistory(user_name, place_name) {
//  alert();
//}