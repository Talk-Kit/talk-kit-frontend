import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/ko";

export const useCalculateDate = (date: string) => {
  // 상대적 시간 플러그인 확장 및 한국어 설정
  dayjs.extend(relativeTime);
  dayjs.locale("ko");

  const difference = dayjs(date).fromNow();
  return difference;
};
