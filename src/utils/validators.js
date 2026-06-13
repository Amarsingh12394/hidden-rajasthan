// Email validation
export const isValidEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return re.test(String(email).toLowerCase())
}

// Required field
export const isRequired = (value) => value.trim() !== ''

// Min length
export const minLength = (value, len) => value.trim().length >= len

// Phone number (simple Indian 10-digit)
export const isValidPhone = (phone) => /^[6-9]\d{9}$/.test(phone)

// Get error message
export const validateForm = (fields, rules) => {
  const errors = {}
  for (const field in rules) {
    const value = fields[field] || ''
    const fieldRules = rules[field]
    for (const rule of fieldRules) {
      if (!rule.check(value)) {
        errors[field] = rule.message
        break
      }
    }
  }
  return errors
}