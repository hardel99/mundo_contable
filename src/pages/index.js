import React, {userState, useState} from 'react'
import Navbar from '../Components/Navbar'


const index = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () =>{
        setIsOpen(!isOpen)
    }

    return (
        <Navbar toggle= {toggle} />
    )
}

export default index;
