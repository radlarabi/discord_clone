import Image from "next/image"
import { MdOutlineFileDownload } from "react-icons/md";

export default function (){
    return(
        <>
            <div className="flex flex-col-reverse lg:flex-row  pt-[5rem] items-center lg:items-start">
                <div className="mt-[4rem] flex flex-col justify-center items-center text-center lg:text-start max-w-[28rem]">
                    <div className="main_font text-[35px] lg:text-[3.1rem]" >
                        Group chat that’s all fun & games
                    </div>
                    <div className="">
                        Discord is great for playing games and chilling with friends, or even building a worldwide community. Customize your own space to talk, play, and hang out
                    </div>
                </div>
                <Image 
                    src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/664dae3aa8fa28593aa47cc6_CHARACTERS%20FULL.webp"
                    height="500"
                    width="800"
                    alt="al"
                    className="w-[550px] xl:w-[735px]"
                />
                {/* <img className="w-[800px] h-[500px]" loading="lazy" src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/664dae3aa8fa28593aa47cc6_CHARACTERS%20FULL.webp" alt="hero"/> */}
            </div>
            <div className="flex items-center justify-center flex-col md:flex-row  mt-[2rem] gap-4 font-[system-ui]">
                <button className="flex gap-4 items-center bg-[#fff] rounded-3xl px-8 py-3 text-[black] text-[20px] w-fit">
                    <MdOutlineFileDownload/>
                    Download for Linux
                </button>
                <button className="bg-[#161CBB] rounded-3xl px-8 py-3 text-[white] text-[20px] w-fit">Open Discord in your browser</button>
            </div>
        </>
    )
}
