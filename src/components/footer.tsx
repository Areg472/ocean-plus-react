import "./footer.css"

export function Footer()
{
    return (
            <>
                <div className="row">
                    <div className="column left">
                        <a href="https://oceanbluestream.com/discord/">
                            <button className="button leading-loose">Discord</button>
                        </a>
                    </div>
                    <center>
                    <div className="column middle">
                        <a target="_blank" href="https://uptime.betterstack.com"><img className="uptimebutton"
                                                                                      alt="Better Stack Website Monitoring"
                                                                                      src="https://uptime.betterstack.com/assets/static_assets/badges/blue.png"/>
                        </a>
                    </div>
                    </center>
                    <div className="column right">
                        <p>© Ocean Blue Studios, 2024</p>
                    </div>
                </div>
            </>
            )
            }