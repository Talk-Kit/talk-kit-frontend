// 약관 동의 체크박스
export const CheckBox = ({ isChecked }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="-5 0 70 60"
      fill=""
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        stroke={isChecked ? "#6B71FF" : "#B5B5B5"}
        strokeWidth="5"
        cx="30"
        cy="30"
        r="30"
        fill={isChecked ? "#6B71FF" : "#FFF"}
      />
      <path
        d="M40.8177 18.7755C41.3459 18.2726 42.0489 17.9946 42.7782 18.0001C43.5076 18.0056 44.2062 18.2942 44.7268 18.8051C45.2474 19.3159 45.5492 20.0091 45.5685 20.7382C45.5877 21.4673 45.323 22.1754 44.8302 22.713L29.8677 41.4255C29.6104 41.7026 29.2998 41.925 28.9547 42.0794C28.6095 42.2338 28.2367 42.3169 27.8586 42.3239C27.4805 42.3309 27.1049 42.2616 26.7542 42.1201C26.4036 41.9787 26.085 41.7679 25.8177 41.5005L15.8952 31.578C15.6188 31.3205 15.3972 31.01 15.2435 30.665C15.0898 30.32 15.0071 29.9476 15.0004 29.57C14.9938 29.1923 15.0632 28.8172 15.2047 28.467C15.3462 28.1168 15.5567 27.7987 15.8238 27.5316C16.0908 27.2645 16.409 27.054 16.7592 26.9126C17.1094 26.7711 17.4845 26.7016 17.8621 26.7083C18.2398 26.715 18.6122 26.7976 18.9572 26.9513C19.3022 27.1051 19.6127 27.3267 19.8702 27.603L27.7227 35.4518L40.7464 18.858L40.8177 18.7755Z"
        fill={isChecked ? "white" : "#B5B5B5"}
      />
    </svg>
  );
};

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
          strokeWidth="4"
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

// 회원가입 경고 아이콘
export const AlertIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M12 17C12.2833 17 12.5208 16.9042 12.7125 16.7125C12.9042 16.5208 13 16.2833 13 16C13 15.7167 12.9042 15.4792 12.7125 15.2875C12.5208 15.0958 12.2833 15 12 15C11.7167 15 11.4792 15.0958 11.2875 15.2875C11.0958 15.4792 11 15.7167 11 16C11 16.2833 11.0958 16.5208 11.2875 16.7125C11.4792 16.9042 11.7167 17 12 17ZM11 13H13V7H11V13ZM12 22C10.6167 22 9.31667 21.7375 8.1 21.2125C6.88333 20.6875 5.825 19.975 4.925 19.075C4.025 18.175 3.3125 17.1167 2.7875 15.9C2.2625 14.6833 2 13.3833 2 12C2 10.6167 2.2625 9.31667 2.7875 8.1C3.3125 6.88333 4.025 5.825 4.925 4.925C5.825 4.025 6.88333 3.3125 8.1 2.7875C9.31667 2.2625 10.6167 2 12 2C13.3833 2 14.6833 2.2625 15.9 2.7875C17.1167 3.3125 18.175 4.025 19.075 4.925C19.975 5.825 20.6875 6.88333 21.2125 8.1C21.7375 9.31667 22 10.6167 22 12C22 13.3833 21.7375 14.6833 21.2125 15.9C20.6875 17.1167 19.975 18.175 19.075 19.075C18.175 19.975 17.1167 20.6875 15.9 21.2125C14.6833 21.7375 13.3833 22 12 22Z"
        fill="#E61919"
      />
    </svg>
  );
};
