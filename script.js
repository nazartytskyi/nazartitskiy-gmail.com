window.onload = () => {
    results = {}
    const forms = document.querySelectorAll('form');

for (let i = 0; i < forms.length; i++) {
    forms[i].addEventListener('submit', (e)=>onSubmit(i,e));
}

}
function onSubmit (i,e) {
    e.preventDefault();
    e.currentTarget.style.display = 'none'
    results[e.currentTarget.querySelector('input').placeholder] = e.currentTarget.querySelector('input').value;

    if (e.currentTarget.nextElementSibling) {
        e.currentTarget.nextElementSibling.style.display = 'block';
    } else {
        document.body.innerHTML = JSON.stringify(results);
    }
}