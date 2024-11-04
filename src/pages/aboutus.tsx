import {Navbar} from "@/components/navbar.tsx";
import {Footer} from "@/components/footer.tsx";
import {Cardareg, CardaregContent, CardaregHeader} from "@/components/ui/cardareg.tsx";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar.tsx";
import {Cardleon, CardleonContent, CardleonHeader} from "@/components/ui/cardleon.tsx";
import {Cardveyshal, CardveyshalContent, CardveyshalHeader} from "@/components/ui/cardveyshal";
import {Cardcarlo, CardcarloContent, CardcarloHeader } from "@/components/ui/cardcarlo";

export function Aboutus() {
    return(
        <>
            <Navbar/>

            <body>
                <div className="container">
                    <h1 className="text-3xl mt-6">
                        About Us
                    </h1>
                    <h3 className="text-xl mt-3">
                        Here is our team who develops Ocean+
                    </h3>
                    <div className="row space-y-6 md:space-x-2 lg:space-x-14 md:space-y-0 justify-center mt-4 md:mt-6 mb-10 flex-col md:flex-row">
                        <Cardareg className="card w-52 basis-full lg:basis-1/4">
                            <CardaregHeader>
                                <Avatar className="ml-[38px] md:ml-[22px] lg:ml-[38px]">
                                    <AvatarImage src="https://raw.githubusercontent.com/Areg472/ocean-plus-react/refs/heads/main/src/pictures/uwuuu%20duck.png"/>
                                    <AvatarFallback>AR</AvatarFallback>
                                </Avatar>
                                <h3 className="text-xl mr-1">Areg</h3>
                                <p>Main developer</p>
                            </CardaregHeader>
                            <CardaregContent>
                                <a href="https://www.youtube.com/@aregthevideoeditor" className="ml-0 md:ml-4" target="_blank">
                                    <button className="button w-24">
                                        Youtube
                                    </button>
                                </a>
                            </CardaregContent>
                        </Cardareg>
                        <Cardleon className="card w-52 basis-full lg:basis-1/4">
                            <CardleonHeader>
                                <Avatar className="ml-[38px] md:ml-[22px] lg:ml-[38px]">
                                    <AvatarImage src="https://raw.githubusercontent.com/Areg472/ocean-plus-react/refs/heads/main/src/pictures/leon%20profile%20icon.jpg"/>
                                    <AvatarFallback>LE</AvatarFallback>
                                </Avatar>
                                <h3 className="text-xl mr-1">Leon</h3>
                                <p>2nd developer</p>
                            </CardleonHeader>
                            <CardleonContent>
                                <a href="https://www.youtube.com/@1leon000" className="ml-0 md:ml-4" target="_blank">
                                    <button className="button w-24">
                                        Youtube
                                    </button>
                                </a>
                            </CardleonContent>
                        </Cardleon>
                        <Cardveyshal className="card w-52 basis-full lg:basis-1/4">
                            <CardveyshalHeader>
                                <Avatar className="ml-[38px] md:ml-[22px] lg:ml-[38px]">
                                    <AvatarImage src="https://raw.githubusercontent.com/Areg472/ocean-plus-react/refs/heads/main/src/pictures/veysshal%20profile%20icon.jpg"/>
                                    <AvatarFallback>VE</AvatarFallback>
                                </Avatar>
                                <h3 className="text-xl mr-1">Veyshal</h3>
                                <p>Founder</p>
                            </CardveyshalHeader>
                            <CardveyshalContent>
                                <a href="https://www.youtube.com/@veymations" className="ml-0 md:ml-4" target="_blank">
                                    <button className="button w-24">
                                        Youtube
                                    </button>
                                </a>
                            </CardveyshalContent>
                        </Cardveyshal>
                        <Cardcarlo className="card w-52 basis-full lg:basis-1/4">
                            <CardcarloHeader>
                                <Avatar className="ml-[38px] md:ml-[22px] lg:ml-[38px]">
                                    <AvatarImage src="https://raw.githubusercontent.com/Areg472/ocean-plus-react/refs/heads/main/src/pictures/carlo%20pfp.jpg"/>
                                    <AvatarFallback>AR</AvatarFallback>
                                </Avatar>
                                <h3 className="text-xl mr-1">Carlo</h3>
                                <p>Editor</p>
                            </CardcarloHeader>
                            <CardcarloContent>
                                <a href="https://www.youtube.com/@CarloBear" className="ml-0 md:ml-4" target="_blank">
                                    <button className="button w-24">
                                        Youtube
                                    </button>
                                </a>
                            </CardcarloContent>
                        </Cardcarlo>
                    </div>
                </div>
            </body>

            <Footer/>
        </>
    )
}