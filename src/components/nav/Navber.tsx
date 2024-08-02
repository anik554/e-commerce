import React from 'react';

const Navber = () => {
    return (
        <nav id='navItems'>
            <header className='brandName'>
                <span>Online Shop</span>
            </header>
            <section className='menus'>
                <ul>
                    <li> <a href="http://">Home</a> </li>
                    <li> <a href="http://">About</a> </li>
                    <li> <a href="http://">Contact</a> </li>
                    <li> <a href="http://">Log in</a> </li>
                </ul>
            </section>
        </nav>
    );
};

export default Navber;