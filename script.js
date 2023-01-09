const count = document.querySelector('#count');
const btns = document.querySelectorAll('.btn');

let num = 0;

btns.forEach((btn) => {
    btn.addEventListener('click',(e) => {
        const styles = e.currentTarget.classList

        if(styles.contains('increase')){
            num ++ ;
        } else {
            num = 0;
        }

        count.textContent = num;
    })
})
