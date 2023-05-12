import React from 'react'
import logo from '../img/logo.svg'
import ButtonHeader from './ButtonHeader'

export default function Header() {
    return (
        <div className='bg-white px-[48px] pt-[32px] w-full flex justify-between fixed top-0 left-0 z-50'>
            <img src={logo} alt='logo' className='w-[32px] h-[32px]' />
            <div>
                <ButtonHeader content="Questions?" />
                <ButtonHeader content="Save & exit" />
            </div>
        </div>
    )
}
