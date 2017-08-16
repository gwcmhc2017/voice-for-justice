$(document).ready(function() {
  $('#storybutton').click(function(){
  var text=$('#text').val();
  var name=$('#name').val();
  var location=$('#location').val();
  var efforts=$('#efforts').val();
  var concern=$('#concern').val();


  $('#result').append('Dear ' + text + ', My name is ' + name  + '. I live in ' + location + '. I am concerned about ' + concern + '. I do not think you are doing enough to combat this issue in America. My community and I would appreciate your efforts to')
  .append(efforts + '. Thank you for your consideration. Sincerely ' + name + '.<br/>');
});
   $('#storybutton').show('copy');

});
