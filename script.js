const checkbox = document.querySelector('.checkbox');
const annually = document.querySelectorAll('.annually');
const monthly = document.querySelectorAll('.monthly');

checkbox.addEventListener('change', () => {
  if (checkbox.checked) {
        monthly.forEach(preço => preço.classList.add('ativo'));
        annually.forEach(preço => preço.classList.remove('ativo'));
  } else {
        monthly.forEach(preço => preço.classList.remove('ativo'));
        annually.forEach(preço => preço.classList.add('ativo'));
  }
});


/*btn.addEventListener('click', function() { 
    btn.classList.toggle('ativo');
    if(btn.ativo) {
        annually = annually.style.display = 'none'
        monthly = monthly.style.display = 'block'
    } else {
        annually = annually.style.display = 'block'
        monthly = monthly.style.display = 'none'
    }
   
})*/
