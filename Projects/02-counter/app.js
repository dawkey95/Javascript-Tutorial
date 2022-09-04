// set initial then start counting
let count = 0;

const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

btns.forEach(function(btnItem) {
  btnItem.addEventListener('click', function(e) {
    const styles = e.currentTarget.classList;
      if(styles.contains('decrease')) {
        count --;
      } 
      else if (styles.contains('reset')) {
        count = 0;
      }
      else if (styles.contains('increase')) {
        count ++;
      }
    
    if(count > 0) {
      value.style.color = 'rgb(0, 90, 0)';
    }
    if(count < 0) {
      value.style.color = 'rgb(90, 0, 0)';
    }
    if (count === 0) {
      value.style.color = 'hsl(209, 61%, 16%)';
    }
    value.textContent = count;
  })
})