import axios from "axios";
import { useEffect, useState } from "react";
import Comment from "./comment";

function Comments({ videoId }) {
  const [commentsArr, setCommentsArr] = useState([]);

  useEffect(() => {
    if (!videoId) return;

    axios
      .get("https://mocki.io/v1/da95a9b0-14c5-45a2-9bd6-0b1f62279c9b")
      .then((response) => {
        const filtered = response.data.comments.filter(
          (comment) => comment.postId === Number(videoId)
        );
        setCommentsArr(filtered);
      })
      .catch((error) => {
        console.error("There is an error!", error);
      });
  }, [videoId]);

  return (
    <>
      <h5 className="text-center text-success mt-3">Comments</h5>
      <ul className="list-unstyled row px-3">
        {commentsArr.map((comment, index) => (
          <Comment comment={comment} key={index} />
        ))}
      </ul>
    </>
  );
}

export default Comments;
