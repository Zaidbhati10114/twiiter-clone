import React from "react";
import "./Widgets.css";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed
} from "react-twitter-embed";
import SearchIcon from "@material-ui/icons/Search";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets__search-icon" />
        <input placeholder="Search Twiiter" type="text" />
      </div>

      <div className="widgets__container">
        <h2>Whats Happening</h2>
        <TwitterTweetEmbed tweetId={"858551177860055040"} />
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="cleverqazi"
          options={{ height: 400 }}
        />

        <TwitterShareButton
          url={"https://www.facebook.com/Zaid-bhati-140081026719700"}
          options={{ text: "react is Awesome", via: "@zaid" }}
        />
      </div>
    </div>
  );
}

export default Widgets;
