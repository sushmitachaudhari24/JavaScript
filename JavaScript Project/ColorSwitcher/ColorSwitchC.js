const buttons=document.querySelectorAll('.button');
const body=document.querySelector('body');
buttons.forEach(function (button){
    button.addEventListener('click',function(e){
     console.log(e);
     console.log(e.target);
     if(e.target.id === 'crimson')
     {
        body.style.background=e.target.id;
        body.style.color='white';
        e.target.id.style.borderColor='white';
     }
     else if(e.target.id === 'white')
     {
        body.style.background=e.target.id;
        body.style.color='black';
     }
     else if(e.target.id === 'lightblue')
     {
        body.style.background=e.target.id;
        body.style.color="black";
     }
    else  if(e.target.id === 'orange')
     {
        body.style.background=e.target.id;
        body.style.color="white";
     }
    else if(e.target.id === 'darkgreen')
     {
        body.style.backgroundColor=e.target.id;
        body.style.color='white';
     }
    else if(e.target.id === 'violet')
     {
        body.style.backgroundColor=e.target.id;
        body.style.color='black';
     }
    else if(e.target.id === 'lightcoral')
        {
           body.style.backgroundColor=e.target.id;
           body.style.color='white';
        }
    else if(e.target.id === 'black')
    {
            body.style.backgroundColor=e.target.id;
            body.style.color='white';
    }
    })
});