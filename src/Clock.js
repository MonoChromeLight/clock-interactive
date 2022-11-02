import Arrow from "./Arrow";

const Clock = () => {
  return (
    <div className="clock-container">
      <div className="clock">
        <Arrow arrowType="sec" />
        <Arrow arrowType="min" />
        <Arrow arrowType="hour" />
      </div>
    </div>
  );
};

export default Clock;
