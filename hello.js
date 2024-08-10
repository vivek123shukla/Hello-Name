let change=document.getElementById('change');
let btn=document.getElementById('btn');

btn.addEventListener('click',()=>{
   let ans= prompt("Enter your name!!")
    change.innerHTML=ans.valueOf(ans);   
})