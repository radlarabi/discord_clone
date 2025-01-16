import Image from "next/image"
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram, FaFacebook, FaYoutube, FaTiktok } from "react-icons/fa";


import DropDownLangues from './DropDownLangues'

export default function Footer(){
    const product = ["Download" ,'Nitro' ,'Status' ,'App Directory' ,'New Mobile Experience']
    const company = ["About" ,'Jobs' ,'Brand' ,'Newsroom']
    const resources = ['College' ,'Support' ,'Safety' ,'Blog' ,'Feedback' ,'StreamKit' ,'Creators' ,'Community' ,'Developers' ,'Gaming' ,'Quests' ,'Official Third-Party Merch']
    const policies = ['Terms' ,'Privacy' ,'Cookie Settings' ,'Guidelines' ,'Acknowledgements' ,'Licences' ,'Company Information']


    return (
        <>
            <div className="relative">
                <Image
                    src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/6658cc069d1eb1caf9426914_Footer-Art_cut.webp"
                    height='3000'
                    width='3000'
                    alt="al"
                    className="w-[100vw] 3xl:w-[1260px] mx-auto"
                />
                <Image
                    src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/662fa569e650b7bdf2f5d8b4_WUMPUS_LEAN_MOUTH.webp"
                    height='176'
                    width='200'
                    alt="al"
                    className="absolute right-[45%] bottom-[-5px]"
                />
            </div>
            <div className="bg_footer">
                <div className="w-[100%] px-[20px] pb-[30px] pt-[80px] flex flex-col md:flex-row max-w-[1260px] mx-auto border-b-[1px]">
                    <div className="my-8">
                        <DropDownLangues/>
                        <div className="flex gap-6">
                            <FaXTwitter className="w-[23px] h-[23px]"/>
                            <FaInstagram className="w-[23px] h-[23px]" />
                            <FaFacebook className="w-[23px] h-[23px]" />
                            <FaYoutube className="w-[23px] h-[23px]" />
                            <FaTiktok className="w-[23px] h-[23px]" />
                        </div>
                    </div>
                    <div className="md:mx-auto grid grid-cols-12">
                        <ul className="col-span-6 md:col-span-3">
                            <li className="font-semibold mb-4">Product</li>
                            {
                                product.map((el, index) => {
                                    return (
                                        <li className="mt-2 font-light" key={el + index}>
                                            <a className="" href="#">{el}</a>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                        <ul className="col-span-6 md:col-span-3">
                            <li className="font-semibold mb-4">Company</li>
                            {
                                company.map((el, index) => {
                                    return (
                                        <li className="mt-2 font-light" key={el + index}>
                                            <a className="" href="#">{el}</a>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                        <ul className="mt-16 md:mt-0 col-span-6 md:col-span-3">
                            <li className="font-semibold mb-4">Resources</li>
                            {
                                resources.map((el, index) => {
                                    return (
                                        <li className="mt-2 font-light" key={el + index}>
                                            <a className="" href="#">{el}</a>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                        <ul className="mt-16 md:mt-0 col-span-6 md:col-span-3">
                            <li className="font-semibold mb-4">Policies</li>
                            {
                                policies.map((el, index) => {
                                    return (
                                        <li className="mt-2 font-light" key={el + index}>
                                            <a className="" href="#">{el}</a>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
                <div className="flex justify-between py-6 max-w-[1260px] mx-auto ">
                    <Image 
                        src='https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/6257d23c5fb25be7e0b6e220_Open%20Source%20Projects%20_%20Discord-7.svg'
                        width='134'
                        height='24'
                        alt="discord"
                    />
                    <button className="bg-[#5865f2] rounded-3xl px-4 py-2 text-[white] font-bold text-[.7rem]">Open Discord</button>

                </div>
            </div>
        </>
    )
}