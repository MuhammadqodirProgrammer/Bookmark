const cardel = document.querySelector("#card-box");
const selectEl2 = document.querySelector(".js-select");
const inputEl = document.querySelector("input")
const elSearch = document.querySelector(".js-search")
const elBtngroup =document.querySelector(".btn-group")
const elBookmark =document.querySelector(".bookmark")

const elList =document.querySelector(".list-group")


function bookrender(array) {
  cardel.innerHTML =""
  
  array.forEach((item)=>{
    const cardHead =document.createElement('div')
    const cardImg =document.createElement('img')
    const cardBody =document.createElement('div')
    const cardTitle =document.createElement('h5')
    const cardLanguage =document.createElement('p')
    const cardAuthor=document.createElement('h5')
    const cardLinkbtn =document.createElement('button')
    const cardLinka =document.createElement('a')
    const elBookmark =document.createElement("button")



    cardImg.setAttribute("class" , "card-img-top")
    cardBody.setAttribute("class" , "card-body")
    cardTitle.setAttribute("class" , "card-title")
    cardLanguage.setAttribute("class" , "card-title")
    cardAuthor.setAttribute("class" , "card-title")
    cardLinkbtn.setAttribute("class" , "btn btn-info me-2")
     
    cardel.appendChild(cardHead)
    cardHead.appendChild(cardImg)
    cardHead.appendChild(cardBody)
    cardBody.appendChild(cardTitle)
    cardBody.appendChild(cardLanguage)
    cardBody.appendChild(cardAuthor)
    cardBody.appendChild(cardLinkbtn)
    cardBody.appendChild(elBookmark)
    cardLinkbtn.appendChild(cardLinka)


    cardImg.setAttribute("src" ,  `${item.imageLink}` )
    cardLinka.setAttribute("href" ,  `${item.link}` )
    elBookmark.setAttribute('class','btn btn-primary bookmarkbtn ')
cardTitle.innerHTML =item.title
cardLanguage.innerHTML =item.language
cardAuthor.innerHTML =item.author
cardTitle.innerHTML =item.title
cardLinka.innerHTML ="More..."
elBookmark.innerHTML ="Bookmark ❤"

cardHead.setAttribute("class","card col-sm-12 col-lg-3 col-md-4 col-sm-12 col-12   mx-4 text-center  shadow-lg p-2  rounded  rounded-4  mt-2 mb-4")
   

    elBookmark.dataset.bookmarkId =item.id
  })
// const elCardbody =document.querySelector(".card-body")
  // cardel.innerHTML = cards;
}
bookrender(books)


let newbooks =[]
// ==========================================
// SEARCH ===================================>

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
// ==========================================
// SORT NAME,PAGES,LANGUAGE,YEAR ===================>
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
// ==========================================
// SORT A-Z,Z-A ===================================>
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
// =========================================
// BOOKMARK ================================>

const setBooks =new Set()
cardel.addEventListener("click",function(evnt){
  evnt.preventDefault()
  if(evnt.target.matches(".bookmarkbtn")){
    const bookmarkId =evnt.target.dataset.bookmarkId
    elList.innerHTML= ""
    const findedBooks =books.find((el)=>{
      const elItem =document.createElement("li")
      elList.appendChild(elItem)
      elItem.textContent =el.title
      return el.id == bookmarkId;
    })
    setBooks.add(findedBooks);

    console.log(setBooks);
    window.localStorage.setItem("setBooks",JSON.stringify(setBooks))
    const valBooks =  JSON.parse(window.localStorage.getItem("setBooks"))
    console.log(valBooks);
  };
  
})

// =====-========================
// DARK-MODE ====================>

let modeBtn =document.querySelector('.mode')

let theme = false

modeBtn.addEventListener("click", (evnt)=>{
  evnt.preventDefault()
let newBg =theme ? "dark":"light"
console.log(newBg);
theme =!theme 
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


