const addLink = function(){
    let newLink = document.createElement('a')
    let navBar = document.querySelector('nav')
    navBar.appendChild(newLink)
}
addLink()
const changeColor = function(){
    let title = document.querySelector('h1')
   title.style.border = '2px solid yellow'
}
changeColor()

const backJumbotron = function(){
    let jumbotronBack = document.querySelector('.jumbotron')
    jumbotronBack.style.background = 'blue'
}
backJumbotron()

const removeOl = function(){
    let ol = document.getElementsByTagName('ol')
    for(index = 0 ; index < ol.length ; index++){
        ol[index].parentNode.removeChild(ol[index]);
    }
}
removeOl()
const removeSearch = function(){
   let searchIcon = document.getElementsByTagName("svg");
for (index= 0; index < searchIcon.length; index++) {
    searchIcon[index].parentNode.removeChild(searchIcon[index]);
}
}
removeSearch()

const trimPar = function () {
    const pars = document.querySelectorAll(".blog-post p:nth-child(3)")
    console.log(pars)
    for (let i = 0; i < pars.length; i++) {
      const subStr = pars[i].innerText.slice(50)
      console.log(subStr)
      pars[i].innerText = subStr
        
    }
}
trimPar()