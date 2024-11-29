import Card from "../Cards/Card";

/* Main export */
export default function Main() {
  return (
    <>
      <main>
        <div className="container d-flex gap-3 flex-wrap justify-content-center ">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </main>
    </>
  );
}
