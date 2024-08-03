export const useCalculateTime = (time: number) => {
  const minutes =
    Math.floor(time / 60) >= 10
      ? Math.floor(time / 60)
      : "0" + Math.floor(time / 60);
  const seconds =
    Math.floor(time % 60) >= 10
      ? Math.floor(time % 60)
      : "0" + Math.floor(time % 60);
  return [minutes as string, seconds as string];
};
