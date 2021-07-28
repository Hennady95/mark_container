const valueField = document.getElementById('percent_value');
const enterBtn = document.getElementById('ok');
const shadow = document.querySelector('.mark_container_shadow');
const error = document.getElementById('error');
const star = document.querySelectorAll('.star_shadow');

enterBtn.addEventListener('click', () => {

    let number = Number(valueField.value);
    let starNumber = star.length - 1;
    let count =0;
    
    if(number) {
        if(number <= 100) {
            let n = number / 20;
            for(let i = 0; i < n; i++) {
                let width = 0;
                if(number > 20) {
                    width = 100;
                    number -= 20;
                }else {
                    width = (number * 5)
                }
                star[i].style.width = `${width}%`;
                count = i;
            }
            while(starNumber !== count) {
                star[starNumber].style.width = `${0}%`;
                starNumber -= 1;
            }
            error.textContent = '';
        }
        if(number < 0) {
            error.textContent = `Minimal value is 0`;
        }
        if(number > 100) {
            error.textContent = 'Value can be 0 ... 100';
        }
    } else {
        error.textContent = 'Percent must be a number';
    }
})

valueField.addEventListener('focus', () => {error.textContent = ''})