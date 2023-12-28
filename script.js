const activePage=window.location.pathname;

const navlinks=document.querySelectorAll('.navbar a').forEach(link=>{
    if(link.href.includes(`${activePage}`)){
        link.classList.add('active');
    }
})
const logo=document.querySelectorAll('header .logo').forEach(link=>{
    if(link.href.includes(`${activePage}`)){
        link.classList.add('active');
    }
        
})
