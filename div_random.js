const buttons=document.querySelectorAll("button");
const inpt=document.querySelector("input[type=range]")
const color=document.querySelector("input[type=color]")
var c=color.value;
var conf=false;
const div=document.createElement('div');
const dv=document.createElement('div');
const main=document.querySelector(".dmain_2");


main.addEventListener('mousedown',function(e){
  e.preventDefault();
  conf=true;
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
  const main=document.querySelector(".dmain_2");
  console.log(row_col)
  for (let i=0; i<row_col; i++){
    div.appendChild(dv.cloneNode(true));
  }
  for(let i=0;i<row_col;i++){
    console.log(main)
    main.appendChild(div.cloneNode(true));
  }
  const dv_2=document.querySelectorAll(".dmain_2 div div");
  dv_2.forEach((dv_1)=>{
    dv_1.addEventListener('mouseover',function(e){
      if(conf==true){
        e.currentTarget.style.backgroundColor=c
      }
    })
    dv_1.addEventListener('click',function(e){
      e.currentTarget.style.backgroundColor=c
      
    })
  })

}

buttons.forEach((button)=>{
  let i=0;
  button.addEventListener('click',function(e){
    if(i==0){
      e.currentTarget.style.backgroundColor="rgba(188, 177, 219, 0.425)";
      i++
    }
    else{
      e.currentTarget.style.backgroundColor="transparent"

      i--;
    }
  });
})

