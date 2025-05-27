//your JS code here. If required.
const userNameInput=document.getElementById("username")
const passwordInput=document.getElementById("password")
const checkbox=document.getElementById("checkbox")
const existingBtn=document.getElementById("existing")
const form = document.getElementById("loginForm");


function updateExistingButtonVisibility() {
    
    const savedUserName=localStorage.getItem("username")
    const savedPassword=localStorage.getItem("password")
    if(savedPassword && savedUserName){
        existingBtn.style.display = "block";
    }
    else {
    existingBtn.style.display = "none";
  }
}

window.addEventListener("DOMContentLoaded", updateExistingButtonVisibility);




form.addEventListener("submit",(e)=>{
    e.preventDefault()
    const user=userNameInput.value.trim()
    const pass=passwordInput.value.trim()
    
    alert(`Logged in as ${user}`)

    if(checkbox.checked){
        localStorage.setItem("username", user)
        localStorage.setItem("password", pass)
    }
    else{
        localStorage.removeItem("username")
        localStorage.removeItem("password")
    }
    updateExistingButtonVisibility();
})

existingBtn.addEventListener("click",()=>{
    const savedUserName=localStorage.getItem("username")
    if(savedUserName){
        alert(`Logged in as ${savedUserName}`)
    }
})