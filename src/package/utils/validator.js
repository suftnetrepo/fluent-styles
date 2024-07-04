
const validateField = (value, rules) => {
  for (const rule of rules) {
    if (rule?.array) {    
      if (Array.isArray(value) && value.length === 0) {
        return rule.message;
      }
    } else if (!rule?.pattern?.test(value)) {  
      return rule.message;
    }
  }

  return undefined;
};


const validate = (values, rules) => {
  const errors = {};
  let hasError = false;

  for (const field in rules) {
    const fieldRules = rules[field];
    const value = values[field];
    const error = validateField(value, fieldRules);

    if (error) {
      hasError = true;
      errors[field] = { message: error };
    }
  }

  return {
    hasError,
    errors,
  };
};

export { validate };
