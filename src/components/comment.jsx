function Comment({ comment }) {
  return (
    <li className="col-md-6 mb-4 text-start d-flex align-items-start gap-3 m-auto text-center">
      <img
        src={`https://i.pravatar.cc/60?u=${comment.user?.id || "unknown"}`}
        alt={comment.user?.username || "user"}
        className="rounded-circle"
        width="60"
        height="60"
      />

      <div className="bg-light p-3 rounded w-100 shadow-sm">
        <h5 className="mb-1">{comment.user?.fullName || "Anonymous"}</h5>
        <p className="mb-2">{comment.body}</p>
        <small className="text-muted"> Likes: {comment.likes ?? 0}</small>
      </div>
    </li>
  );
}

export default Comment;
