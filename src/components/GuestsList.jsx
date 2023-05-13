export default function GuestsList() {
    let child
    let adult
    let setAdult
    let setChild

  function incrementAdult() {
    if (child < 10 - adult) {
      setAdult(adult + 1);
    }
  }

  function decrementAdult() {
    setAdult(adult - 1);
  }

  function incrementChild() {
    if (adult < 10 - child) {
      setChild(child + 1);
    }
  }

  function decrementChild() {
    setChild(child - 1);
  }
  return (
    <>
      <div>
        <h6>Adults</h6>
        <h6>Age 13 or above</h6>
        <div>
          <button onClick={decrementAdult} disabled={adult <= 0}>
            -
          </button>
          <span>{adult}</span>
          <button onClick={incrementAdult} disabled={adult >= 10}>
            +
          </button>
        </div>
      </div>
      <div>
        <h6>Children</h6>
        <h6>Age 2 - 12</h6>
        <div>
          <button onClick={decrementChild} disabled={child <= 0}>
            -
          </button>
          <span>{child}</span>
          <button onClick={incrementChild} disabled={child >= 10}>
            +
          </button>
        </div>
      </div>
    </>
  );
}