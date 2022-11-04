// section
const lodingSection = document.querySelector('.cont-result-loading');
const resultSection = document.querySelector('.cont-result');
const modalSection = document.querySelector('#modal');

// button
const btnStart = document.querySelector('.btn-exc');
const btnGo = document.querySelector('.btn-go');
const btnShare = document.querySelector('.btn-share');
const btnClose = document.querySelector('.btn-close');

function calculate() {
    const fieldVal = document.querySelector('#inp-field');
    const timeVal = document.querySelector('#inp-time');
    
    if (fieldVal.value === '' || timeVal.value === '') {
        alert('비정상 접근입니다.');
        return
    } else if (timeVal.value >= 24) {
        alert('24이하의 값을 입력해 주세요.');
        return
    } else if (timeVal.value == 0) {
        alert('0이상의 값을 입력해 주세요.');
        return
    }
    
    lodingSection.style.display = 'block';
    
    setTimeout(() => {
        const fieldResult = document.querySelector('.field-result');
        const timeResult = document.querySelector('.time-result');

        lodingSection.style.display = 'none';
        resultSection.style.display = 'block';

        fieldResult.innerText = fieldVal.value;
        timeResult.innerText = Math.floor(10000 / parseInt(timeVal.value));
    }, 1500);
    
}

function openModal() {
    modalSection.style.display = 'flex';
}

function closeModal() {
    modalSection.style.display = 'none';
}

function copyUrl() {
    // 3가지 방법
    // 1 : 구버전(이제는 잘 사용하지 않는다.)
    // let url = window.location.href;
    // let temp = document.createElement('input');
    // temp.value = url;
    // document.body.appendChild(temp);
    // temp.select();
    // document.execCommand('copy');
    // document.body.removeChild(temp);
    // alert('URL이 복사되었습니다.');

    // 2 : 신버전(safari 13.1 버전부터 https 환경에서만 작동하는 코드)
    // Navigator 인터페이스는 사용자 에이전트의 상태와 신원 정보를 나타내며, 스크립트로 해당 정보를 질의할 때와 애플리케이션을 특정 활동에 등록할 때 사용
    let url = window.location.href;
    navigator.clipboard.writeText(url)
        .then(()=>{
            alert('클립보드에 URL이 복사되었습니다.')
        })
        .catch(err=>{
            alert('URL이 복사되지 않았습니다. 호환되는 브라우저가 아닙니다.')
            console.log(err);
        })

    // 3 : clipboard.js 라이브러리 사용하하는 방법

}


btnStart.addEventListener('click', calculate);
btnGo.addEventListener('click', openModal);
btnClose.addEventListener('click', closeModal);
btnShare.addEventListener('click', copyUrl);

window.onclick = function (event) {
    if (event.target === modalSection) {
        closeModal();
    }
}