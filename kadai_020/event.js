const btn = document.getElementById('btn');

const text = document.getElementById('text')

console.log(text);

btn.addEventListener('click', ()=>{
    text.textContent='ボタンをクリックしました';
    console.log(text);
})