import React from 'react';

function Nav() {
  

  return (
    <header className='header'>
    <h2>
      <a href="/" className='title'>
        <span> Griller </span> 
      </a>
    </h2>
    <nav>
      <ul className='list'>
        <li className='link'>
          <span href="#login" >
            Login
          </span>
        </li>
        <li className='link'>
         <span href='#signup'>
            Signup
         </span>
        </li>
        <li className='link'>
            <span href='#recipes'>
                Recipes
            </span>
        </li>
      </ul>
    </nav>
  </header>
  );
}

export default Nav;