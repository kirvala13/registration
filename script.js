const route = document.querySelector(".routReg");
const login = document.querySelector(".login");
const registration = document.querySelector(".registration")
const signUp = document.querySelector(".signUp")
const signIn = document.querySelector(".signIn")
const errmessage = document.querySelector(".errortext");
route.addEventListener("click", (e)=> {
    e.preventDefault();
    login.classList.add("none");
    registration.classList.remove("none");
})

function registr(){
    const localstorage = localStorage.getItem("getmail")
    const registrName = document.querySelector(".registrName");
    const registrEmail = document.querySelector(".registrEmail");
    const registrPass = document.querySelector(".registrPasword");
    if(registrEmail.value === localstorage){
        alert("alredy registration")
    }else {
           const emalistorage = localStorage.setItem("getmail", registrEmail.value)
           const namestorage = localStorage.setItem("getname", registrName.value)
           const passwordtorage = localStorage.setItem("getpass", registrPass.value)
           login.classList.remove("none");
           registration.classList.add("none");
    }
}

signUp.addEventListener("click", ()=>{
    registr();

})


function signIn1(){
    const loginMail = document.querySelector(".mail");
    const loginPass = document.querySelector(".password");
    if(loginMail.value === localStorage.getItem("getmail") && loginPass.value === localStorage.getItem("getpass")){
        loginMail.classList.remove("icorrect")
        loginPass.classList.remove("icorrect")
        errmessage.classList.add("none")
       window.location.replace("./login.html")
    }else{
       
        loginMail.classList.add("icorrect")
        loginPass.classList.add("icorrect")
        errmessage.classList.remove("none")
    }
}

signIn.addEventListener("click",(e)=>{
    e.preventDefault();
    signIn1();
})