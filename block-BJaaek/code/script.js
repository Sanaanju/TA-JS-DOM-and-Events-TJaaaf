let box1 = document.querySelector('.first');
let box2 = document.querySelector('.second');
let box1Background = document.querySelector('.first .text');
let box2Background = document.querySelector(' .second .text');


function randomColorGenerator() {
    let char= '0a2b3c4d5e6f7a8b9';
    let res='';
   let color='#a';
      
       for(let i=0;i<4;i++){
        res=res+(Math.random()*10);
        res=Math.floor(res);
           color=color+char.charAt(res);
       }
       
        return color;
    
   

}

box1Background.addEventListener("click", function () {
      
       box1Background.style.backgroundColor = randomColorGenerator();
});
box2Background.addEventListener("mousemove", function () {
    box2Background.style.backgroundColor = randomColorGenerator();
    

});
