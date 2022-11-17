import _ from "lodash";

export function validate(
  values,
  filter = "^(?=.{8,39}$)[a-zA-Zd]+(?:-[a-zA-Zd]+)*$",
  multi = true,
  schema = {}
) {
  const extractedSchemas = {};
  const valueKeys = Object.keys(values);
  var validationErrors = {};

  // if the value of aKey in the values object is empty
  // create an error for aKey

  if (multi) {
    const validationFilter = new RegExp(filter);
    _.map(valueKeys, (aKey) => {
      if (values[aKey]) {
        if (!validationFilter.test(values[aKey])) {
          validationErrors[
            aKey
          ] = `${aKey} did not pass validation checks. Regex filter applied ${filter}`;
        }
      }
    });
  }
  else if (!multi) {
    const schemaKeys = Object.keys(schema);

    _.map(schemaKeys, schema => {
      extractedSchemas.regex = schema.regex ? new RegExp(schema.regex) : null
      extractedSchemas.required = schema.required ? schema.required : false
      extractedSchemas.type = schema.type ? schema.type : null
    })
    _.map(valueKeys, (aKey) => {
      const validationFilter = new RegExp(schema[aKey]);
      if (values[aKey]) {
        if (!validationFilter.test(values[aKey])) {
          validationErrors[
            aKey
          ] = `${aKey} did not pass validation checks. Regex filter applied ${filter}`;
        }
      }
    });
  }

  return validationErrors;
}
