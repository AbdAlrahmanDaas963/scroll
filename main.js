console.log("subaru");
let joystick=document.querySelector("img");
let body=document.querySelector("body");
let x=0;
let y=0;
let flip=true;
function joy(){
    
    

 
    // if(flip==true){
    //     div.style.animationName="balll";
    //     flip=false;
        
    // }else{
    //     div.style.animationName="balll2";
    //     flip=true;
    // }
    


    
    
    window.onscroll = function(e) {
        if(this.oldScroll > this.scrollY){
            joystick.style.transform="translateY(-20px)";
            console.log("before up");
            setTimeout(function(){
                joystick.style.transform="translateY(20px)";
                console.log("up");
            }, 1000);
        }else{
            console.log("before down");
            setTimeout(function(){
                console.log("down");
            }, 1000);
        }
        this.oldScroll = this.scrollY;
    }
};

// function joyon(){
//     window.onscroll = function(e) {
//         console.log(this.oldScroll > this.scrollY);
//         if(this.oldScroll > this.scrollY){
//             document.querySelector(".hehe2").innerHTML="up";
//             //div.style.transform=("translateY(-20px)");
//         }else{
//             document.querySelector(".hehe2").innerHTML="down";
//             //div.style.transform=("translateY(20px)");
//         }
//         this.oldScroll = this.scrollY;
//     }
// }

