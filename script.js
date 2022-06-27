var hamburger = document.querySelector("#bars");
var links = document.querySelector("#link");
const lists = document.querySelectorAll(".list");


hamburger.addEventListener("click", () =>{
    hamburger.classList.toggle("active");
    links.classList.toggle("active");
})

function toggleList(e){
    e.target.classList.remove("active")

}
console.log(lists)

lists.forEach(list => {
    list.addEventListener("click" , (e)=>(toggleList(e)))
})