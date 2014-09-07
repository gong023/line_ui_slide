//var slide = [
//  {
//    place: 'center',
//    message: 'にこまきさんがログインしました'
//  },
//  {
//    place: 'left',
//    message: 'みなさんこんにちは'
//  },
//  {
//    place: 'left',
//    message: 'チームにこまきともうします'
//  },
//];

var index = 0;
$(function() {
//  $('li').hide();

  $('body').keypress(function(e) {
    if (e.which == 13) {
      $("#" + index).show();
      index += 1;
      return false;
    }
  });
});
