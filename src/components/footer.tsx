import "./footer.css";

export function Footer() {
  return (
    <>
      <div className="row lg:space-x-40">
        <div className="column left">
          <a target="_blank" href="https://link.oceanbluestream.com/discord">
            <button className="buttons2 mb-1.5 cursor-pointer">Discord</button>
          </a>
          <a target="_blank" href="https://link.oceanbluestream.com/status">
            <button className="buttons2">Status</button>
          </a>
        </div>
        <div className="column">
          <a target="_blank" href="https://uptime.betterstack.com">
            <button className="buttons middle cursor-pointer">
              <img
                className="uptimebutton"
                alt="Better Stack Website Monitoring"
                src="https://uptime.betterstack.com/assets/static_assets/badges/blue.png"
              />
            </button>
          </a>
        </div>
        <div className="column">
          <a
            target="_blank"
            href="https://link.oceanbluestream.com/oceanbluepictures"
          >
            <button className="buttons ml-6 cursor-pointer lg:ml-0">
              © Ocean Blue Studios, 2024
            </button>
          </a>
        </div>
      </div>
    </>
  );
}
