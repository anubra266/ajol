export const parseMatch = (match: number) => {
  let scheme = "";
  if (match <= 44) scheme = "red";
  else if (match <= 84) scheme = "orange";
  else scheme = "purple";
  return scheme;
};
