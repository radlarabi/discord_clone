import Image from "next/image"

export default function MobileNavBar({className, changeState}){
    const links = ['Download', 'Nitro', 'Quests', 'Safety', 'Support', 'Blog', 'Carrers']

    return( 
        <div className={`${className} absolute top-0 right-0 bg-[#fff] w-[320px] max-w-[100%] h-[100vh] p-[20px] rounded-tl-xl`}>
            <div className="justify-between flex flex-row border-b-[1px] pb-[30px]">
                <Image 
                    src='https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/6257d23c5fb25be7e0b6e220_Open%20Source%20Projects%20_%20Discord-7.svg'
                    width='134'
                    height='24'
                    alt="discord"
                />

                <button onClick={changeState}>
                    <Image 
                        src='https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/62594869635af64d3e8a9a63_Frame.svg'
                        width='25'
                        height='25'
                        alt="close"
                    />
                </button>
            </div>
            <div className="flex flex-col pt-[30px] font-bold text-[#23272a]">
                {
                    links.map((link, index) => {
                        return (
                            <a key={index} href="" className="py-[14px]">
                                {link}
                            </a>
                        )
                    })
                }
            </div>
            <div className="w-[100%]">
                <a className="flex justify-center bg-[#5865f2] text-[#fff] rounded-lg text-[12px] py-[4px]">
                    Download
                </a>

            </div>
        </div>
    )
}