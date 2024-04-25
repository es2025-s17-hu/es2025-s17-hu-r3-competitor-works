document.addEventListener("DOMContentLoaded", () =>{
   const list = document.querySelector(".Menu-category-list");
   const items = [...document.querySelectorAll(".Menu-category")];

   let dragged = null;

   items.forEach(item =>{
       item.addEventListener("dragstart", ()=>{
          setTimeout(()=>{
              item.classList.add("is-dragged");
          }, 0)
       });

       item.addEventListener("dragend", ()=>{
           setTimeout(()=>{
               item.classList.remove("is-dragged");
           }, 0)
       });
   })

    // list.addEventListener("dragover", (e)=>{
    //     let notDragged = document.querySelectorAll("li:not('is-dragged')")
    //     let sibling = list.find(sibling =>{
    //         return e.clientY <= sibling.offsetTop + sibling.offsetHeight / 2;
    //     })
    //
    // })
});
