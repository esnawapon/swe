export const removeNullParams = (params: {}): {} => {
  Object.keys(params).forEach(key => {
    if (params[key] === null || params[key] === undefined) {
      delete params[key];
    }
  });
  return params;
}
