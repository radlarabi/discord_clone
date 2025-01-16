import Image from "next/image"
import { MdOutlineFileDownload } from "react-icons/md";
import { motion } from 'motion/react'

export default function (){
    return(
        <div className="relative">
            <motion.div
                className="absolute top-[-40px] -z-10"
                animate={{
                    rotate: [0, 10, -10, 0], // Semi-rotation back and forth
                    scale: [1, .8, 0.9, 1], // Pulsating scale effect
                    x: [0, 10, -10, 0], // Horizontal movement
                    y: [0, -10, 10, 0], // Vertical movement
                    transition: { duration: 10, repeat: Infinity, ease: "linear"}
                }}    
            >
                <img src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/664b1d55ec9b7c26d37eceed_dis_Icon_Crown%20(1).webp" alt=""/>
            </motion.div>


            <motion.div
                className="absolute top-[-40px] right-[50%] -z-10"
                animate={{
                    x: [0, 20, -20, 10, 0],       // Move diagonally on the X-axis
                    y: [0, -15, 15, 10, 0],       // Move diagonally on the Y-axis
                    scale: [1, 1.2, 0.8, 1],  // Bouncy scale effect
                    opacity: [1, 0.8, 1],     // Fade in and out slightly
                    transition: { duration: 10, repeat: Infinity, ease: "linear"}
                }}
            >
                <img src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/664d859138279d183c8e1206_trophy.webp" alt=""/>
            </motion.div>

            <motion.div
                className="absolute top-[-40px] right-[7rem] -z-10"
                animate={{
                    rotateX: [0, -10, 20, 0],   // Tilts along the X-axis
                    rotateY: [0, -10, 10, 0],  // Tilts along the Y-axis
                    scale: [1, 1.1, 1],        // Subtle pulsing
                    x: [0, 20, -15, 0],        // Slight horizontal movement
                    y: [0, 30, 10, 0],        // Slight vertical movement
                    transition: { duration: 10, repeat: Infinity, ease: "linear"}
                }}
            >
                <img className="w-[50px] h-[50px] blur-sm" src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/662632b7f75202aa67c25126_turnip.webp" alt=""/>
            </motion.div>

            {/*  */}

            <motion.div
                className="absolute  top-[140px] right-0 -z-10"
                animate={{
                    rotate: [0, 10, -10, 0], // Semi-rotation back and forth
                    scale: [1, .8, 0.9, 1], // Pulsating scale effect
                    x: [0, 10, -10, 0], // Horizontal movement
                    y: [0, -10, 10, 0], // Vertical movement
                    transition: { duration: 10, repeat: Infinity, ease: "linear"}
                }}    
            >
                <img className="w-[50px] h-[50px]" src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/662f81b86a7749c6703ed047_dis_icon_Star%201.webp" alt=""/>
            </motion.div>

            <div className="flex flex-col-reverse lg:flex-row  pt-[5rem] items-center lg:items-start">
                <div className="mt-[4rem] flex flex-col justify-center items-center text-center lg:text-start max-w-[28rem]">
                    <div className="main_font text-[35px] lg:text-[3.1rem]" >
                        Group chat that’s all fun & games
                    </div>
                    <div className="">
                        Discord is great for playing games and chilling with friends, or even building a worldwide community. Customize your own space to talk, play, and hang out
                    </div>
                </div>
                <div className="relative w-[550px] xl:w-[735px]">
                    <Image
                        src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/664dae3aa8fa28593aa47cc6_CHARACTERS%20FULL.webp"
                        height="500"
                        width="800"
                        alt="al"
                        className="w-full"
                    />
                    <motion.div
                        className="absolute  bottom-[30px] left-[6rem]"
                        animate={{
                            y: [0, 20, 0], // Vertical movement
                            transition: { duration: 3, repeat: Infinity, ease: "linear"}
                        }}
                    >
                        <img className="w-[57px] h-[67px]" src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/6641da5484ffb72b9ad73f01_Clyde.webp" alt=""/>
                    </motion.div>

                    
                    <Image
                        src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/662630272724e61320fb7ee2_WUMPUS.webp"
                        height="50"
                        width="159"
                        alt="al"
                        className="absolute bottom-0 left-[35%]"
                    />

                    <motion.div
                        className="absolute bottom-[120px] left-[35%]"
                        animate={{
                            rotate: [0, -10, 5 , 0],
                            scale: [1, 1.05 ,0.95, 1], 
                            // y: [0, 20, 0], // Vertical movement
                            transition: { duration: 4, repeat: Infinity, ease: "linear"}
                        }}
                    >
                        <img className="w-[170px] h-[20px]" src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/66263062e1fb458b0803dbe6_WUMPUS-pl.webp" alt=""/>
                    </motion.div>
                    {/* https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/662630272724e61320fb7ee2_WUMPUS.webp */}
                </div>
                {/* <img className="w-[800px] h-[500px]" loading="lazy" src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/664dae3aa8fa28593aa47cc6_CHARACTERS%20FULL.webp" alt="hero"/> */}
            </div>
            <div className="flex items-center justify-center flex-col md:flex-row  mt-[2rem] gap-4 font-[system-ui]">
                <button className="flex gap-4 items-center bg-[#fff] rounded-3xl px-8 py-3 text-[black] text-[20px] w-fit">
                    <MdOutlineFileDownload/>
                    Download for Linux
                </button>
                <button className="bg-[#161CBB] rounded-3xl px-8 py-3 text-[white] text-[20px] w-fit">Open Discord in your browser</button>
            </div>
        </div >
    )
}
