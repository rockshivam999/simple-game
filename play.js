var btnclr=["dummy", "red", "blue", "green", "yellow"];
var gameptrn=[];
var curr=0;
gameover=true;
$('.btn').click(function(){
   if(!gameover){
    var us=$(this).attr("id");
    $(this).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);   
    if(us==gameptrn[curr]){
        curr++;
       
     
            audio = new Audio('sounds/'+us+".mp3");
            audio.play();
           
            if(curr>gameptrn.length-1){
                setTimeout(function(){
                    nextSquence();
                },1000);
            }
                
       
        }else{
            audio = new Audio('sounds/wrong.mp3');
            gameover=true;
            audio.play();
            gameptrn=[];
           
        }
    }

});

function nextSquence(){
    curr=0;
    var ran=Math.floor(Math.random()*4)+1;
    var rancolor=btnclr[ran];
    console.log($("#"+rancolor));
   
    $("#"+rancolor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
   
            audio = new Audio('sounds/'+btnclr[ran]+".mp3");
            audio.play();
        gameptrn.push(rancolor);
    

} 
$(document).keypress(function(){
    if(gameover){    nextSquence();
    
    gameover=false;
    }

});

function formobileuserStartGame(){
    if(gameover){    nextSquence();
    
        gameover=false;
        }
}
