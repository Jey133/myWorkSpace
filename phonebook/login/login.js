const BASE_URL = 'https://phonebook.hillel.it';

const loginForm = document.querySelector('.loginForm');
const loginInputEmail = document.querySelector('.loginForm input email');
const loginInputPassword = document.querySelector('.loginForm input password');



loginForm.addEventListener('submit', e => {
    e.preventDefault();
    authorize();
});




function authorize () {
    fetch(`${BASE_URL}/auth/login`, {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({
            value: loginInput.value
        })
    }).then(response => response.json())
        .then(data => {
            token = `Bearer ${data.access_token}`;     
            loginForm.classList.add('hide');
            taskForm.classList.remove('hide');
            fetchTodoList();
        })
};