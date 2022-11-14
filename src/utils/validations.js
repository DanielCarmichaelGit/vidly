import _ from "lodash";

export function validate(
  values,
  filter = "^(?=.{8,39}$)[a-zA-Zd]+(?:-[a-zA-Zd]+)*$"
) {
  const valueKeys = Object.keys(values);
  const validationFilter = new RegExp(filter);

  var validationErrors = {};

  // if the value of aKey in the values object is empty
  // create an error for aKey

  _.map(valueKeys, (aKey) => {
    if (!values[aKey]) {
      console.log(values[aKey])
      console.log(`${aKey} empty`)
    }
    else {
      if (!validationFilter.test(values[aKey])) {
        validationErrors[
          aKey
        ] = `${aKey} did not pass validation checks. Regex filter applied ${filter}`;
      }
    }
  });

  return validationErrors;
}
