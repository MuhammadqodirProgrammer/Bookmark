const cardel = document.querySelector("#card-box");
const selectEl2 = document.querySelector(".js-select");
const inputEl = document.querySelector("input")
const elSearch = document.querySelector(".js-search")
const elBtngroup =document.querySelector(".btn-group")
// const elBookmark =document.querySelector(".bookmark")




function bookrender(array) {
  cardel.innerHTML =""
  let cards = "";

  array.forEach((item)=>{
    cards += `  <div class="card col-sm-12 col-lg-3 col-md-4 col-sm-12 col-12   mx-4
     text-center  shadow-lg p-2  rounded  rounded-4  mt-2 mb-4 " >
     <img src="./img/bookmark-regular.svg" alt="bookmark" width="20" class="bookmark">
    <img src="${item.imageLink}" class="card-img-top" alt="images">
    
    <div class="card-body">
    <h5 class="card-title">${item.title}</h5>
  <h5 class="card-title">${item.language}</h5>
  <h5 class="card-title">${item.country}</h5>
  <p class="card-text"><span> year: ${item.year}</span><br><span> pages: ${item.pages}</span></p>
  <h6 class="card-title">author:${item.author}</h6>
  <button type="button" class="btn btn-info mt-1"><a href="${item.link}">More... </a></button>
</div>
</div> `;
  })

  cardel.innerHTML = cards;

}
bookrender(books)


let newbooks =[]

elSearch.addEventListener("input",function(evnt){
  evnt.preventDefault();
  cardel.innerHTML =""
  let elSearchval =elSearch.value.toLocaleLowerCase()
  books.forEach((el)=>{
    if(el.title.toLocaleLowerCase().includes(elSearchval)){
      newbooks.push(el)
      // console.log(el);
    };
  })
  bookrender(newbooks)
  newbooks = []
  
})

elBtngroup.addEventListener("click",(evnt)=>{
  evnt.preventDefault()

  if(evnt.target.matches('.sortName')){
    bookrender(books.sort((a,b)=>{
      return a.title.charCodeAt(0) - b.title.charCodeAt(0)
    }))
  };
  if(evnt.target.matches('.sortLanguage')){
    bookrender(books.sort((a,b)=>{
      return a.language.charCodeAt(0) - b.language.charCodeAt(0)
    }))
  };

  if(evnt.target.matches('.sortYear')){
    bookrender(books.sort((a,b)=>{
      return a.year - b.year
    }))
  };
  if(evnt.target.matches('.sortPage')){
    bookrender(books.sort((a,b)=>{
      return a.pages - b.pages
    }))
  };
})










selectEl2.addEventListener("change", (evnt) => {
  evnt.preventDefault();
  console.log(selectEl2.value);
  if (selectEl2.value !== "All") {
  if(selectEl2.value =="A-Z"){
    const sortBook =books.sort((a,b)=>{
      return a.title.charCodeAt(0) - b.title.charCodeAt(0)
    })
    bookrender(sortBook)
  }
  if(selectEl2.value =="Z-A"){
    const sortBook =books.sort((a,b)=>{
      return b.title.charCodeAt(0) - a.title.charCodeAt(0)
    })
    bookrender(sortBook)
  }
  }
  if(selectEl2.value =="All"){
    bookrender(books)
  }

})

// let optionarr = [];
// films.forEach((val) => {
//   optionarr.push(val.title)

// })

// const filled = new Set(optionarr)

// for (i of filled) {
//   // console.log(i);
//   const options = document.createElement("option");
//   selectEl.appendChild(options);
//   options.textContent = i;
//   options.setAttribute("value", i)
// }

// let newarr2 = []

// formEl.addEventListener("input", (evt) => {
//   evt.preventDefault()
//   cardel.innerHTML = ""
//   let elinputval = inputEl.value.toLocaleLowerCase();
//   films.forEach((el) => {
//     if (el.title.toLocaleLowerCase().includes(elinputval)) {
//       newarr2.push(el)
//     }
//   });
//   domgachiqarator(newarr2, cardel)
//   newarr2 = []
// })




let modeBtn =document.querySelector('.mode')

let theme = false

modeBtn.addEventListener("click", (evnt)=>{
  evnt.preventDefault()
let newBg =theme ? "dark":"light"
console.log(newBg);
console.log(theme);
theme =!theme 
console.log(theme);
localStorage.setItem("theme",newBg)
ChageMode()
})

const ChageMode = function(){
  if(window.localStorage.getItem("theme") =="dark"){
    document.body.classList.add("dark")
  }else{
    document.body.classList.remove("dark")
  }
}
ChageMode()


