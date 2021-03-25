console.log("subaru");
let div=document.querySelector("img");
let body=document.querySelector("body");
let x=0;
let y=0;
let flip=true;
function joy(){
    
    

    div.style.animationDuration="1s";
    div.style.animationIterationCount="1";    
    // if(flip==true){
    //     div.style.animationName="balll";
    //     flip=false;
        
    // }else{
    //     div.style.animationName="balll2";
    //     flip=true;
    // }
    


    
    
    window.onscroll = function(e) {
        console.log(this.oldScroll > this.scrollY);
        if(this.oldScroll > this.scrollY){
            
            //div.style.transform=("translateY(20px)");
            div.style.animationName="balll";
        }else{
            
            //div.style.transform=("translateY(-20px)");
            div.style.animationName="balll2";
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

