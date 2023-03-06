const buttons=document.querySelectorAll("button");
const inpt=document.querySelector("input[type=range]")
const color=document.querySelector("input[type=color]")
var c=color.value;
var conf=false;
var j=0;
var i=false;
var rain=false;
const div=document.createElement('div');
const dv=document.createElement('div');
const main=document.querySelector(".dmain_2");

subd_1.addEventListener('click',function(e){
  if(buttons[0]==e.target && buttons[0].style.backgroundColor=="aliceblue"){
    e.target.style.backgroundColor="transparent";
    rain=false;
    c=color.value;
    i=false;
  }
  else if(buttons[1]==e.target && buttons[1].style.backgroundColor=="aliceblue"){
    e.target.style.backgroundColor="transparent";
    c=color.value;
    i=false;
  }
  else if(buttons[0]==e.target){
    e.target.style.backgroundColor="aliceblue"
    buttons[1].style.backgroundColor="transparent";
    rain=true;
    i=true;

  }
  else if(buttons[1]==e.target){
    e.target.style.backgroundColor="aliceblue"
    buttons[0].style.backgroundColor="transparent";
    rain=false;
    i=true;
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

main.addEventListener('mouseover',function(e){
  if(rain){
    rainbow();
  }
  if(conf){
    e.target.style.backgroundColor=c;
  }
})
document.addEventListener('mousedown',()=>conf=true)
document.addEventListener('mouseup',()=>conf=false)

main.addEventListener('mousedown',function(e){
    e.preventDefault();
})

color.addEventListener('change',function(e){
  if(i){
    return
  }
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
  /*const dv_2=document.querySelectorAll(".dmain_2 div div");
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
  })*/
}

function rainbow(){
  a=Math.random()*255
  b=Math.random()*255
  d=Math.random()*255
  c='rgb('+a+','+b+','+d+')';
}

