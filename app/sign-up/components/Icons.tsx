// 프로그레스바 동그라미
export const ProgressCircle = () => {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle id="Ellipse 6" cx="15" cy="15" r="15" fill="#6B71FF" />
    </svg>
  );
};

// 프로그레스바 바랑 동그라미
export const ProgressBarCircle = ({ isActive }) => {
  return (
    <svg
      width="79"
      height="30"
      viewBox="0 0 79 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Frame 196">
        <line
          id="Line 9"
          y1="15"
          x2="50"
          y2="15"
          stroke={isActive ? "#6B71FF" : "#DADADA"}
          stroke-width="4"
        />
        <circle
          id="Ellipse 8"
          cx="64"
          cy="15"
          r="15"
          fill={isActive ? "#6B71FF" : "#DADADA"}
        />
      </g>
    </svg>
  );
};
