class ColaGenerator {
    constructor() {
        this.itemList = document.querySelector('.list-item');
    }

    async setup() {
        await this.loadData(
            (json) => {
                this.colaFactory(json);
            }
        );
    }

    // await는 반드시 async 함수안에서만 작동합니다.
    async loadData(callback) {
        // 구 방식
        // AJAX : Asynchronous Javascript And XML
        // JSON : JavaScript Object Notation
        // XML 파일을 서버와 비동기적으로 주고받기위해 등장한게 Ajax인거고 그렇다고 XML만 오갈수 있는게 아니라 JSON같은 다른 파일 포멧도 가능한거고 XMLHttpRequest 생성자가 Ajax 통신을 할 때 필요한 인스턴스를 제공해주고 그 인스턴스를 활용해서 통신하는게 Ajax fetch는 그 후 등장
        
        // const requestObj = new XMLHttpRequest(); // 서버와 통신하기 위해 객체를 생성
        // requestObj.open('GET', 'src/js/item.json'); // 요청 시작
        // requestObj.onreadystatechange = () => { // readyState가 변화하면 트리거
        //     if(requestObj.readyState === 4 && requestObj.status === 200) { 
        //         // readyState : 처리 상태를 의미. (4는 요청에 대한 처리가 끝났음을 의미)
        //         // status : 요청을 처리하는 과정에서 아무런 문제가 없음을 의미
        //         callback(JSON.parse(requestObj.responseText)); // json 데이터가 들어옴
        //     }
        // }
        // requestObj.send(null);


        // 신 방식
        // fetch()를 호출하면 브라우저는 네트워크 요청을 보내고 프라미스가 반환됩니다. 
        // await를 통해 프라미스 객체가 반환되기를 기다립니다.
        // 일반적인 fetch 요청은 두 개의 await 호출로 구성됩니다.
        // await fetch(url, options); // 통신 요청
        // await response.json(); // json 본문을 읽음
        const response = await fetch('src/js/item.json');

        if (response.ok) { // http 상태코드가 200 ~ 299일 경우를 의미
            callback(await response.json()); // 응답 본문을 읽으면서 객체 형태로 파싱
        } else {
            alert('통신 에러' + response.status);
        }
    }

    // 콜라를 생산하는 함수입니다.
    colaFactory(data) {
        const docFrag = document.createDocumentFragment();
        data.forEach((el) => {
            const item = document.createElement('li');
            const itemTemplate = `
                <button type="button" class="btn-item" data-item="${el.name}" data-price="${el.cost}" data-img="${el.img}" data-count="${el.count}">
                    <img src="src/images/${el.img}" alt="" class="img-item">
                    <strong class="tit-item">${el.name}</strong>
                    <span class="txt-price">${el.cost}원</span>
                </button>
            `;
            item.innerHTML = itemTemplate;
            docFrag.appendChild(item);
        });
        this.itemList.appendChild(docFrag);
    }
}

export default ColaGenerator;