import React from "react";
import ReactPlayer from "react-player";

function HigherText(props) {
  return <div dangerouslySetInnerHTML={props.html} />;
}

const ContentOnBox = () => {
  const url ="https://www.youtube.com/watch?v=ysz5S6PUM-U";
  const htmlData = "<p>This is some <strong>formatted</strong> text.</p>";
  const higherText = { __html: htmlData };

  return (
    <>
      <div className="video">
        <h1>My Video Player</h1>
        <ReactPlayer
          url={url}
          controls={true}
          width="100%"
        />
      </div>
      <div className="description mt-10">
        <h1>Description</h1>
        <HigherText html={higherText} />
      </div>
    </>
  );
};

export default ContentOnBox;
