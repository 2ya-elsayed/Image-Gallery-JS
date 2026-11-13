let mainImg = document.querySelector("#mainImg");
let imgItems = document.querySelectorAll(".thumb");

for (let i = 0; i < imgItems.length; i++) {
    imgItems[i].addEventListener("click", function (e) {
        let imgSrc = e.target.getAttribute("src");
        mainImg.setAttribute("src", imgSrc);
    });
}