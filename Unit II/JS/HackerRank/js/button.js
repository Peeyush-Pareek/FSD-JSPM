  let counter = document.getElementById('btn');
let i = 0;

counter.addEventListener('click', () => {
    i+=1;
    counter.innerHTML = i;
});