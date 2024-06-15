// 로딩
$(window).load(function () {
    $(".loading-container").delay(2000).fadeOut();
});

// 메인화면 에니메이션
const text = document.querySelector(".title h1");
const content = "안녕하세요 :)\n24학번 전성배입니다.";
let contentIndex = 0;

let typing = function () {
    text.innerHTML += content[contentIndex];
    contentIndex++;
    if (content[contentIndex] === "\n") {
        text.innerHTML += "<br />";
        contentIndex++;
    }
    if (contentIndex > content.length) {
        text.textContent = "";
        contentIndex = 0;
    }
};
setInterval(typing, 200);

//스크롤 애니메이션

// Favorite Slide
const slides = document.querySelector(".slides");
const slide = document.querySelectorAll(".slides li");
const slideCount = slide.length;

let currentIdx = 0;

let slideWidth = 300;
let slideMargin = 30;

slides.style.width = (slideWidth + slideMargin) * slideCount - slideMargin + "px";

const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

function moveSlide(num) {
    // slide 가 움직일때 slide index가 1이면 -330px 2면 -660px
    slides.style.left = -num * 330 + "px";
    currentIdx = num;
}

nextBtn.addEventListener("click", function () {
    if (currentIdx < slideCount - 3) {
        moveSlide(currentIdx + 1);
    } else {
        moveSlide(0);
    }
});

prevBtn.addEventListener("click", function () {
    if (currentIdx > 0) {
        moveSlide(currentIdx - 1);
    } else {
        moveSlide(slideCount - 3);
    }
});

let contactTilte = document.querySelector("#footer .footer-box");
let contactLink = document.querySelector("#footer div");

window.addEventListener("scroll", function () {
    let value = window.scrollY;

    if (value > 1950) {
        contactTilte.style.animation = "grow 0.8s linear";
        contactLink.style.animation = "grow 0.8s linear";
    } else {
        contactTilte.style.animation = "grow-out 0.5s linear";
        contactLink.style.animation = "grow-out 0.5s linear";
    }
});

// 버튼 및 링크 박스 생성 함수
function createProfileSection() {
    const section = document.getElementById("about-profile");

    // 버튼 컨테이너 생성
    const buttonsContainer = document.createElement("div");
    buttonsContainer.className = "buttons-container";

    // 링크 컨테이너 생성
    const linksContainer = document.createElement("div");
    linksContainer.className = "links-container";

    // 각 버튼에 대해 사용할 링크 주소
    const links = [
        "https://sung0125.github.io/",
        "https://react-shop-cgwbysq5m-sungbae-jeons-projects.vercel.app/",
        "https://2024-jbu-s4.netlify.app",
        "https://nextjs-hkq9-7ex4ync8f-sungbae-jeons-projects.vercel.app/",
    ];

    // 버튼 4개 생성 및 추가
    for (let i = 0; i < links.length; i++) {
        const button = document.createElement("button");
        button.textContent = `Button ${i + 1}`;
        button.addEventListener("click", () => {
            updateLinks(links[i], linksContainer);
        });
        buttonsContainer.appendChild(button);
    }

    // 버튼과 링크 컨테이너를 섹션에 추가
    const container = document.createElement("div");
    container.className = "a-container";

    container.appendChild(buttonsContainer);
    container.appendChild(linksContainer);

    section.appendChild(container);
}

// 링크 업데이트 함수
function updateLinks(linkUrl, linksContainer) {
    // 기존 링크 제거
    while (linksContainer.firstChild) {
        linksContainer.removeChild(linksContainer.firstChild);
    }

    // 새로운 링크 추가
    const link = document.createElement("a");
    link.href = linkUrl;
    link.textContent = linkUrl;
    linksContainer.appendChild(link);
}

// DOM 로드 후 함수 실행
document.addEventListener("DOMContentLoaded", createProfileSection);
