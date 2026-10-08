let inputBox= document.querySelector("#inputBox");
let searchBtn= document.querySelector(".searchBtn");
let repoDetail= document.querySelector(".repoDetail");
let ownerName= document.querySelector(".ownerName");
let username= document.querySelector(".username");

let followers= document.querySelector(".followers");
let following= document.querySelector(".following");


searchBtn.addEventListener("click", async()=>{
    let inputValue= inputBox.value;

    let API= `https://api.github.com/users/${inputValue}`;

    let response= await fetch(API);
    let data= await response.json();
    console.log(data);

    ownerName.textContent= data.name;
    repoDetail.textContent= data.public_repos;
    followers.textContent= data.followers;
    following.textContent= data.following;
    username.textContent= data.login;
});
