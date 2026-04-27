export function Card({ image, choice, setChoice }) {
  function selectChoice() {
    const val = image;
    setChoice((prev) => [...prev, val]);
  }

  return (
    <>
      <div className="card">
        <button value={image} onClick={selectChoice}>
          <img key={image} src={image}></img>
        </button>
      </div>
    </>
  );
}
