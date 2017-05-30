var question = [["In 'The Sword in the Stone', what does Merlin call 'The Greatest Force on Earth'?", "Wisdom", "Gravity", "Fear", "Love", 4],
               ["What is the name of Merida’s horse in 'Brave'?", "Freckle", "Angus", "Gordon", "Justin", 2],
               ["In the movie 'Cars', what color is Sally Carrera?", "Blue", "Red", "Yellow", "Green", 1],
               ["In which city is the Disney movie 'Ratatouille' based?", "London", "Rome", "Dublin", "Paris", 4],
               ["What did Ariel call 'thingamabobs'?", "Forks", "Knifes", "Cork Screws", "Mirrors", 3],
               ["What popular Disney character makes an appearance as a stuffed animal in Frozen??", "Mickey", "Donald", "Tiger", "Tinker Bell", 1],
               ["Which princess is based on a real person??", "Jasmine", "Pocahontas", "Merida", "Elsa", 2],
               ["What U.S. city is the setting of The Princess and The Frog inspired by??", "New York", "Atlanta", "Boston", "New Orleans", 4],
               ["What is the name of Mulan’s pet dragon??", "Mushu", "Shinto", "Nago", "Ashum", 1],
               ["Who did Pocahontas’ father want her to marry?", "Percy", "Jack", "Mr. Stone", "Kocoum", 4],
               ["Who is Rapunzel's prince?", "Glen Fry", "Flynn Rider", "James Hope", "Mitch Glow", 2],
               ["What is the name of the dentist where Nemo ended up?", "Steve Marshall", "Jeff Nelson", "Phillip Sherman", "Greg Johnson", 3],
               ["In 'Inside out', what is Joy's hair color?", "Blue", "Green", "Red", "White", 1],
               ["How many sisters does Ariel have??", "3", "6", "7", "9", 2],
               ["In 'Peter Pan', where did Captain Hook have his hook?", "Right hand", "Right foot", "Left hand", "Left foot", 3]];


var score = 0;
var questionNumber = 0;

function displayQuiz(){

var quest = document.getElementById("question");
quest.innerHTML = question[questionNumber][0];

  for(j=1; j<=4; j++){
     var opt = document.getElementById("choice"+j);
     opt.innerHTML = question[questionNumber][j];
 }
}



(function () {
    displayQuiz();
})();

  function validat(item){
       
       if(item === "choice"+question[questionNumber][5]){

       	score++;
       }

       if(item === "btn"+question[questionNumber][5]){

       	score++;
       }

        if(questionNumber === 14){
        var mainBody = document.getElementById("quiz");
        mainBody.innerHTML = "<h1>" + "Your Score is: "+ score + "/15"+"</h1>"+"<p>"+"The closer you are to 15, the more Disney magic is in you!"+ "</p>";
         }

        questionNumber++;
       }



var quiztime = 300;
var Timer = setInterval(function(){
    quiztime--;
    document.getElementById("countdown").textContent = quiztime;
    if(quiztime <= 0){
      endGame();
       clearInterval(Timer);
     }
    },1000);



function endGame() {
 var mainBody = document.getElementById("quiz");
        mainBody.innerHTML = "<h1>" + "Your Score is: "+ score + "/15"+"</h1>"+"<p>"+"The closer you are to 15, the more Disney magic is in you!"+ "</p>"; 
}

//following code adds cursor sparkles - it's copied out of internet... impossible to do that on my own

var theParent = document.getElementById("buttons");
theParent.addEventListener("click", listenMe, false);
 
function listenMe(e) {
    if (e.target !== e.currentTarget) {
        var clickedItem = e.target.id;
        validat(clickedItem);
    }
    e.stopPropagation();
    if(questionNumber < 15){
    displayQuiz();}
}

var colour="random"; 
var sparkles=50;


var x=ox=400;
var y=oy=300;
var swide=800;
var shigh=600;
var sleft=sdown=0;
var tiny=new Array();
var star=new Array();
var starv=new Array();
var starx=new Array();
var stary=new Array();
var tinyx=new Array();
var tinyy=new Array();
var tinyv=new Array();

window.onload=function() { if (document.getElementById) {
  var i, rats, rlef, rdow;
  for (var i=0; i<sparkles; i++) {
    var rats=createDiv(3, 3);
    rats.style.visibility="hidden";
    rats.style.zIndex="999";
    document.body.appendChild(tiny[i]=rats);
    starv[i]=0;
    tinyv[i]=0;
    var rats=createDiv(5, 5);
    rats.style.backgroundColor="transparent";
    rats.style.visibility="hidden";
    rats.style.zIndex="999";
    var rlef=createDiv(1, 5);
    var rdow=createDiv(5, 1);
    rats.appendChild(rlef);
    rats.appendChild(rdow);
    rlef.style.top="2px";
    rlef.style.left="0px";
    rdow.style.top="0px";
    rdow.style.left="2px";
    document.body.appendChild(star[i]=rats);
  }
  set_width();
  sparkle();
}}

function sparkle() {
  var c;
  if (Math.abs(x-ox)>1 || Math.abs(y-oy)>1) {
    ox=x;
    oy=y;
    for (c=0; c<sparkles; c++) if (!starv[c]) {
      star[c].style.left=(starx[c]=x)+"px";
      star[c].style.top=(stary[c]=y+1)+"px";
      star[c].style.clip="rect(0px, 5px, 5px, 0px)";
      star[c].childNodes[0].style.backgroundColor=star[c].childNodes[1].style.backgroundColor=(colour=="random")?newColour():colour;
      star[c].style.visibility="visible";
      starv[c]=50;
      break;
    }
  }
  for (c=0; c<sparkles; c++) {
    if (starv[c]) update_star(c);
    if (tinyv[c]) update_tiny(c);
  }
  setTimeout("sparkle()", 40);
}

function update_star(i) {
  if (--starv[i]==25) star[i].style.clip="rect(1px, 4px, 4px, 1px)";
  if (starv[i]) {
    stary[i]+=1+Math.random()*3;
    starx[i]+=(i%5-2)/5;
    if (stary[i]<shigh+sdown) {
      star[i].style.top=stary[i]+"px";
      star[i].style.left=starx[i]+"px";
    }
    else {
      star[i].style.visibility="hidden";
      starv[i]=0;
      return;
    }
  }
  else {
    tinyv[i]=50;
    tiny[i].style.top=(tinyy[i]=stary[i])+"px";
    tiny[i].style.left=(tinyx[i]=starx[i])+"px";
    tiny[i].style.width="2px";
    tiny[i].style.height="2px";
    tiny[i].style.backgroundColor=star[i].childNodes[0].style.backgroundColor;
    star[i].style.visibility="hidden";
    tiny[i].style.visibility="visible"
  }
}

function update_tiny(i) {
  if (--tinyv[i]==25) {
    tiny[i].style.width="1px";
    tiny[i].style.height="1px";
  }
  if (tinyv[i]) {
    tinyy[i]+=1+Math.random()*3;
    tinyx[i]+=(i%5-2)/5;
    if (tinyy[i]<shigh+sdown) {
      tiny[i].style.top=tinyy[i]+"px";
      tiny[i].style.left=tinyx[i]+"px";
    }
    else {
      tiny[i].style.visibility="hidden";
      tinyv[i]=0;
      return;
    }
  }
  else tiny[i].style.visibility="hidden";
}

document.onmousemove=mouse;
function mouse(e) {
  if (e) {
    y=e.pageY;
    x=e.pageX;
  }
  else {
    set_scroll();
    y=event.y+sdown;
    x=event.x+sleft;
  }
}

window.onscroll=set_scroll;
function set_scroll() {
  if (typeof(self.pageYOffset)=='number') {
    sdown=self.pageYOffset;
    sleft=self.pageXOffset;
  }
  else if (document.body && (document.body.scrollTop || document.body.scrollLeft)) {
    sdown=document.body.scrollTop;
    sleft=document.body.scrollLeft;
  }
  else if (document.documentElement && (document.documentElement.scrollTop || document.documentElement.scrollLeft)) {
    sleft=document.documentElement.scrollLeft;
    sdown=document.documentElement.scrollTop;
  }
  else {
    sdown=0;
    sleft=0;
  }
}

window.onresize=set_width;
function set_width() {
  var sw_min=999999;
  var sh_min=999999;
  if (document.documentElement && document.documentElement.clientWidth) {
    if (document.documentElement.clientWidth>0) sw_min=document.documentElement.clientWidth;
    if (document.documentElement.clientHeight>0) sh_min=document.documentElement.clientHeight;
  }
  if (typeof(self.innerWidth)=='number' && self.innerWidth) {
    if (self.innerWidth>0 && self.innerWidth<sw_min) sw_min=self.innerWidth;
    if (self.innerHeight>0 && self.innerHeight<sh_min) sh_min=self.innerHeight;
  }
  if (document.body.clientWidth) {
    if (document.body.clientWidth>0 && document.body.clientWidth<sw_min) sw_min=document.body.clientWidth;
    if (document.body.clientHeight>0 && document.body.clientHeight<sh_min) sh_min=document.body.clientHeight;
  }
  if (sw_min==999999 || sh_min==999999) {
    sw_min=800;
    sh_min=600;
  }
  swide=sw_min;
  shigh=sh_min;
}

function createDiv(height, width) {
  var div=document.createElement("div");
  div.style.position="absolute";
  div.style.height=height+"px";
  div.style.width=width+"px";
  div.style.overflow="hidden";
  return (div);
}

function newColour() {
  var c=new Array();
  c[0]=255;
  c[1]=Math.floor(Math.random()*256);
  c[2]=Math.floor(Math.random()*(256-c[1]/2));
  c.sort(function(){return (0.5 - Math.random());});
  return ("rgb("+c[0]+", "+c[1]+", "+c[2]+")");
}


