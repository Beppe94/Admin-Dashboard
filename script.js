const toggle = document.getElementById('toggle')
const sidebar = document.getElementById('sidebar')

toggle.addEventListener('click', () => {
    if(!sidebar.style.left || sidebar.style.left === '-250px') {
        sidebar.style.left = '0'
    } else {
        sidebar.style.left = '-250px'
    }
})


