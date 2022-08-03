'use strict'

const imgList = [
    'https://cdn.pixabay.com/photo/2016/05/01/21/20/earth-1365995__340.jpg',
    'https://cdn.pixabay.com/photo/2017/09/12/11/56/universe-2742113__340.jpg',
    'https://cdn.pixabay.com/photo/2018/08/15/13/10/galaxy-3608029__340.jpg',
    'https://cdn.pixabay.com/photo/2011/12/14/12/21/orion-nebula-11107__340.jpg',
    'https://cdn.pixabay.com/photo/2017/10/17/19/11/fantasy-2861815__340.jpg',
    'https://cdn.pixabay.com/photo/2016/07/19/04/40/moon-1527501__340.jpg',
    'https://cdn.pixabay.com/photo/2014/12/27/16/38/planet-581239__340.jpg'
];

let $slide_container = $('.slide_container'),
    $imgFrame = $slide_container.find('div');

let currentIdx = 0,
    sw = 0,             //setBg 함수에서의 스위치 역할이면서 $imgFrame의 인덱스
    timeOut;

function setBg() {
    // if (sw) {
    //     $imgFrame.eq(sw--).css({ background: `url(${imgList[currentIdx]}) center/cover` });
    // } else {
    //     $imgFrame.eq(sw++).css({ background: `url(${imgList[currentIdx]}) center/cover` });
    // }

    $imgFrame.eq(sw ? sw-- : sw++).css({ background: `url(${imgList[currentIdx]}) center/cover` });
    $imgFrame.eq(sw ? 0 : 1).fadeIn(1500);
    $imgFrame.eq(sw ? 1 : 0).fadeOut(1500);

    currentIdx = (currentIdx + 1) % imgList.length;
}

setBg();

$slide_container.on('mouseenter', () => {
    timeOut = setInterval(() => {
        setBg();
    }, 3000);
})
    .on('mouseleave', () => {
        clearInterval(timeOut);
    })

//인덱스로 받는다 0,1 이미지라는건 돌아가야한다, 이미지를 받을 수 있는 인덱스가 있어야함
//계속 증가시키면서 0으로 만들어준다.나머지 활용.인덱스 값을 0-1-0-1 묶어줘야한다.
// 최로의 스타트는 0 1증가시키면 1 다시 감소시키면 0이 된다.
// if 사용해보기