import React from 'react'
import './Header.css'
import Button from '@material-ui/core/Button'

const Header = () => {
    return (
        <div className='header' >
            <img
                className='header__image'
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1024px-Instagram_logo.svg.png"
                alt="instagram logo"
            />


            <div className="header__logout">
                <Button>Logout</Button>
            </div>
        </div>
    )
}

export default Header
