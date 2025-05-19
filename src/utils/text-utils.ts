export const formatStringToTitleCase = (string: string) => {
  return string.toLowerCase().replace(/\b\w/g, (char) => char.toUpperCase());
};
