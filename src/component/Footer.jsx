import React from 'react'
import './footer.css'
const Footer = () => {
  return (
    <footer>
        <div className="row">
            <div className="col">
                <img src="image/logo.webp" alt=""className='logo' />
                <h3>NFT Marketplace</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, ipsam!</p>
                <p className='email'><i className="fa-regular fa-envelope"></i>NFT.hello@gmail.com</p>
                <h4>+2160023221</h4>
            </div>
            <div className="col">
                <h3>office</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus, deleniti a id laudantium consequuntur commodi?</p>
                <h3>hello NFT</h3>
            </div>
            <div className="col">
                <h3>Links</h3>
                <ul className='footer-list' >
                    <li>Home</li>
                    <li>Contact</li>
                    <li>About</li>
                </ul>
            </div>
            <div className="col">
                <h4>Contact</h4>
                <form action="">
                <i className="fa-solid fa-envelope"></i>
                <input type="text" placeholder='write your email here' />
                </form>
            </div>
        </div>
    </footer>
  )
}

export default Footer