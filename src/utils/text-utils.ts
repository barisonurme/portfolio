import { toast } from "sonner";

export const formatStringToTitleCase = (string: string) => {
  return string.toLowerCase().replace(/\b\w/g, (char) => char.toUpperCase());
};

export const copyString = async (string: string) => {
  await navigator.clipboard.writeText(string);
  return toast("Copied Successfully");
};
