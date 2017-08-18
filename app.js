$(document).ready(function() {
  $('#storybutton').click(function(){
  var text=$('#text').val();
  var name=$('#name').val();
  var location=$('#location').val();
  var efforts=$('#efforts').val();
  var concern=$('#concern').val();


  $('#result').text('Dear ' + text + ', My name is ' + name  + '. I live on ' + location + '. I am concerned about ' + concern + '. I do not think you are doing enough to combat this issue in America. My community and I would appreciate your efforts to')
  .append(efforts + '. Thank you for your consideration. Sincerely ' + name + '.<br/>' );
});
$('#storybutton2').click(function(){
var person=$('#person').val();
var place=$('#place').val();
var issuez=$('#issuez').val();
var solution=$('#solution').val();
var contact=$('#contact').val();

$('#result2').text('Hello, my name is ' + person + '. I live on' + place + ". I am concerned about" + issuez + ". I do not think you are doing enough to combat this issue in America. My community and I would appreciate your efforts to " + solution + ". Thank you for your consideration.")
.append(". You can contact me at" + contact);
});
});
