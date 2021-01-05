import React from "react";
import { Paper, Typography } from "@material-ui/core";
import YouTubeIcon from "@material-ui/icons/YouTube";

const VideoDetail = ({ video }) => {
  console.log(video);

  if (!video)
    return (
      <div
        style={{
          width: "40%",
          height: "250px",
          position: "relative",
          left: "55%",

          top: "35%",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            margin: "auto",
            fontFamily: "monospace",
            fontWeight: "bold",
            fontSize: "35px",
          }}
        >
          Search Youtube{" "}
          <YouTubeIcon style={{ fontSize: "100px", color: "red" }} />
        </h1>
      </div>
    );

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  return (
    <>
      <Paper elevation={6} style={{ height: "60%" }}>
        <iframe
          src={videoSrc}
          frameborder="0"
          height="100%"
          width="100%"
          title="Video Player"
          allowFullScreen
        />
      </Paper>
      <Paper style={{ padding: "15px" }}>
        <Typography variant="h4"> {`${video.snippet.title}`}</Typography>
        <Typography variant="subtitle1">
          {video.snippet.channelTitle}{" "}
        </Typography>
        <Typography variant="subtitle2">{video.snippet.description}</Typography>
      </Paper>
    </>
  );
};

export default VideoDetail;
