import React, { useEffect } from 'react';

const Nav = ()=>{
    useEffect(()=>{
        const nav = document.getElementById('nav-toggle')
        nav.addEventListener('click',()=>{
            document.getElementById('nav').classList.toggle('appear')
            const list = document.querySelectorAll('#nav li')
            list[0].classList.toggle('opacity')
            list[1].classList.toggle('opacity')
            list[2].classList.toggle('opacity')
            const icon = document.querySelector('.nav_res')
            icon.classList.toggle('anim-nav')
        })
    },[])
    return(
        <div className='nav'>
            <h1>Science Speaks</h1>
            <ul id='nav'>
                <li>Blogs</li>
                <li>Add Blogs</li>
                <li>Contact</li>
            </ul>
            <div className='nav_res' id='nav-toggle'>
            </div>
        </div>
    )
}

export default Nav