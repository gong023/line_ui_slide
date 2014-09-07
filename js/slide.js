var slide = [
  {
    place: 'info',
    message: 'にこまきさんがログインしました'
  },
  {
    place: 'author',
    message: 'みなさんこんにちは'
  },
  {
    place: 'me',
    message: 'チームにこまきともうします'
  },
];

var append_info = function(i, message) {
  var element = "<tr id=slide_" + i + " style='display: none;'><td class='msg center-block text-center'><div class='msg-balloon'>" + message + "</div></td></tr>"
  $("#info_message").append(element);
}

var append_author = function(i, message) {
  var element = "<tr id=slide_" + i + " style='display: none;'><td><div class='msg-balloon'>" + message + "</div></td></tr>";
  $("#author_message").append(element);
}

var append_me = function(i, message) {
  var element = "<tr id=slide_" + i + " style='display: none;'><td class='col-msg'><div class='msg-balloon'>" + message + "</div></td></tr>";
  $("#me_message").append(element);
}


var index = 0;
$(function() {

  for(var i in slide) {
    switch(slide[i].place) {
      case 'info':
        append_info(i, slide[i].message);
        break;
      case 'author':
        append_author(i, slide[i].message);
        break;
      case 'me':
        append_me(i, slide[i].message);
        break;
    }
  }

  $('body').keypress(function(e) {
    if (e.which == 13) {
      $("#slide_" + index).show();
      index += 1;
      return false;
    }
  });
});
