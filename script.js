document.getElementById('button').addEventListener('click', ()=>{
    document.querySelector('.loon').classList.add('loon-anime')
    setTimeout(()=>{
        document.querySelector('.loon').classList.add('hide')
    },4950)
})