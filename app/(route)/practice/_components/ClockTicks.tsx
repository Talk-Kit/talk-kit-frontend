export default function ClockTicks() {
  return (
    <>
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((el) => (
        <div
          key={el}
          style={{ transform: `rotate(${el * 30}deg)` }}
          className="tick-container"
        >
          <div className="tick" />
        </div>
      ))}
    </>
  );
}
