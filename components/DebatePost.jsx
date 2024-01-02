import React from "react";
import PostComments from "./PostComments";
import PostContent from "./PostContent";
import postData from "../postData";
import { nanoid } from "nanoid";

export default function DebatePost() {

  const [comments, setComments] = React.useState(postData.comments);
  const [formData, setFormData] = React.useState({
    id: nanoid(),
    userName: "",
    isAnonymous: false,
    commentText: "",
  });

  function handleChange(event) {
    setFormData((currentData) => ({
      ...currentData,
      [event.target.name]:
        event.target.type === "checkbox"
          ? event.target.checked
          : event.target.value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    postData.comments.push(formData);
    setComments([...postData.comments]);

    console.log(postData.comments);
  }

  return (
    <div className="post-container">
      <PostContent data={{ ...postData }} />
      <PostComments data={comments} />
      <form onSubmit={handleSubmit}>
        <input
          className="text-input"
          name="userName"
          type="text"
          placeholder="Enter username."
          onChange={handleChange}
        />
        <textarea
          name="commentText"
          placeholder="What do you think?"
          onChange={handleChange}
        />
        <label>
          <input
            className="checkbox"
            name="isAnonymous"
            type="checkbox"
            onChange={handleChange}
          />
          Post anonymously?
        </label>
        <button>Send</button>
      </form>
    </div>
  );
}
