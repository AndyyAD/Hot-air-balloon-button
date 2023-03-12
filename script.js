document.querySelector('.btn').addEventListener('mouseenter', () => {
    document.querySelector('.hide').classList.add('animate-feather')
    document.querySelector('.peacock-head').classList.add('animate-peacock-head')
})
document.querySelector('.btn').addEventListener('mouseleave', () => {
    document.querySelector('.hide').classList.remove('animate-feather')
    document.querySelector('.peacock-head').classList.remove('animate-peacock-head')
})