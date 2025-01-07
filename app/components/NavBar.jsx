'use client'

import Image from "next/image"
import MobileNavBar from '@/app/components/MobileNavBar'
import { useState } from "react"

export default function NavBar(){
    const [isToggle, setIsToggle] = useState(false)

    const changeState = () => {
        setIsToggle(prev => !prev)
    }
    const links = ['Download', 'Nitro', 'Quests', 'Safety', 'Support', 'Blog', 'Carrers']

    
    return (
        <div className="nav_bar min-h-[80px] flex w-[100%] justify-between items-center">
            <Image 
                src='https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/6257d23c5fb25be7e0b6e220_Open%20Source%20Projects%20_%20Discord-7.svg'
                width='134'
                height='24'
                alt="discord"
            />

            <div className="lg:flex hidden font-semibold text-[#fff]">
                {
                    links.map((link, index) => {
                        return (
                            <a key={index} href="" className="px-[14px]">
                                {link}
                            </a>
                        )
                    })
                }
            </div>

            <button className="lg:flex hidden bg-[#fff] rounded-2xl text-[#000] py-[7px] px-[14px] font-bold text-[14px] hover:text-[#5865f2]">
                login
            </button>

            <button className="lg:hidden" onClick={changeState}>
                <Image 
                    src='https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/625846fc39fbe53385840143_1%20(3).svg'
                    width='40'
                    height='40'
                    alt="discord"
                />
            </button>

            <MobileNavBar className={isToggle ? '' : 'hidden'} changeState={changeState}/>
        </div>
    )
}