export const idFromUrl = (url: string) => {
  const splitUrl = url.split('/');
  return splitUrl[splitUrl.length - 2] ?? undefined;
};
