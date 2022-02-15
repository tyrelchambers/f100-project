export const useWindowSize = () => {
  const height = window.innerHeight;
  const width = window.innerWidth;

  return { height, width };
};
