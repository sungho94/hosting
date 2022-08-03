// 사진 자동으로 넘어가게 하기

const main_container = document.getElementById('main_container'),
    img = main_container.querySelector('img'),
    nation_container = main_container.querySelector('.nation_container');

const new_Img = ["../image/0628_test/test0628_1.jpg",
    "../image/0628_test/test0628_2.jpg",
    "../image/0628_test/test0628_3.jpg",
    "../image/0628_test/test0628_4.jpg",
    "../image/0628_test/test0628_5.jpg"]

for (let j = 0; j < new_Img.length; j++) {
    nation_container.innerHTML += `<a href="#" class="nationBox nation${j + 1}">${j + 1}</a>`;
}
// 뉴 이미지 갯수만큼 html에 <a>생성
//<네이션박스>는 a태그를 배열로 가져와


const nationBox = nation_container.getElementsByClassName('nationBox');
let beforeNation = nationBox[0];


function changeImg() {
    let nationBoxIdx = beforeNation.textContent % new_Img.length;
    img.src = new_Img[nationBoxIdx];

    beforeNation = nationBox[nationBoxIdx];
}

// nationBox의 인덱스 값이랑 textcontent 값은 +1차이난다.
// 인덱스는 01234 >> textcontent는 12345  모르면 엑셀로 확인해보기
// this를 사용 못하는 경우이므로 this자리 대신 변수 하나를 설정해준다.
// let nationBoxIdx = beforeNation.textContent << 이렇게만 하면 5이상이되면 바꾸기 힘듬
// % 5를 해서 다시 1로 만들어주기 >> % new_Img.length

/*

첫번째 방법.일정시간으로 인덱스만 바꿔줌 0~1~2~3~3~0 /if로 컨트롤 하는 방법
두번째 방법.x라는 수를 5로 나눈 나머지로 반복하는 방법

이미지가 변화되고 있을때 혹은 이미지가 멈춰 있을때

*/

//위에는 사진이 반복되게 하는것. let stop 을 활성화 시키지 않으면 반복안됨

//아래는 클릭시 사진 멈춤 및 적용
// 상태값? 불린값?

let stop = setInterval(changeImg, 3000); // 이미지 바꿔주는걸 3000으로 설정

let state = true; // 돌아가고 있는 상태, (스위치 변수라고 한다?)

main_container.addEventListener('click', () => {
    if (state) {                              // 클릭했을때 상태가 true일때
        clearInterval(stop);                  // 멈춤-stop변수(이미지 돌리기)
        state = false;                        // 돌아가는 상태를 false로 바꿔줌
    } else {                                  // 클릭했을때 상태가 false일때
        stop = setInterval(changeImg, 3000);  // 이미지를 다시 돌려주기
        state = true;                         // 상태는 true로 바꿔주기
    }
});


//아래는 해본것

// let t = 0;

// let beforeNation = nationBox[0];

// let slide_Img

// function Xo() {
//     slide_Img = setInterval(() => {
//         img.src = new_Img[t];
//         beforeNation.style.opacity = .5;
//         nationBox[t].style.opacity = 1;
//         beforeNation = nationBox[t];
//         t++;

//         if (t >= new_Img.length) {
//             t = 0;
//         }
//     }, 1000);
// }
// if (1) {
//     main_container.addEventListener('click', Xo);
// } else {
//     setTimeout(() => clearInterval(slide_Img), 0);
// }