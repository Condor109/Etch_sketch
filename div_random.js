const buttons=document.querySelectorAll("button");
const inpt=document.querySelector("input[type=range]")
const color=document.querySelector("input[type=color]")
const subd=document.querySelector("#subd_1")
const sudb_1=document.querySelector("#subd_2")
var c=color.value;
var conf=false;
var i=false;
var rain=false;
var shadow=false;
const div=document.createElement('div');
const dv=document.createElement('div');
const main=document.querySelector(".dmain_2");

subd.addEventListener('click',function(e){
  if(buttons[0]==e.target && buttons[0].style.backgroundColor=="aliceblue"){
    e.target.style.backgroundColor="transparent";
    rain=false;
    c=color.value;
  }
  else if(buttons[1]==e.target && buttons[1].style.backgroundColor=="aliceblue"){
    e.target.style.backgroundColor="transparent";
    c=color.value;
  }
  else if(buttons[0]==e.target){
    e.target.style.backgroundColor="aliceblue"
    buttons[1].style.backgroundColor="transparent";
    rain=true;

  }
  else if(buttons[1]==e.target){
    e.target.style.backgroundColor="aliceblue"
    buttons[0].style.backgroundColor="transparent";
    rain=false;
    c="transparent"
  }
  if(buttons[2]==e.target){
    const dv_2=document.querySelectorAll(".dmain_2 div div");
    dv_2.forEach((dv_1)=>{
      dv_1.style.backgroundColor="transparent"
    })
  }
})

subd_2.addEventListener('click',function(e){
  if(buttons[3]==e.target && buttons[3].style.backgroundColor=="aliceblue"){
    e.target.style.backgroundColor="transparent"
    const dv_2=document.querySelectorAll(".dmain_2 div div");
    dv_2.forEach((dv_1)=>{
      dv_1.style.border="none";
    })
    
  }
  else if(e.target==buttons[3]){
    e.target.style.backgroundColor="aliceblue"
    const dv_2=document.querySelectorAll(".dmain_2 div div");
    dv_2.forEach((dv_1)=>{
      dv_1.style.border="0.5px solid black"
    })
  }
})


main.addEventListener('mousedown',function(e){
  e.preventDefault();
  conf=true;
})

main.addEventListener('mouseleave',()=>{
  conf=false;
})

main.addEventListener('mouseup',()=>{
  conf=false;
})

color.addEventListener('change',function(e){
  c=e.currentTarget.value;
})

inpt.value=16;
generate(16);

inpt.addEventListener('change',function(e){
  let v=Math.round(1+(e.currentTarget.value*63/100));
  clear(v);
})


function clear(v){
  while (main.firstChild && div.firstChild){
    div.removeChild(div.lastChild);
    main.removeChild(main.lastChild);  
  }
  generate(v);
}

function generate(row_col){
  buttons[3].style.backgroundColor="transparent"
  const main=document.querySelector(".dmain_2");
  for (let i=0; i<row_col; i++){
    div.appendChild(dv.cloneNode(true));
  }
  for(let i=0;i<row_col;i++){
    main.appendChild(div.cloneNode(true));
  }
  const dv_2=document.querySelectorAll(".dmain_2 div div");
  dv_2.forEach((dv_1)=>{
    dv_1.addEventListener('mouseover',function(e){
      if(conf){
        console.log("Xd")
        if(rain){
          rainbow();
        }
        e.currentTarget.style.backgroundColor=c
        
      }
    })
    dv_1.addEventListener('click',function(e){
      e.currentTarget.style.backgroundColor=c
      
    })
  })

}

function rainbow(){
  a=Math.random()*255
  b=Math.random()*255
  d=Math.random()*255
  c='rgb('+a+','+b+','+d+')';
}

