function telephoneCheck(str) {
  // Regular expression pattern to match valid US phone numbers
  let validPhoneNumberPattern = /^(1\s?)?(\(\d{3}\)|\d{3})([\s\-]?)\d{3}([\s\-]?)\d{4}$/;

  // Test the input string against the regular expression pattern
  return validPhoneNumberPattern.test(str);
}

// Test cases
console.log(telephoneCheck("555-555-5555")); // true
console.log(telephoneCheck("1 555-555-5555")); // true
console.log(telephoneCheck("1 (555) 555-5555")); // true
console.log(telephoneCheck("5555555555")); // true
console.log(telephoneCheck("(555)555-5555")); // true
console.log(telephoneCheck("555-5555")); // false
console.log(telephoneCheck("5555555")); // false
console.log(telephoneCheck("1 555)555-5555")); // false
console.log(telephoneCheck("(6054756961)")); // false
