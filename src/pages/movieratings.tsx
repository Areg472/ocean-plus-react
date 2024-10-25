import MetaTags from "@/components/MetaTags.tsx";
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
                  <div className="dark">
                      <Card>
                          <CardHeader>
                              <CardTitle>Our ratings</CardTitle>
                              <CardDescription>We use special age ratings for our movies, created by us.</CardDescription>
                          </CardHeader>
                          <CardContent>
                              <p>The ratings are:</p>
                              <div className="row">
                                  <div className="col">
                                      <p>Everyone</p>
                                  </div>
                                  <div className="col">

                                  </div>
                              </div>
                          </CardContent>
                          <CardFooter>
                              <p></p>
                          </CardFooter>
                      </Card>
                  </div>
            </body>
        </>
    )
}