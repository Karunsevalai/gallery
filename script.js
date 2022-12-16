const buttons=document.querySelectorAll('.btn');
const boxes=document.querySelectorAll('.box');
const images=document.querySelectorAll('img');
const searchBox=document.querySelector("#search");
const bar=document.querySelector(".button");
const modal=document.querySelector("#modal");
const btngroup=document.querySelector(".btn-group");
// search Textbox
searchBox.addEventListener('keyup',(e)=>{
    searchText=e.target.value.toLowerCase().trim();
  buttons.forEach((button)=>{
        button.classList.remove("btn-clicked");
    });
 buttons[0].classList.add("btn-clicked");   

    boxes.forEach((box)=>{
        const data=box.dataset.item;
        if(data.includes(searchText)){
            box.style.display="block";
        }
        else{
            box.style.display="none";
            
        }
    });
});

buttons.forEach((button)=>{
    button.addEventListener("click",(e)=>{
        e.preventDefault();
        setActiveBtn(e);
        const filter=e.target.dataset.filter;

        boxes.forEach((box)=>{
            if(filter=="all"){
                box.style.display="block";
            }
            else{
                const boxFilter=box.dataset.item;
                if(boxFilter==filter){
                   box.style.display="block";
                }
                else{
                  box.style.display="none";
                }
            }
        });
    });
});

function setActiveBtn(e){
    buttons.forEach((button)=>{
        button.classList.remove("btn-clicked");
    });
    e.target.classList.add("btn-clicked");
    
}

bar.addEventListener("click",(e)=>{
  btngroup.classList.add("bar-active");
});
btngroup.addEventListener("click",(e)=>{
    btngroup.classList.remove("bar-active");
  
});

images.forEach((box)=>{
    box.addEventListener("click",(e)=>{
      modal.classList.add("modal-active");
      if(modal.firstChild){
        modal.removeChild(modal.firstChild);
      }
      const img=document.createElement("img");
      
      img.src=box.src;
      img.id="img";
      modal.append(img);
    });
});
modal.addEventListener("click",()=>{
    modal.classList.remove("modal-active");

});