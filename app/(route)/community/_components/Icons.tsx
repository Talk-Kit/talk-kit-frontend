export const SearchIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.6 21L13.3 14.7C12.8 15.1 12.225 15.4167 11.575 15.65C10.925 15.8833 10.2333 16 9.5 16C7.68333 16 6.14583 15.3708 4.8875 14.1125C3.62917 12.8542 3 11.3167 3 9.5C3 7.68333 3.62917 6.14583 4.8875 4.8875C6.14583 3.62917 7.68333 3 9.5 3C11.3167 3 12.8542 3.62917 14.1125 4.8875C15.3708 6.14583 16 7.68333 16 9.5C16 10.2333 15.8833 10.925 15.65 11.575C15.4167 12.225 15.1 12.8 14.7 13.3L21 19.6L19.6 21ZM9.5 14C10.75 14 11.8125 13.5625 12.6875 12.6875C13.5625 11.8125 14 10.75 14 9.5C14 8.25 13.5625 7.1875 12.6875 6.3125C11.8125 5.4375 10.75 5 9.5 5C8.25 5 7.1875 5.4375 6.3125 6.3125C5.4375 7.1875 5 8.25 5 9.5C5 10.75 5.4375 11.8125 6.3125 12.6875C7.1875 13.5625 8.25 14 9.5 14Z"
        fill="#737373"
      />
    </svg>
  );
};

export const LikesIcon = ({ isLiked }: { isLiked: boolean }) => {
  return (
    <svg
      width="14"
      height="15"
      viewBox="0 0 14 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1225_697)">
        <path
          d="M7 14.5C10.866 14.5 14 11.366 14 7.5C14 3.63401 10.866 0.5 7 0.5C3.13401 0.5 0 3.63401 0 7.5C0 11.366 3.13401 14.5 7 14.5Z"
          fill={isLiked ? "#6B71FF" : "#737373"}
        />
        <path
          d="M9.18784 10.7812H5.54198V6.04168L8.09409 3.48959L8.54979 3.94532C8.59232 3.98785 8.62727 4.04558 8.65462 4.11849C8.68196 4.19141 8.69565 4.26129 8.69565 4.32813V4.45573L8.2946 6.04168H10.2816C10.476 6.04168 10.6462 6.11457 10.792 6.26043C10.9378 6.40625 11.0107 6.57639 11.0107 6.77082V7.5C11.0107 7.54252 11.0062 7.58811 10.9971 7.63672C10.9879 7.68532 10.9743 7.73091 10.956 7.77344L9.86229 10.3438C9.8076 10.4653 9.71647 10.5686 9.58885 10.6536C9.46128 10.7387 9.32758 10.7812 9.18784 10.7812ZM4.81284 6.04168V10.7812H3.35449V6.04168H4.81284Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_1225_697">
          <rect
            width="14"
            height="14"
            fill="white"
            transform="translate(0 0.5)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export const CommentsIcon = () => {
  return (
    <svg
      className="shrink-0"
      width="14"
      height="15"
      viewBox="0 0 14 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1001_2882)">
        <path
          d="M7 14.5C10.866 14.5 14 11.366 14 7.5C14 3.63401 10.866 0.5 7 0.5C3.13401 0.5 0 3.63401 0 7.5C0 11.366 3.13401 14.5 7 14.5Z"
          fill="#737373"
        />
        <path
          d="M2.33301 11V5.04999C2.33301 4.84145 2.4244 4.66293 2.60717 4.51442C2.78995 4.36591 3.00967 4.29166 3.26634 4.29166H10.733C10.9897 4.29166 11.2094 4.36591 11.3922 4.51442C11.575 4.66293 11.6663 4.84145 11.6663 5.04999V9.59999C11.6663 9.80854 11.575 9.98706 11.3922 10.1356C11.2094 10.2841 10.9897 10.3583 10.733 10.3583H4.19967H3.26634L2.33301 11ZM4.19967 8.84166H7.93301V8.08333H4.19967V8.84166ZM4.19967 7.70416H9.79967V6.94583H4.19967V7.70416ZM4.19967 6.56666H9.79967V5.80833H4.19967V6.56666Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_1001_2882">
          <rect
            width="14"
            height="14"
            fill="white"
            transform="translate(0 0.5)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export const ReplyIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15 19L13.6 17.575L17.175 14H7.5C6.25 14 5.1875 13.5625 4.3125 12.6875C3.4375 11.8125 3 10.75 3 9.5C3 8.25 3.4375 7.1875 4.3125 6.3125C5.1875 5.4375 6.25 5 7.5 5H8V7H7.5C6.8 7 6.20833 7.24167 5.725 7.725C5.24167 8.20833 5 8.8 5 9.5C5 10.2 5.24167 10.7917 5.725 11.275C6.20833 11.7583 6.8 12 7.5 12H17.175L13.6 8.4L15 7L21 13L15 19Z"
        fill="#737373"
      />
    </svg>
  );
};

export const UploadIcon = () => {
  return (
    <svg
      width="96"
      height="96"
      viewBox="0 0 96 96"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M44 76H52V59.3L58.4 65.7L64 60L48 44L32 60L37.7 65.6L44 59.3V76ZM24 88C21.8 88 19.9167 87.2167 18.35 85.65C16.7833 84.0833 16 82.2 16 80V16C16 13.8 16.7833 11.9167 18.35 10.35C19.9167 8.78333 21.8 8 24 8H56L80 32V80C80 82.2 79.2167 84.0833 77.65 85.65C76.0833 87.2167 74.2 88 72 88H24ZM52 36H72L52 16V36Z"
        fill="#B5B5B5"
      />
    </svg>
  );
};

export const RemoveIcon = () => {
  return (
    <svg
      width="10"
      height="10"
      viewBox="0 0 10 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.5 2.5L2.5 7.5M2.5 2.5L7.5 7.5"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const PrivateIcon = () => {
  return (
    <svg
      className="shrink-0"
      width="14"
      height="17"
      viewBox="0 0 14 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_992_1576)">
        <path
          d="M4.5 5V6.5H9.5V5C9.5 3.61875 8.38125 2.5 7 2.5C5.61875 2.5 4.5 3.61875 4.5 5ZM2.5 6.5V5C2.5 2.51562 4.51562 0.5 7 0.5C9.48438 0.5 11.5 2.51562 11.5 5V6.5H12C13.1031 6.5 14 7.39687 14 8.5V14.5C14 15.6031 13.1031 16.5 12 16.5H2C0.896875 16.5 0 15.6031 0 14.5V8.5C0 7.39687 0.896875 6.5 2 6.5H2.5Z"
          fill="#737373"
        />
      </g>
      <defs>
        <clipPath id="clip0_992_1576">
          <rect
            width="14"
            height="16"
            fill="white"
            transform="translate(0 0.5)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export const DialogPrivateIcon = () => {
  return (
    <svg
      width="72"
      height="80"
      viewBox="0 0 72 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_985_2833)">
        <path
          d="M23.1429 22.5V30H48.8571V22.5C48.8571 15.5938 43.1036 10 36 10C28.8964 10 23.1429 15.5938 23.1429 22.5ZM12.8571 30V22.5C12.8571 10.0781 23.2232 0 36 0C48.7768 0 59.1429 10.0781 59.1429 22.5V30H61.7143C67.3875 30 72 34.4844 72 40V70C72 75.5156 67.3875 80 61.7143 80H10.2857C4.6125 80 0 75.5156 0 70V40C0 34.4844 4.6125 30 10.2857 30H12.8571Z"
          fill="#6B71FF"
        />
      </g>
      <defs>
        <clipPath id="clip0_985_2833">
          <rect width="72" height="80" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};