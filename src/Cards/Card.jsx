/* Default image */
import imageDefault from "../../public/img/img.png";

/* Card export */
export default function Card({ title, image, description, tags, published }) {
  const imagePath = image || imageDefault;
  return (
    <>
      <div>
        <div
          className="card text-start m-auto mt-5 "
          style={{ width: "500px" }}
        >
          <div>
            <img
              className="img-fluid rounded"
              style={{ width: "600px" }}
              src={imagePath}
              alt="image"
            />
          </div>
          <div className="card-body">
            <h2 className="fs-4 fw-bold">{title}</h2>
            <p className="card-text">{description}</p>
            <div>{tags}</div>
            <div>{published}</div>
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
