const textEllipsis = (text: string, n: number) => {
  return text.length > n ? text.substring(0, n) + "..." : text.substring(0, n);
};

export default textEllipsis;
