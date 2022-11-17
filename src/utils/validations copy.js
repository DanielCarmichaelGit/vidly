const validator = {
  isEmail: function (string) {
    return (string.split('@').length === 2 ? true : false)
  },
  regex: function (regex, string) {
    const filter = (regex == String ? RegExp(regex) : false)
    return (filter ? filter.test(string) : "error: not a valid RegExp")
  },
  isPositive: function(num) {
    return num > 0
  },
  isNegative: function(num) {
    return num < 0
  },
  isZero: function(num) {
    return num === 0
  },
  isMatch: function (string_one, string_two, type_strict = true) {
    return (type_strict ? string_one === string_two : string_one.toLowercase() === string_two.toLowercase())
  },
  isMatchNum: function (num_one, num_two, type_strict = true) {
    return type_strict === true ? num_one === num_two : num_one.toString() === num_two.toString();
  }
}


console.log(validator.isMatchNum())