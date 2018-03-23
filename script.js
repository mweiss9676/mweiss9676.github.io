var windowSize = window.screen.width;

window.onload = function() {
    const selfy = document.querySelector("#selfyId");

    if(windowSize > 1000) {
        selfy.addEventListener("mouseover", rollSide);
    } else {
        selfy.addEventListener("click", rollOut);
    }
}

function rollSide() {
    const insta = document.querySelector(".instagram");
    insta.classList.remove("instagram-mobile");
    insta.classList.add("instagram-full");

    const link = document.querySelector(".linkedin");
    link.classList.remove("linkedin-mobile");
    link.classList.add("linkedin-full");

    const git = document.querySelector(".github");
    git.classList.remove("github-mobile");
    git.classList.add("github-full");
}

function rollOut() {
    const insta = document.querySelector(".instagram");
    insta.classList.remove("instagram-full");
    insta.classList.add("instagram-mobile");

    const link = document.querySelector(".linkedin");
    link.classList.remove("linkedin-full");
    link.classList.add("linkedin-mobile");

    const git = document.querySelector(".github");
    link.classList.remove("github-full");
    git.classList.add("github-mobile");
}
