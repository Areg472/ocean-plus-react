import "./footer.css"

export function Footer()
{
    return (
            <>
                <div className="row space-x-5">
                    <div className="column left">
                        <a target="_blank" href="https://oceanbluestream.com/discord/">
                            <button className="buttons2 mb-1.5">Discord</button>
                        </a>
                        <a target="_blank" href="https://status.oceanbluestream.com/">
                            <button className="buttons2">Status</button>
                        </a>
                    </div>
                    <div className="column">
                        <a target="_blank" href="https://oceanbluestream.com/">
                            <button className="buttons h-[60px] w-[230px] lg:w-[200px] mt-0 lg:mt-[1.4px] mr-[18.5px] lg:mr-0">
                                <img className="buttons h-9"
                                     alt="Ocean+ logo"
                                     src="https://raw.githubusercontent.com/Areg472/ocean-plus-react/refs/heads/main/src/pictures/ocean%20transparent%20cropped.png"
                                />
                            </button>
                        </a>
                    </div>
                    <div className="column middle">
                        <a target="_blank" href="https://uptime.betterstack.com">
                            <button className="buttons middle">
                                <img className="uptimebutton"
                                     alt="Better Stack Website Monitoring"
                                     src="https://uptime.betterstack.com/assets/static_assets/badges/blue.png"/>
                            </button>
                        </a>
                    </div>
                    <div className="column">
                        <a target="_blank" href="https://www.youtube.com/@RosieBrosEntertainment">
                            <button className="buttons right">© Ocean Blue Studios, 2024</button>
                        </a>
                    </div>
                </div>
            </>
    )
}