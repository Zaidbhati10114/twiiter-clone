import React, { useState } from "react";
import "./TweetBox.css";
import { Avatar, Button } from "@material-ui/core";
import db from "./firebase";

function TweetBox() {
  const [tweetmesssage, settweetMessage] = useState("");
  const [tweetImage, settweetImage] = useState("");

  const sendTweet = e => {
    e.preventDefault(); //prevent the the page to refresh

    // Post the tweet to db(Firebase)
    db.collection("posts").add({
      displayName: "Zaid",
      username: "@Zaidbhati",
      verified: true,
      text: tweetmesssage,
      image: tweetImage,
      avatar:
        "https://avatars0.githubusercontent.com/u/59171704?s=460&u=b3b07fc55752dedff3085f60d20170e00cfbe2e9&v=4"
    });

    settweetImage("");
    settweetMessage("");
  };

  return (
    <div className="tweet__box">
      <form>
        <div className="tweet__input">
          <Avatar />
          <input
            onChange={e => settweetMessage(e.target.value)}
            value={tweetmesssage}
            placeholder="What's Happening"
            type="text"
          />
        </div>
        <input
          value={tweetImage}
          onChange={e => settweetImage(e.target.value)}
          className="tweet__box-image"
          placeholder="Optional:Enter Image Url"
          type="text"
        />
        <Button onClick={sendTweet} type="submit" className="tweet__box-button">
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;
