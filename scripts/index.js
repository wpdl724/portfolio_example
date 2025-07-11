// 전체 수직 스크롤
const wrap = new Swiper('#wrap',{
    direction: 'vertical',
    mousewheel: true,
})

// 프로젝트 슬라이드
const project1 = new Swiper('#project_swiper', {
    scrollbar:{el:'#project_swiper ~ .swiper-scrollbar'}, /* 프로젝트 스와이퍼가 컨테이너부모의 1번째 자식 / 근데 스크롤바는 넷째 자식인데 4번째 자식이여서 멀리있는 형제여서 물결을 작성해야한다 */
    navigation: {
        nextEl: '#project_swiper ~.swiper-button-next',
        prevEl: '#project_swiper ~.swiper-button-prev',
    },
})
/* ----------------------- sns 프로젝트 */
const sns = new Swiper('#sns_swiper', {
    slidesPerView:3,
    spaceBetween:10,
    autoplay:{delay:0,},
    speed:4000,
    loop:true,
})

// sns 프로젝트 클릭시 팝업 진행 (클릭한 이미지가 팝업 이미지로 교체)
const snsProject = document.querySelectorAll('#sns_swiper .swiper-slide')
const popup = document.querySelector('.popup_bg');
console.log(snsProject,popup);

for(let sns of snsProject){
    sns.addEventListener('click',()=>{
        popup.style.display = 'block';
        popup.children[0].children[0].src = sns.children[0].src;
        //팝업 실행 시 전체 수직 Swiper 스크롤 기능 막기
        wrap.mousewheel.disable(); // 스크롤 기능 풀기=> eanble()
    })
}

/* popup_bg */
popup.addEventListener('click', ()=>{
    popup.style.display='none'
    wrap.mousewheel.eanable();
})

// 내비게이션 클릭시 해당 위치 스와이프 이동
const nav = document.querySelectorAll('nav a');
// 수직 스와이프 이동함수
// 수직스와이프변수명.slideTop(이동인덱스값, 지속시간)
nav.forEach((obj, idx)=>{
    console.log(obj, idx);
    obj.addEventListener('click', (e)=>{
        e.preventDefault(); //a의 href 기본기능 막기
        wrap.slideTo(idx, 1000);
    })
})