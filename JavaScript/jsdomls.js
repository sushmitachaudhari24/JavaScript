function addlanguage(langName){
  const li=document.createElement('li')
  li.innerHTML=`${langName}`
  document.querySelector('.language').appendChild(li)
}
addlanguage("Python")
addlanguage("Java")

function addOptiLanguage(langName){
 const li=document.createElement('li')
 li.appendChild(document.createTextNode(langName))
 document.querySelector('.language').appendChild(li)
}

addOptiLanguage('golang')
//Edit
const secl=document.querySelector("li:nth-child(2)")
const nl=document.createElement('li')
nl.textContent="Mazha"
secl.replaceWith(nl)

//edit
const fircl=document.querySelector("li:first-child")
// const n=document.createElement('li')
// n.textContent="Tuzha"
// fircl.replaceWith(n)
fircl.outerHTML='<li>TypeScript1</li>'

//remove
const lastlang=document.querySelector('li:last-child')
  lastlang.remove();
  