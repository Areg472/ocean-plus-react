import fetch from 'node-fetch';

export default async function handler(req, res) {
    const logData = {
        message: "Request log",
        level: "info",
        context: {
            method: req.method,
            path: req.url,
            headers: req.headers,
            ip: req.headers['x-forwarded-for'] || req.connection.remoteAddress,
            // Add any other details you want to capture
        },
    };

    await fetch("https://in.logs.betterstack.com", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer WFz4M4zTHUVzWUiPftPeWHTe`
        },
        body: JSON.stringify(logData)
    });

    res.status(200).json({ message: "Log sent to Logtail" });
}
