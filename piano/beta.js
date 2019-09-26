/**
 * !TODO: Код написан в VS Code 
 * !TODO: Комментарии оформлены при момощи расширения  Better Comments
 * TODO: Автор: Станислав Царёв
 * TODO: г.Берёза
 */

'use strict'

window.onload = () => {
    const head = document.getElementsByClassName(`head`)[0];
        head.addEventListener(`keypress`, eventKey);
        head.addEventListener('click', eventMouse);
    
    /**
     * ?TODO: Вешается фокус на  эелемент - body
     * TODO:  на практике фокус надо передать кликом мыши в firefox v69.0.1 
     *  */    
        head.focus();

    const KEYS = 24;

    /**
     * ?TODO: Имена звуковых файлов
     */
    const AudioSrc = [
        'f1', 'g1', 'a2', 'b2', 'c2', 'd2', 'e2',
        'f2', 'g2', 'a3', 'b3', 'c3', 'd3', 'e3',
        'f1s', 'g1s', 'a1s', 'c2s', 'd2s',
        'f2s', 'g2s', 'a3s', 'c3s', 'd3s',
    ];

    const HotKeys = [`a`,`s`,`d`,`f`,`g`,`h`,`j`,`v`,`b`,`n`,`m`,`,`,`.`,`/`,
                        `q`,`w`,`e`,`r`,`t`,`y`,`u`,`i`,`o`,`p`];

    /**
     * ?TODO: Создание клавиш
     * ?TOOD: заполнение аттрибутов
     * 
     */
    (function(){
        for (let i = 0; i < KEYS; i++) {
            let temp = document.createElement(`input`);
            temp.type = `button`
            temp.setAttribute(`data-index`, `${i}`);
            temp.setAttribute(`data-src`, `notes/${AudioSrc[i]}.ogg`);
            temp.setAttribute(`key-index`, HotKeys[i])
            temp.className = `${HotKeys[i]} ${(i < KEYS-10 ? "div_w" : `div_b${i} div_b`)}`
            temp.value = `${HotKeys[i]}`

            head.append(temp)
        }
    }() );

    function play(audio, src) {
        audio.src = src
        audio.play()
    }

    function eventMouse(event){
        play(new Audio(), event.target.getAttribute(`data-src`)) 
    }

    function eventKey(event){
        event.preventDefault();
        play(new Audio(), document.getElementsByClassName(event.key)[0].getAttribute(`data-src`)) 
    }
}