import Image from "next/image"

export default function Footer(){
    return (
        <>
            <div className="relative">
                <Image
                    src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/6658cc069d1eb1caf9426914_Footer-Art_cut.webp"
                    height='3000'
                    width='3000'
                    alt="al"
                    className="w-[100vw] "
                />
                <Image
                    src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/662fa569e650b7bdf2f5d8b4_WUMPUS_LEAN_MOUTH.webp"
                    height='176'
                    width='200'
                    alt="al"
                    className="absolute right-[45%] bottom-[-5px]"
                />
            </div>
            <div className="main_footer"></div>
        </>
    )
}