var slide = [
  {
    place: 'info',
    message: '9/6(土) ~ 9/7(日)<br/>THE FASHION HACK IN TOKYO'
  },
  {
    place: 'info',
    message: 'にこまきさんがログインしました'
  },
  {
    place: 'author',
    message: 'みなさんこんにちは'
  },
  {
    place: 'author',
    message: 'チームにこまきと申します'
  },
  {
    place: 'author',
    message: '私達はエンジニア二名で構成されたチームです'
  },
  {
    place: 'author',
    message: 'そんな私達のプロダクトのテーマは'
  },
  {
    place: 'author',
    message: '<font size=50px>ファッション × チャット</font>'
  },
  {
    place: 'author',
    message: 'その名も'
  },
  {
    place: 'me',
    message: '<img src="img/coordlab.png">'
  },
  {
    place: 'author2',
    message: '名前の由来はコーディネーション ×  コラボ ×ラボ'
  },
  {
    place: 'author2',
    message: '<font color="red">友達とわいわいチャットをしながらコーディネートを作れるwebサイトです</font>'
  },
  {
    place: 'author2',
    message: '作るきっかけはとても単純で'
  },
  {
    place: 'author2',
    message: '相方の赤嶺くんがチャットを眺めている時にぼそっとそんなものがあったら便利だよね、とつぶやいたので'
  },
  {
    place: 'author2',
    message: 'じゃあそれでやろうか、となってガッと作った感じです'
  },
  {
    place: 'author2',
    message: 'デモしましょう'
  },
  {
    place: 'author2',
    message: '<font size=50px>http://coordlab.kaz.zone:4000/</font>'
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

var append_author2 = function(i, message) {
  var element = "<tr id=slide_" + i + " style='display: none;'><td><div class='msg-balloon'>" + message + "</div></td></tr>";
  $("#author_message2").append(element);
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
      case 'author2':
        append_author2(i, slide[i].message);
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
      var top = $('#top');
      $('html, body').animate({scrollTop: top[0].scrollHeight}, 'fast');
      return false;
    }
  });
});
