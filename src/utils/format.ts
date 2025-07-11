// src/utils/format.ts
export const formatDateToDot = (input: Date | string): string => {
  const date = typeof input === "string" ? new Date(input) : input;

  if (!(date instanceof Date) || isNaN(date.getTime())) {
    return "null";
  }

  const year = date.getFullYear();
  const month = `${date.getMonth() + 1}`.padStart(2, "0");
  const day = `${date.getDate()}`.padStart(2, "0");

  return `${year}.${month}.${day}`;
};
