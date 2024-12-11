let tabButton = document.querySelectorAll(".tab-button");
let tabContent = document.querySelectorAll(".tab-content");
let mobileMenu = document.querySelector(".icon");
let cnt=0;

tabButton.forEach((item, index)=>{
    item.onclick = ()=>{
        tabButton[cnt].classList.remove("active");
        tabContent[cnt].style.display = "none";

        item.classList.add("active");
        tabContent[index].style.display="block";

        cnt = index;
    }
})



mobileMenu.addEventListener('click',()=>{
    let list = document.getElementsByClassName("header-text")[0];
    list.classList.toggle('show')

    if(list.classList.contains('show')){
        mobileMenu.style.padding = "30px 30px 10px 10px"
        mobileMenu.style.fontSize = "2rem"
        mobileMenu.style.color = "wheat"

    }
    else{
        mobileMenu.style.padding = "50px 50px 10px 10px"
        mobileMenu.style.fontSize = "3rem"
    }
})
