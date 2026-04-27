export function Diffculty({ diffculty, setDiffculty, shift, setShift }) {
  function removeComponent() {
    setShift(true);
  }

  function diffcultyValue(e) {
    const btnValue = e.target.value;
    setDiffculty(btnValue);
    removeComponent()
  }

  return (
    <>
      <div className="diffculty-container">
        <div className="diffculty-container-top-half">
          <h2>Choose a Diffculty!</h2>
        </div>
        <div className="diffculty-container-bottom-half  ">
          <button className="easy" value="easy" onClick={diffcultyValue}>
            Easy
          </button>
          <button className="medium" value="medium" onClick={diffcultyValue}>
            Medium
          </button>
          <button className="hard" value="hard" onClick={diffcultyValue}>
            Hard
          </button>
        </div>
      </div>
    </>
  );
}
