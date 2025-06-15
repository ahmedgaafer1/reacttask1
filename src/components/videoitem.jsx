import Comments from "./comments";

function Videoitem({ data }) {
  if (!data) return null;

  return (
    <div className="col-md-6 col-lg-4 mb-5">
      <div className="card shadow-sm h-100 border-0">
        <img
          src={data.thumbnailUrl}
          className="card-img-top"
          alt={data.title}
          style={{ height: "200px", objectFit: "cover" }}
        />

        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{data.title}</h5>
          <p className="card-text text-muted" style={{ fontSize: "0.9rem" }}>
            {data.description.slice(0, 100)}...
          </p>
          <p className="text-muted mb-2" style={{ fontSize: "0.8rem" }}>
             {data.views} &nbsp; • &nbsp; {data.uploadTime}
          </p>

          <video
            controls
            width="100%"
            className="rounded shadow-sm mb-3"
            style={{ maxHeight: "200px" }}
            src={data.videoUrl}
          ></video>
        </div>

        <div className="card-footer bg-white border-0 pt-0">
          <div className="px-3 pb-3">
            <Comments videoId={data.id} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Videoitem;
