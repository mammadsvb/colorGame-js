function randomNum(min,max){
    return Math.floor(Math.random() * (max-min+1)+min);
}
let num = 6;

const result = document.querySelector("#result");
const ans = document.getElementById("a-color")
const c1 = document.getElementById("c1")
const c2 = document.getElementById("c2")
const c3 = document.getElementById("c3")
const c4 = document.getElementById("c4")
const c5 = document.getElementById("c5")
const c6 = document.getElementById("c6")
let hardFlag = true;

color()

function color(){
    
    beg(c1);
    beg(c2)
    beg(c3)
    beg(c4)
    beg(c5)
    beg(c6)

    result.style.visibility = "hidden";
    document.querySelector(".new").innerText = "NEW COLOR"

    let colors=[];
    
    for(let i=0 ; i<num ; i++){
    let a = [randomNum(0,255),randomNum(0,255),randomNum(0,255)]
    colors[i] = a;
    }


    ans.innerText = `RGB(${colors[0][0]}, ${colors[0][1]}, ${colors[0][2]})` 

    let a = randomNum(0,num-1);
    c1.style.backgroundColor=`RGB(${colors[a][0]},${colors[a][1]}, ${colors[a][2]})`
    colors.splice(a,1)
   
    a = randomNum(0,num-2);
    c2.style.backgroundColor=`RGB(${colors[a][0]},${colors[a][1]}, ${colors[a][2]})`
    colors.splice(a,1)
   
    a= randomNum(0,num-3);
    c3.style.backgroundColor=`RGB(${colors[a][0]},${colors[a][1]}, ${colors[a][2]})`
    colors.splice(a,1);

    if(hardFlag){
        a = randomNum(0,num-4);
        c4.style.backgroundColor=`RGB(${colors[a][0]},${colors[a][1]}, ${colors[a][2]})`
        colors.splice(a,1)
    
        a = randomNum(0,num-5);
        c5.style.backgroundColor=`RGB(${colors[a][0]},${colors[a][1]}, ${colors[a][2]})`
        colors.splice(a,1)
    
        a= randomNum(0,num-6);
        c6.style.backgroundColor=`RGB(${colors[a][0]},${colors[a][1]}, ${colors[a][2]})`
        colors.splice(a,1);
    }


}


document.querySelector("main").addEventListener("click",(e)=>{
    // console.log(e.target.style.backgroundColor,ans.innerText,e.target.id)
    if(e.target.id ==="c1" && e.target.style.backgroundColor.toUpperCase() === ans.innerText)
    { 
        console.log(e.target.id)
        winning();

    }
    else if(e.target.id ==="c2" && e.target.style.backgroundColor.toUpperCase() === ans.innerText)
    { 
        console.log(e.target.id)
        winning();
        
    }
    else if(e.target.id ==="c3" && e.target.style.backgroundColor.toUpperCase() === ans.innerText)
    { 
        console.log(e.target.id)
        winning();
    }
    else if(e.target.id ==="c4" && e.target.style.backgroundColor.toUpperCase() === ans.innerText)
    { 
        console.log(e.target.id)
        winning();

    }
    else if(e.target.id ==="c5" && e.target.style.backgroundColor.toUpperCase() === ans.innerText)
    { 
        console.log(e.target.id)
        winning();
        
    }
    else if(e.target.id ==="c6" && e.target.style.backgroundColor.toUpperCase() === ans.innerText)
    { 
        console.log(e.target.id)
        winning();
        

    }
    else{
        lost();
        e.target.style.visibility = "hidden";
        e.target.style.pointer = "auto"
    }

})

function winning(){ 
    result.innerText = "CORRECT";
    result.style.visibility = "visible";
    document.querySelector(".new").innerText = "PLAY AGAIN"
    win(c1)
    win(c2)
    win(c3)
    win(c4)
    win(c5)
    win(c6)
}

function win(c){
    c.style.backgroundColor = ans.innerText.toLowerCase(); 
    c.style.pointer = "auto";
    c.style.visibility = "visible";
}


function beg(c){
    c.style.pointer = "pointer";
    c.style.visibility = "visible";
}

function lost(){
    result.innerText = "TRY AGAIN";
    result.style.visibility = "visible";
}

document.querySelector(".new").addEventListener("click",(e)=>{

    color();

})



document.querySelector(".mood").addEventListener("click",(e)=>{
    if(e.target.classList.contains("md"))
    {
      
        if(e.target.id === "easy"){
            num = 3;
            hardFlag = false
            document.getElementById("chard").style.display = "none"
        }

        else if(e.target.id === "hard"){
            num = 6;
            hardFlag = true
            document.getElementById("chard").style.display = "block"
        }

        if(e.target.classList.contains("active")){
                
        }
        else{
            document.querySelector(".active").classList.remove("active")
            e.target.classList.add("active") 
            color()  
        }
    }
         
})