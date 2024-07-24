// 아래 화살표
export const DownLightArrow = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M18 9L12 15L6 9" stroke="#1A1A1A" />
    </svg>
  );
};

// 플러스 아이콘
export const PlusIcon = () => {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <rect width="30" height="30" fill="url(#pattern0_433_1782)" />
      <defs>
        <pattern
          id="pattern0_433_1782"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref="#image0_433_1782" transform="scale(0.0104167)" />
        </pattern>
        <image
          id="image0_433_1782"
          width="96"
          height="96"
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAAAXNSR0IArs4c6QAAAfNJREFUeF7tmjFuAgEQA+/emyovoeK9oLQpsKzYMhcm7S5emDlLROI8+JsSOKfXOX4gYPwQIAABYwLj8zQAAWMC4/M0AAFjAuPzNAABYwLj8zQAAWMC4/M0AAFjAuPzNAABYwLj8zQAAWMC4/M0AAEega/vx+PVK+6381IP1aXe7A94BHgPbHwbAXGkXiACPF7xbQTEkXqBCPB4xbcREEfqBSLA4xXfRkAcqReIAI9XfBsBcaReIAI8XvFtBMSReoEI8HjFtxEQR+oFIsDjFd9GQBypF4gAj1d8GwFxpF4gAjxe8W0ExJF6gQjweMW3ERBH6gUiQPBSgDzc77ed/t1R/HdBCPAeGgR4vA4aYAJLryMgTdTMQ4AJLL2OgDRRMw8BJrD0+tsLSH/g33nqa24aUPvzxL+Gtt8wAtqE//ifNg0oC6IBZcAqHgGKUHmOgDJgFY8ARag8R0AZsIpHgCJUniOgDFjFI0ARKs8RUAas4hGgCJXnCCgDVvEIUITKcwSUAat4BChC5TkCyoBVPAIUofIcAWXAKh4BilB5joAyYBWPAEWoPEdAGfCnxV/ud0H/TRACxkYRgIAxgfF5GoCAMYHxeRqAgDGB8XkagIAxgfF5GoCAMYHxeRqAgDGB8XkagIAxgfF5GoCAMYHxeRowFvAE8l7gYUYIzS4AAAAASUVORK5CYII="
        />
      </defs>
    </svg>
  );
};

// 마이너스 아이콘
export const MinusIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
    >
      <path d="M6.25 16.25V13.75H23.75V16.25H6.25Z" fill="#6B71FF" />
    </svg>
  );
};

// 다이얼로그 체크 아이콘
export const DialogCheckIcon = () => {
  return (
    <svg
      width="60"
      height="60"
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="30" cy="30" r="30" fill="#6B71FF" />
      <path
        d="M40.8177 18.7755C41.3459 18.2726 42.0489 17.9946 42.7782 18.0001C43.5076 18.0056 44.2062 18.2942 44.7268 18.8051C45.2474 19.3159 45.5492 20.0091 45.5685 20.7382C45.5877 21.4673 45.323 22.1754 44.8302 22.713L29.8677 41.4255C29.6104 41.7026 29.2998 41.925 28.9547 42.0794C28.6095 42.2338 28.2367 42.3169 27.8586 42.3239C27.4805 42.3309 27.1049 42.2616 26.7542 42.1201C26.4036 41.9787 26.085 41.7679 25.8177 41.5005L15.8952 31.578C15.6188 31.3205 15.3972 31.01 15.2435 30.665C15.0898 30.32 15.0071 29.9476 15.0004 29.57C14.9938 29.1923 15.0632 28.8172 15.2047 28.467C15.3462 28.1168 15.5567 27.7987 15.8238 27.5316C16.0908 27.2645 16.409 27.054 16.7592 26.9126C17.1094 26.7711 17.4845 26.7016 17.8621 26.7083C18.2398 26.715 18.6122 26.7976 18.9572 26.9513C19.3022 27.1051 19.6127 27.3267 19.8702 27.603L27.7227 35.4518L40.7464 18.858L40.8177 18.7755Z"
        fill="white"
      />
    </svg>
  );
};

// 다이얼로그 경고 아이콘
export const DialogWarnIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="80"
      height="80"
      viewBox="0 0 80 80"
      fill="none"
    >
      <path
        d="M73.9999 56.7265L46.6718 11.1659C45.9889 10.0497 45.014 9.12419 43.8437 8.48113C42.6734 7.83806 41.3484 7.49976 39.9999 7.49976C38.6515 7.49976 37.3265 7.83806 36.1562 8.48113C34.9859 9.12419 34.011 10.0497 33.3281 11.1659L5.99993 56.7265C5.34286 57.8061 4.99658 59.034 4.99658 60.2844C4.99658 61.5348 5.34286 62.7628 5.99993 63.8424C6.67409 64.9654 7.64734 65.8959 8.81981 66.5386C9.99229 67.1812 11.3218 67.5128 12.6718 67.4994H67.3281C68.6771 67.5118 70.0052 67.1796 71.1765 66.537C72.3478 65.8944 73.3201 64.9645 73.9937 63.8424C74.6517 62.7633 74.9991 61.5357 75.0002 60.2852C75.0013 59.0348 74.6561 57.8066 73.9999 56.7265ZM37.4999 31.4997C37.4999 30.8632 37.7633 30.2528 38.2322 29.8027C38.701 29.3526 39.3369 29.0997 39.9999 29.0997C40.663 29.0997 41.2989 29.3526 41.7677 29.8027C42.2365 30.2528 42.4999 30.8632 42.4999 31.4997V43.4996C42.4999 44.1361 42.2365 44.7466 41.7677 45.1966C41.2989 45.6467 40.663 45.8996 39.9999 45.8996C39.3369 45.8996 38.701 45.6467 38.2322 45.1966C37.7633 44.7466 37.4999 44.1361 37.4999 43.4996V31.4997ZM39.9999 57.8995C39.2583 57.8995 38.5332 57.6883 37.9165 57.2928C37.2999 56.8972 36.8192 56.3349 36.5354 55.6771C36.2516 55.0193 36.1773 54.2955 36.322 53.5972C36.4667 52.8988 36.8238 52.2574 37.3483 51.7539C37.8727 51.2505 38.5409 50.9076 39.2683 50.7687C39.9958 50.6298 40.7498 50.7011 41.435 50.9736C42.1202 51.246 42.7059 51.7074 43.1179 52.2995C43.53 52.8915 43.7499 53.5875 43.7499 54.2995C43.7499 55.2543 43.3548 56.1699 42.6516 56.8451C41.9483 57.5202 40.9945 57.8995 39.9999 57.8995Z"
        fill="#E61919"
      />
    </svg>
  );
};

// sm:탑바 로그인
export const SmSignInIcon = () => {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22.5 17.5V13.75H18.75V11.25H22.5V7.5H25V11.25H28.75V13.75H25V17.5H22.5ZM11.25 15C9.875 15 8.69792 14.5104 7.71875 13.5312C6.73958 12.5521 6.25 11.375 6.25 10C6.25 8.625 6.73958 7.44792 7.71875 6.46875C8.69792 5.48958 9.875 5 11.25 5C12.625 5 13.8021 5.48958 14.7812 6.46875C15.7604 7.44792 16.25 8.625 16.25 10C16.25 11.375 15.7604 12.5521 14.7812 13.5312C13.8021 14.5104 12.625 15 11.25 15ZM1.25 25V21.5C1.25 20.7917 1.43229 20.1406 1.79688 19.5469C2.16146 18.9531 2.64583 18.5 3.25 18.1875C4.54167 17.5417 5.85417 17.0573 7.1875 16.7344C8.52083 16.4115 9.875 16.25 11.25 16.25C12.625 16.25 13.9792 16.4115 15.3125 16.7344C16.6458 17.0573 17.9583 17.5417 19.25 18.1875C19.8542 18.5 20.3385 18.9531 20.7031 19.5469C21.0677 20.1406 21.25 20.7917 21.25 21.5V25H1.25ZM3.75 22.5H18.75V21.5C18.75 21.2708 18.6927 21.0625 18.5781 20.875C18.4635 20.6875 18.3125 20.5417 18.125 20.4375C17 19.875 15.8646 19.4531 14.7188 19.1719C13.5729 18.8906 12.4167 18.75 11.25 18.75C10.0833 18.75 8.92708 18.8906 7.78125 19.1719C6.63542 19.4531 5.5 19.875 4.375 20.4375C4.1875 20.5417 4.03646 20.6875 3.92188 20.875C3.80729 21.0625 3.75 21.2708 3.75 21.5V22.5ZM11.25 12.5C11.9375 12.5 12.526 12.2552 13.0156 11.7656C13.5052 11.276 13.75 10.6875 13.75 10C13.75 9.3125 13.5052 8.72396 13.0156 8.23438C12.526 7.74479 11.9375 7.5 11.25 7.5C10.5625 7.5 9.97396 7.74479 9.48438 8.23438C8.99479 8.72396 8.75 9.3125 8.75 10C8.75 10.6875 8.99479 11.276 9.48438 11.7656C9.97396 12.2552 10.5625 12.5 11.25 12.5Z"
        fill="#737373"
      />
    </svg>
  );
};

// sm:탑바 메뉴
export const SmMenuIcon = () => {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.75 22.5V20H26.25V22.5H3.75ZM3.75 16.25V13.75H26.25V16.25H3.75ZM3.75 10V7.5H26.25V10H3.75Z"
        fill="#737373"
      />
    </svg>
  );
};

// 알림 종
export const BellIcon = () => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.6665 8.33333C1.6665 6.94444 1.97553 5.67014 2.59359 4.51042C3.21164 3.35069 4.0415 2.38889 5.08317 1.625L6.06234 2.95833C5.229 3.56944 4.56581 4.34028 4.07275 5.27083C3.5797 6.20139 3.33317 7.22222 3.33317 8.33333H1.6665ZM16.6665 8.33333C16.6665 7.22222 16.42 6.20139 15.9269 5.27083C15.4339 4.34028 14.7707 3.56944 13.9373 2.95833L14.9165 1.625C15.9582 2.38889 16.788 3.35069 17.4061 4.51042C18.0241 5.67014 18.3332 6.94444 18.3332 8.33333H16.6665ZM3.33317 15.8333V14.1667H4.99984V8.33333C4.99984 7.18056 5.34706 6.15625 6.0415 5.26042C6.73595 4.36458 7.63873 3.77778 8.74984 3.5V2.91667C8.74984 2.56944 8.87136 2.27431 9.11442 2.03125C9.35748 1.78819 9.65261 1.66667 9.99984 1.66667C10.3471 1.66667 10.6422 1.78819 10.8853 2.03125C11.1283 2.27431 11.2498 2.56944 11.2498 2.91667V3.5C12.3609 3.77778 13.2637 4.36458 13.9582 5.26042C14.6526 6.15625 14.9998 7.18056 14.9998 8.33333V14.1667H16.6665V15.8333H3.33317ZM9.99984 18.3333C9.5415 18.3333 9.14914 18.1701 8.82275 17.8438C8.49636 17.5174 8.33317 17.125 8.33317 16.6667H11.6665C11.6665 17.125 11.5033 17.5174 11.1769 17.8438C10.8505 18.1701 10.4582 18.3333 9.99984 18.3333ZM6.6665 14.1667H13.3332V8.33333C13.3332 7.41667 13.0068 6.63194 12.354 5.97917C11.7012 5.32639 10.9165 5 9.99984 5C9.08317 5 8.29845 5.32639 7.64567 5.97917C6.99289 6.63194 6.6665 7.41667 6.6665 8.33333V14.1667Z"
        fill="#737373"
      />
    </svg>
  );
};

// 좋아요 수
export const LikesIcon = () => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <rect width="18" height="18" fill="url(#pattern0_451_4101)" />
      <defs>
        <pattern
          id="pattern0_451_4101"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref="#image0_451_4101" transform="scale(0.0104167)" />
        </pattern>
        <image
          id="image0_451_4101"
          width="96"
          height="96"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
};

// 댓글 수
export const CommentsIcon = () => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <rect width="18" height="18" fill="url(#pattern0_451_4104)" />
      <defs>
        <pattern
          id="pattern0_451_4104"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref="#image0_451_4104" transform="scale(0.0104167)" />
        </pattern>
        <image
          id="image0_451_4104"
          width="96"
          height="96"
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAAAXNSR0IArs4c6QAAAyxJREFUeF7t3U1S4zAUBOCn4SJwk+EkwG6KbBIuAJwgWRBqdnATuAm+CCWwKX4rSctpPUvG7apZTDlPP/1ZtglTmmA6iiYQivauzk0AhS8CAQigcAKFu9cKEEDhBAp3rxUwNoB/83j4x+wkBPtr1v2Z+tGYWWPRmmez6/+r0P49+ei1As7n8TIEu0pufXofbGK0+9tVuE6dejLAbBEfdMWnxmqP62U4Tvl0EsD5RTwN0e5SGtRn3hKI0a5SVgIEaO/5B8GeFGzvBJoQ7exmFR53VUIA3fd7B/9RkLIKIMBsHu8s2On+w5h0JXwWYIBFbG8/h5OOcf/JN+tlOKJuQbPF60LacayXry+mEz7YfGB4bAe/3YbNRwDkFSIAMkC2XABsgmS9AMgA2XIBsAmS9QIgA2TLqwdAA2QD8K5HP+eg+aF699dQNEDvANn2UYBofqheAEAIBSgA9hIXgHOCZPNaAWSAbLkA2ATJegGQAbLlowdgA6i9vvq3oNoDZMcnADZBsl4AZIBsefUAaIBsAN71o38IC2D3P1rQd0H6KsL7JsK1r1sQlx9dLQA6Qq4BAXD50dUCoCPkGhg9ADf9+qvRazYCdH8NrT9CboQC4PKjqwVAR8g1UD0AGiA3ff9qdA9H80P17s8ANED/CLkeUIBofqheAPouiLtCvavRFawV4CwgAOeAUfMCQAk5nxeAc8Co+dEDoAmO/Xz1D+GxB4zGLwCUkPN5ATgHjJoXAErI+bwAnANGzQsAJeR8XgDOAaPmhwDQhk2fCs1ztOOve4MOAaDtKr8vg28I7gDatG/jTegDwR1A21ZufQp0CGhLT/RdEvyNWNu9Nm7djoA2NMwC0Hav7SvR+9Dm89kAupWgzbt7K2QFaHvvnglmlxa6vUS1fT0gyQ7Q+xIYeQG76gWQ4QJgEASQAYB5/gkgE8C+CALICLAPggAyA/RFEIADQB8EATgBpCIIwBEgBUEAzgAIQQADAOxCEMBAANsQBDAgwCYEAQwM8BNBAAUAviIIoBDAOwL6/ySTfidccA6/vmsBFCYWgAAKJ1C4e60AARROoHD3WgECKJxA4e5fAE1OlX+RnzuJAAAAAElFTkSuQmCC"
        />
      </defs>
    </svg>
  );
};

// 폴더 아이콘
export const FolderIcon = () => {
  return (
    <svg
      width="100"
      height="100"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <rect width="100" height="100" fill="url(#pattern0_451_4212)" />
      <defs>
        <pattern
          id="pattern0_451_4212"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref="#image0_451_4212" transform="scale(0.0104167)" />
        </pattern>
        <image
          id="image0_451_4212"
          width="96"
          height="96"
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAAAXNSR0IArs4c6QAAAxFJREFUeF7tnEFuE0EQRavhIuEm5CTEO5RsHC6Q5ALYCxyxizkJvkl8EWgYS5YQUvx7hvmuYfJGyiKq7l8z77nHChJVgiuVQEntTvNAQPKHAAEISCaQ3J4TgIBkAsntOQEISCaQ3J4TgIBkAsntOQEISCaQ3J4TgIBkAsntOQH/m4CPy3rxJuJDKfE+4vBjvWqN+8d1ebA2SQzvdQKul/WulLg/9/3OWUKzgJvb+v0cn/iX5M5VQpOA60/1qtR4Ovcn/+9+c5QgBXTv/LclnrPhH/vPTYIUkPXePyV8ThKkgJtlfYoSV1M5AXM7CVrAbe1ePxdTE9DdzxxOQouAOkX4E7qnfUTso8b+R8TD13Xpfm++ENCMqmnhvtbY9vnDEQFNXHsv2m1W5bJlFwJaKA1Y0/r9hIABcBu37EuNxZd12Z1aj4BGmkOWtZwCBAwh275HfhcgoB3mkJX7zaq84xU0BN1Iezar3/+Af+LiBIwE+qUYBJgBq3gEKELmOgLMgFU8AhQhcx0BZsAqHgGKkLmOADNgFY8ARchcR4AZsIpHgCJkriPADFjFI0ARMtcRYAas4hGgCJnrCDADVvEIUITMdQSYAat4BChC5joCzIBVPAIUIXMdAWbAKh4BipC5jgAzYBWPAEXIXEeAGbCKR4AiZK4jwAxYxSNAETLXEWAGrOIRoAiZ6wgwA1bxCFCEzHUEmAGreAQoQuY6AsyAVTwCFCFzHQFmwCoeAYqQuT6GgMkObDKzGyV+DAGp4ypHoZAVUmO7WZfFqfbyP2pPcWhfFs++fUcZ1jG1sZV9IWSuLzUu/3lcTfcAUxncmgmzb+9aYvH4uWzVPvkKOgZMdXylesCkuhxTc7yvZgGHk5A0vDsJ4qC2Le/9P4N7Ceg2Hr4TIu6iHGaJ2sfXD6Jw3k2HsZW1xu5nxLfRx1ae91leX7feJ+D1IfI+MQK8fGU6AiQi7wIEePnKdARIRN4FCPDylekIkIi8CxDg5SvTESAReRcgwMtXpiNAIvIuQICXr0xHgETkXYAAL1+ZjgCJyLvgFxpVRHCAJgsWAAAAAElFTkSuQmCC"
        />
      </defs>
    </svg>
  );
};
