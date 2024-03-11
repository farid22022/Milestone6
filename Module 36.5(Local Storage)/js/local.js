const hello = window.localStorage.getItem('hello');
console.log(hello);

const setAge = document.getElementById('set-age').addEventListener('click', function(){
    window.localStorage.setItem('age', 13);
});
