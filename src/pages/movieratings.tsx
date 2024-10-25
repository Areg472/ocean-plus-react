import MetaTags from "@/components/MetaTags.tsx";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import "./movieratings.css"


export function Movieratings()
{
    return(
        <>
            <MetaTags
                title="Ocean+ - Movie Ratings"
                description="Our movie ratings for Ocean+"
                image="https://raw.githubusercontent.com/Areg472/ocean-plus-react/refs/heads/main/src/pictures/logo.jpg"
                name='Ocean+'
            />
            <body>
                <Tabs defaultValue="age" className="dark">
                    <TabsList className="tabs w-[500px]">
                        <TabsTrigger value="age" className="w-[250px]">Movie age ratings</TabsTrigger>
                        <TabsTrigger value="tv" className="w-[250px]">TV age ratings</TabsTrigger>
                    </TabsList>
                    <TabsContent value="age">
                        <Card className="">
                            <CardHeader>
                                <CardTitle>Our ratings</CardTitle>
                                <CardDescription></CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p>Card Content</p>
                            </CardContent>
                            <CardFooter>
                                <p></p>
                            </CardFooter>
                        </Card>

                    </TabsContent>
                    <TabsContent value="tv">
                        <Card className="">
                            <CardHeader>
                                <CardTitle>Our ratings</CardTitle>
                                <CardDescription></CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p>Card Content</p>
                            </CardContent>
                            <CardFooter>
                                <p></p>
                            </CardFooter>
                        </Card>
                    </TabsContent>
                </Tabs>
            </body>
        </>
    )
}