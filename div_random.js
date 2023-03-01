const buttons=document.querySelectorAll("button");
const inpt=document.querySelector("input[type=range]")
const div=document.createElement('div');
const dv=document.createElement('div');
const main=document.querySelector(".dmain_2");
for (let i=0; i<17; i++){
  div.appendChild(dv.cloneNode(true));
}
for(let i=0;i<17;i++){
  main.appendChild(div.cloneNode(true));
}

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

}

buttons.forEach((button)=>{
  button.addEventListener('focus',function(e){
    
  });
})

