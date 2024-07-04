// 약관 동의 체크박스
export default function CheckBox({ isChecked }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill=""
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="12" r="12" fill={isChecked ? "#6B71FF" : "#737373"} />
      <path
        d="M16.455 7.45498C16.6663 7.25381 16.9475 7.1426 17.2392 7.14481C17.531 7.14702 17.8104 7.26247 18.0187 7.46681C18.2269 7.67115 18.3476 7.9484 18.3553 8.24004C18.363 8.53169 18.2571 8.81492 18.06 9.02998L12.075 16.515C11.9721 16.6258 11.8479 16.7148 11.7098 16.7765C11.5717 16.8383 11.4226 16.8715 11.2714 16.8743C11.1201 16.8771 10.9699 16.8494 10.8296 16.7928C10.6894 16.7362 10.5619 16.6519 10.455 16.545L6.48599 12.576C6.37546 12.473 6.28681 12.3488 6.22532 12.2108C6.16383 12.0728 6.13077 11.9238 6.1281 11.7728C6.12544 11.6217 6.15323 11.4717 6.20981 11.3316C6.26639 11.1915 6.35061 11.0643 6.45743 10.9574C6.56426 10.8506 6.69151 10.7664 6.8316 10.7098C6.97168 10.6532 7.12172 10.6254 7.27278 10.6281C7.42383 10.6308 7.5728 10.6638 7.7108 10.7253C7.8488 10.7868 7.973 10.8754 8.07599 10.986L11.217 14.1255L16.4265 7.48798L16.455 7.45498Z"
        fill={isChecked ? "white" : "#B5B5B5"}
      />
    </svg>
  );
}
