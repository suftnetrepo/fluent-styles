// Sample validation rules for a registration form
const formValidatorRules = {
  rules: {
    first_name: [
      {
        pattern: /^.+$/,
        message: 'first name is required'
      },
      {
        pattern: /^.{0,50}$/,
        message: 'first name must be no more than 50 characters'
      }
    ],
    last_name: [
			{ pattern: /^.+$/, message: 'last name is required' },
      {
        pattern: /^.{0,50}$/,
        message: 'last name must be no more than 50 characters'
      }
    ],
    mobile: [
			{ pattern: /^.+$/, message: 'mobile number is required' },
      {
        pattern: /^.{0,20}$/,
        message: 'mobile number must be no more than 20 characters'
      }
    ],
    email: [
			{ pattern: /.+/, message: 'email address is required' },
      {
        pattern: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
        message: 'Please enter a valid email address'
      },
      {
        pattern: /^.{0,50}$/,
        message: 'email address must be no more than 50 characters'
      }
    ]
  },
  fields: {
    first_name: '',
    last_name: '',
    email: '',
    mobile: '',
    password: 'Kcmkcm123'
  }
}

export { formValidatorRules }
