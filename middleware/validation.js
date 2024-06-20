function validate(schema, data) {
  let valid = true;
  Object.keys(data).forEach((key) => {
    if (key in schema) {
      valid = true;
    } else {
      valid = false;
    };
  })
  return valid;
};

export default validate;
