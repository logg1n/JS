const head = document.querySelector(`.head`);
let count = 0;
const ArrayNotes = [
    `do.mp3`
/*"notes/re.mp3",
"notes/mi.mp3",
"notes/fa.mp3",
"notes/so.mp3",
"notes/la.mp3",
"notes/ci.mp3"*/
];
let ArrayAudio = new Array(28);
const ArrayKeysUp = [
    `q`,`w`,`e`,`r`,`t`,`y`,`u`,`i`,`o`,`p` ]
const ArrayKeyDown = [
    `a`,`s`,`d`,`f`,`g`,`h`,`/`,`.`,`m`,`n`,`b`,`v`]

/*
* Функция создания эелементов(клавиш)
*
*/
function creatElem(length, class_name, tag = '') {
    for (let i = 0; i < length; i++,count++){
        let elem = document.createElement(`div`);
        elem.className = class_name;
        elem.id = `${count}`
        elem.addEventListener('click', eventMouse);
        elem.addEventListener(`keydown`, eventKey)
        head.append(elem);
    }
}

/*
* CallBack(наверно) для события нажатия клавиши мыши.
* нажимается клавиша играется соответствующий звук
*/

function eventMouse(event){
    console.log(parseInt(event.currentTarget.id))

    let i = 0;
    while (true) {
        if(parseInt(event.currentTarget.id) === i++){
            ArrayAudio[i].play();
            console.log(ArrayNotes[i] );


            break;
        }
    }
}

/*
* CallBack(наверно) для события нажатия клавиши клавиатуры.
* нажимается клавиша играется соответствующий звук
*/
function eventKey(key){
    console.log(key.code + key.key)
}

/*
* Создание Аудио Элементов
*
*
*/
function prefAudio() {
    let temp = new Array(28);

    for (let i = 0; i < 28; i++){
        temp[i] = new Audio();
        temp[i].src = "do.mp3";
    }

    return temp;
}

window.onload = ()=>{
    let class_name = `div_w`;

    ArrayAudio = prefAudio();
    creatElem(14, `div_w`);
    creatElem(2, `div_b div_b_2_1`);
    creatElem(3, `div_b div_b_3_1`);
    creatElem(2, `div_b div_b_2_2`);
    creatElem(3, `div_b div_b_3_2`);
    creatElem( 28, `audio`, );
}