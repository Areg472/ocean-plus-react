import "./footer.css";

export function Footer() {
  return (
    <>
      <div className="row lg:space-x-40">
        <div className="column left">
          <a target="_blank" href="https://link.oceanbluestream.com/discord">
            <button className="buttons2 mb-1.5">Discord</button>
          </a>
          <a target="_blank" href="https://link.oceanbluestream.com/status">
            <button className="buttons2">Status</button>
          </a>
        </div>
        <div className="column middle ml-10 lg:ml-0">
          <a target="_blank" href="https://uptime.betterstack.com">
            <button className="buttons middle">
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
            <button className="buttons right ml-6 lg:ml-0">
              © Ocean Blue Studios, 2024
            </button>
          </a>
        </div>
      </div>
    </>
  );
}
