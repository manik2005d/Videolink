function getYouTubeVideoID(url) {
    let videoID = "";
    try {
        const parsedUrl = new URL(url);
        if (parsedUrl.hostname.includes("youtube.com")) {
            videoID = parsedUrl.searchParams.get("v");
        }
        else if (parsedUrl.hostname.includes("youtu.be")) {
            videoID = parsedUrl.pathname.substring(1);
        }
        if (videoID && videoID.includes("?")) {
            videoID = videoID.split("?")[0];
        }
    } catch (e) {
        console.error("Invalid URL", e);
    }

    return videoID;
}

module.exports = getYouTubeVideoID;
