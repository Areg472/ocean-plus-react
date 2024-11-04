import {Navbar} from "@/components/navbar.tsx";
import {Footer} from "@/components/footer.tsx";
import {Card, CardHeader} from "@/components/ui/card.tsx";
import {Avatar, AvatarImage} from "@/components/ui/avatar.tsx";

export function Aboutus() {
    return(
        <>
            <Navbar/>

            <body>
                <div className="container">
                    <h1 className="text-3xl">
                        About Us
                    </h1>
                    <div className="row1">
                        <Card>
                            <CardHeader>
                                <Avatar>
                                    <AvatarImage src=""/>
                                </Avatar>
                            </CardHeader>
                        </Card>
                    </div>
                </div>
            </body>

            <Footer/>
        </>
    )
}