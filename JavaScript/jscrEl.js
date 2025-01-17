const div=document.createElement('div')
console.log(div);

div.className="main"
div.id=Math.round(Math.random()*10+1);
div.setAttribute("title","Generated Title")
div.style.backgroundColor="green";
div.style.padding="10px"
//div.innerText="Chai Aur Code"
const addtext=document.createTextNode("Chai Aur Code")
div.appendChild(addtext)
document.body.appendChild(div)