export const formatUrl = (string: string) =>
  string.replace(/<\/?[^>]+(>|$)/g, "");
