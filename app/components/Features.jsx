import Image from "next/image"
import { MdOutlineFileDownload } from "react-icons/md";


export default function Features(){
    return (
        <>
            <div className="feature_1 relative flex flex-col md:flex-row-reverse justify-center items-center">
                <div className="absolute top-[-60px] md:right-[25%] -z-10 h-[60px] overflow-hidden ">
                    <Image
                        src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/6620ec7544fa3849c3cb27fc_party_wumpus.gif"
                        width="100"
                        height="100"
                        alt="abc"
                        className=""
                    />
                </div>
                <div className="flex flex-col px-8 md:w-[50%]">
                    <div className="font-[abcgintonord] text-[2rem]">Make your group chats more fun</div>
                    <div className="mb-8 mt-4">Use custom emoji, stickers, soundboard effects and more to add your personality to your voice, video, or text chat. Set your avatar and a custom status, and write your own profile to show up in chat your way.</div>
                </div>
                <div className="md:w-[50%]">
                    <video className="rounded-3xl aspect-[435/335] max-w-[100%] object-cover" autoPlay loop playsInline muted>
                        <source src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/663b271d6f05c8c9e11f8d65_Discord%20Refresh%20Sound-MP4-transcode.mp4"/>
                    </video>
                </div>
            </div>

            <div className="feature_2 flex flex-col md:flex-row justify-center items-center">
                <div className="flex flex-col px-8 md:w-[50%]">
                    <div className="font-[abcgintonord] text-[2rem]">stream like you’re in the same room</div>
                    <div className="mb-8 mt-4">High quality and low latency streaming makes it feel like you're hanging out on the couch with friends while playing a game, watching shows, looking at photos, or idk doing homework or something.</div>
                </div>
                <div className="md:w-[50%]">
                    <video className="rounded-3xl aspect-[435/335] max-w-[100%] object-cover" autoPlay loop playsInline muted>
                        <source src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2%2F665434315cbc60da2d4c9684_Discord_Website_Refresh_Same%20Room_EN_V2-transcode.mp4"/>
                    </video>
                </div>
            </div>

            <div className="feature_3 relative flex flex-col md:flex-row-reverse justify-center items-center">
                <div className="absolute md:top-[-92px] md:right-[-2.4rem] top-[-68px] right-[-1.8rem]">
                    <Image
                        src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/6630f482123160b94617877a_Box%20(1).webp"
                        width="200"
                        height="200"
                        alt="abc"
                        className="md:h-[200px] md:w-[200px] h-[150px] w-[150px]"
                    />
                </div>
                <div className="flex flex-col px-8 md:w-[50%]">
                    <div className="font-[abcgintonord] text-[2rem]">Hop in when you're free, no need to call</div>
                    <div className="mb-8 mt-4">Easily hop in and out of voice or text chats without having to call or invite anyone, so your party chat lasts before, during, and after your game session.</div>
                </div>
                <div className="md:w-[50%]">
                    <video className="rounded-3xl aspect-[435/335] max-w-[100%] object-cover" autoPlay loop playsInline muted>
                        <source src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/6638c6b04eff56a99c1e2d7d_Discord_Website_Refresh_Hop-In-transcode.mp4"/>
                    </video>
                </div>
            </div>

            <div className="feature_3 flex flex-col md:flex-row justify-center items-center">
                <div className="flex flex-col px-8 md:w-[50%]">
                    <div className="font-[abcgintonord] text-[2rem]">See who's around to chill</div>
                    <div className="mb-8 mt-4">See who's around, playing games, or just hanging out. For supported games, you can see what modes or characters your friends are playing and directly join up.</div>
                </div>
                <div className="md:w-[50%]">
                    <video className="rounded-3xl aspect-[435/335] max-w-[100%] object-cover" autoPlay loop playsInline muted>
                        <source src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/6638c7e8907412911166f683_Discord_Website_Refresh_See Who_s Around-transcode.mp4"/>
                    </video>
                </div>
            </div>

            <div className="feature_1 relative flex flex-col md:flex-row-reverse justify-center items-center">
                
                <div className="overflow-hidden h-[100px] absolute top-[-100px] flex flex-row-reverse" >
                    <Image
                        src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/663361fab0387e34d5aae65e_Men%20(1)-p-500.webp"
                        width="100"
                        height="100"
                        alt="abc"
                        className="w-[7rem] h-[10rem]"
                    />
                    <Image
                        src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/6633621b9b5c83e2ee57271f_woman-top.webp"
                        width="100"
                        height="100"
                        alt="abc"
                        className="w-[7rem] h-[10rem]"
                    />
                </div>
                <div className="flex flex-col px-8 md:w-[50%]">
                    <div className="font-[abcgintonord] text-[2rem]">always have something to do together</div>
                    <div className="mb-8 mt-4">Watch videos, play built-in games, listen to music, or just scroll together and spam memes. Seamlessly text, call, video chat, and play games, all in one group chat.</div>
                </div>
                <div className="md:w-[50%]">
                    <video className="rounded-3xl aspect-[435/335] max-w-[100%] object-cover" autoPlay loop playsInline muted>
                        <source src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/66446078b3e738a7c1f85e35_Discord_Website_Refresh_Activities_03-transcode.mp4"/>
                    </video>
                </div>
            </div>

            <div className="feature_3 flex flex-col md:flex-row justify-center items-center">
                <div className="flex flex-col px-8 md:w-[50%]">
                    <div className="font-[abcgintonord] text-[2rem]">wherever YOU GAME, HANG OUT HERE</div>
                    <div className="mb-8 mt-4">On your PC, phone, or console, you can still hang out on Discord. Easily switch between devices and use tools to manage multiple group chats with friends.</div>
                </div>
                <div className="md:w-[50%]">
                    <video className="rounded-3xl aspect-[435/335] max-w-[100%] object-cover" autoPlay loop playsInline muted>
                        <source src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/6638c8e7cb756886cd8d61af_Discord_Website_Refresh_Platforms-transcode.mp4"/>
                    </video>
                </div>
            </div>
            
            <div className="mt-[6rem] flex flex-col items-center">
                <div className="font-[abcgintonord] text-center text-[2rem] md:text-[3rem]">YOU CAN'T SCROLL ANYMORE.<br/> BETTER GO CHAT.</div>
                <button className="my-6 flex gap-4 items-center bg-[#5865f2] rounded-3xl px-8 py-3 text-[white] text-[20px] w-fit hover:bg-[#8891f270]">
                    <MdOutlineFileDownload/>
                    Download for Linux
                </button>
            </div>
            {/* <Image
                src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/6658cc069d1eb1caf9426914_Footer-Art_cut.webp"
                height='1000'
                width='1000'
                alt="al"
                className=""
            />
            <img className="w-[100vw]" src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/6658cc069d1eb1caf9426914_Footer-Art_cut.webp"/> */}
        </>
    )
}