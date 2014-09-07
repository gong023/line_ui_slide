var slide = [
  {
    place: 'center',
    message: 'にこまきさんがログインしました'
  },
  {
    place: 'left',
    message: 'みなさんこんにちは'
  },
  {
    place: 'left',
    message: 'チームにこまきともうします'
  },
];

var index = 0;
$(function() {
  $('body').keypress(function(e) {
    if (e.which == 13) {
      d = slide[index];
      console.log(d);
      var item = $("<li><div class='" + d.place +"'><div class='msg-balloon'>" + d.message + "</div></div></li>");
      $("#content").append(item);
      index += 1;
      return false;
    }
  });
});
