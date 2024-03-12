import React from "react";
import TweetEditorActions from "./TweetEditorActions"
import Button from "./Button";

export default function TweetEditorButtons (){
    return (
        <div className="tweet-editor-buttons">
            <TweetEditorActions />
            <Button />
        </div>
    )
}