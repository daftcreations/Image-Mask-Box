$(document).ready(function(){
    $("#container").mousemove(function(e){
        $("#box").css({left:e.pageX, top:e.pageY}); 
        $("#container img").css({left:e.pageX, top:e.pageY}); 
    }); 
});