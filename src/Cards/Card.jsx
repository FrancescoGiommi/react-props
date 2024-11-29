import { posts } from "../Posts/posts";

export default function Card() {
  return (
    <>
      <div>
        <div className="card text-start mt-5 " style={{ width: "500px" }}>
          <div>
            <img
              className="img-fluid rounded"
              style={{ width: "600px" }}
              src="public/img.png"
              alt="image"
            />
          </div>
          <div className="card-body">
            <h2 className="fs-4 fw-bold">Titolo del post</h2>
            <p className="card-text">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Architecto, dolor animi. Corporis illo asperiores mollitia, qui
              tempora earum esse aspernatur dolorem quod id, numquam, quaerat
              cum cupiditate fugit possimus expedita.
            </p>
            <div>
              <button
                className="m-2 p-2 btn btn-warning"
                style={{ color: "white" }}
              >
                Leggi di più
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
