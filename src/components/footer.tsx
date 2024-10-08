import "./footer.css"

export function Footer()
{
    return (
            <>
            <div className="row space-x-5">
                <div className="column left">
                    <a target="_blank" href="https://oceanbluestream.com/discord/">
                        <button className="buttons">Discord</button>
                    </a>
                </div>
                <div className="column middle">
                    <a target="_blank" href="https://uptime.betterstack.com">
                        <button className="buttons">
                                <img className="uptimebutton"
                                     alt="Better Stack Website Monitoring"
                                     src="https://uptime.betterstack.com/assets/static_assets/badges/blue.png"/>
                        </button></a>
                    </div>
                    <div className="column right">
                        <a target="_blank" href="https://www.youtube.com/@RosieBrosEntertainment">
                             <button className="buttons">© Ocean Blue Studios, 2024</button>
                        </a>
                    </div>
                </div>
            </>
            )
            }