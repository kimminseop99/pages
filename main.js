const toggleBtn = document.querySelector('.nav__bar')
const main = document.querySelector('.nav__main')
const icon = document.querySelector('.nav__icon')
let tar = document.querySelector("#dynamic");
let nightday = document.querySelector("#nightdaytext"); 


toggleBtn.addEventListener('click', () =>
{
    main.classList.toggle('active');
    icon.classList.toggle('active');
});


// 화면의 밝음, 어두움을 나타내주는 텍스트 설정
var Body = {
    setcolor:function(color){
        //document.querySelector('body').style.color = color;
        $('body').css('color', color);
    },
    setBackgroundColor:function(color){
        //document.querySelector('body').style.backgroundColor = color;
        $('body').css('backgroundColor', color);
    }
}
function nightDayHandler(self){
    var target = document.querySelector('body');
    if(self.value == 'day'){
        Body.setBackgroundColor('white');
        Body.setcolor('black');
        self.value = 'night';
        nightday.textContent = "day";
    }
    else{
        Body.setBackgroundColor('black');
        Body.setcolor('white');
        self.value = 'day';
        nightday.textContent = "night";
      
    }
}

//커서 깜빡임
function blink(){
   tar.classList.toggle("active"); 
}
setInterval(blink, 500);

function randomString(){
    let stringAr = ["Learn to HTML", "Learn to CSS",
    "Learn to JAVASCRIPT","Learn to PYTHON", "Learn to JAVA"];
    let selectString = stringAr[Math.floor(Math.random() * stringAr.length)];
    let selectStringAr = selectString.split("");

    return selectStringAr;
}
function resetTyping(){
    tar.textContent = ""
    dynamic(randomString());
}
//1글자씩 텍스트 출력 
function dynamic(randomArr){
    if(randomArr.length > 0){
        tar.textContent += randomArr.shift();
        setTimeout(function(){
            dynamic(randomArr);
        }, 80);
        
    }
    else{
        setTimeout(resetTyping, 3000);
    }
}
dynamic(randomString());