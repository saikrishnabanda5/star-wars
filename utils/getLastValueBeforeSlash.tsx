function getLastValueBeforeSlash(url: any) {
  const parts = url.split("/");
  return parts[parts.length - 2] || null;
}

export default getLastValueBeforeSlash;
