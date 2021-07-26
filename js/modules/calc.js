function calc() {
    const result = document.querySelector('.calculating__result span');
    let sex, height, weight, age, radio;

    if (localStorage.getItem('sex')) {
        sex = localStorage.getItem('sex');
    } else {
        sex = 'female';
        localStorage.setItem('sex', 'female')
    }

    if (localStorage.getItem('radio')) {
        radio = localStorage.getItem('radio');
    }else {
        radio = 1.375;
        localStorage.setItem('ratio', 1.375);
    }

    function initLocalSettings (selector, active) {
        const elements = document.querySelectorAll(selector);

        elements.forEach(elem => {
            elem.classList.remove(active);
            if (elem.getAttribute('id') === localStorage.getItem('sex')) {
                elem.classList.add(active);
            }
            if (elem.getAttribute('data-radio') === localStorage.getItem('ratio')) {
                elem.classList.add(active);
            }
        });
    }
    initLocalSettings('#gender div', 'calculating__choose-item_active');
    initLocalSettings('.calculating__choose_big div', 'calculating__choose-item_active');

    function calcTotal() {
        if (!sex || !height || !weight || !age || !radio) {
            result.textContent = '____';
            return;
        }

    
        if (sex == 'female') {
            result.textContent = Math.round((447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age)) * radio);
    } else {
        result.textContent = Math.round((88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age)) * radio);
    }
}
   
    calcTotal();

    function getStaticInfromation(selector, activeClass) {
        const elemens = document.querySelectorAll(selector);

        elemens.forEach(elem => {
            elem.addEventListener('click', (e) => {
                if (e.target.getAttribute('data-radio')) {
                    radio = +e.target.getAttribute('data-radio');
                    localStorage.setItem('ratio', +e.target.getAttribute('data-radio'));
                } else {
                    sex = e.target.getAttribute('id');
                    localStorage.setItem('sex', e.target.getAttribute('id'));
                }
    
    
                elemens.forEach(item => item.classList.remove(activeClass));
    
                e.target.classList.add(activeClass);
                calcTotal();
            });
        });
        

    }

    getStaticInfromation('#gender div', 'calculating__choose-item_active');
    getStaticInfromation('.calculating__choose_big div', 'calculating__choose-item_active');

    function getDinamicInformation(selector) {
        const input = document.querySelector(selector);

        input.addEventListener('input', (e) => {


            if (input.value.match(/\D/g)) {
                input.style.border = '1px solid red';
            } else {
                input.style.border = 'none';
            }
            switch(input.getAttribute('id')){
                case 'height':
                    height = +input.value;
                    break;
                case 'weight':
                    weight = +input.value;
                    break;
                case 'age':
                    age = +input.value;
                    break;
            }
            calcTotal();
        });
       

    }
    getDinamicInformation('#height');
    getDinamicInformation('#weight');
    getDinamicInformation('#age');
    calcTotal();

}

export default calc;