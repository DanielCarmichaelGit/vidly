import _ from "lodash";
// stateObjectToValidate is the object that is desiring validation
// defaults are the default errors produced if the stateObjectToValidate object is empty
// filters is an object of filters where each key is equal to each stateObjectToValidate's key
// and the value is equal to a regex string
export function validate(
  stateObjectToValidate,
  defaults = { error: "validation failed. 'ObjectToValidate' was not an object or contained no data" },
  filter = "^(?=.{8,39}$)[a-zA-Zd]+(?:-[a-zA-Zd]+)*$",
  validationType = "multi"
) {
  // assign default strictness to the validationType
  const type =
    (validationType === "single" && stateObjectToValidate.length > 1) ||
    validationType === "multi"
      ? "multi"
      : "single";
  // create regex with filter
  const objectValueFilter = new RegExp(filter);

  let newErrors = {};

  // check if validation type exists
  if (type) {
    /** 
        * check if validation type is multi
        * * Use 'multi' when validating something like form inputs on a form submission
        * * Use 'single' when validating something like a single input. If the given object is greater than 1 key:val pair in length
        * * the validation type will be set to multi.
        * ! If you want to avoid this, set the param 'strict' to false
        * multi is used to validate states that contain multiple key:val pairs
        * in this implementation, states that are validated on form submit.
        * So, this validation function is checking multiple key:val pairs within the "account" state (username and password)
    */


    if (type === "multi") {
      const stateObjectToValidateKeys = Object.keys(stateObjectToValidate);

      _.map(stateObjectToValidateKeys, (aKey) => {
        if (!objectValueFilter.test(stateObjectToValidate[aKey])) {
          if (aKey === "password") {
            newErrors[
              aKey
            ] = `${aKey} incorrect or did not contain necessary characters`;
          }
          newErrors[aKey] = `${aKey} not found`;
        }
      });
    } else if (type === "single") {
    }
  } else {
    newErrors = {
      error:
        "Validation could not be completed. Please include a validationType param in your validation function call",
    };
  }
  return {
    validatedErrors: newErrors,
  };
}
