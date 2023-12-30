import { strings } from '../localization';
// ****************** CHECK VALIDATIONS START ******************
function checkErrors(field = {}, name = '', validations = {}) {
  let rules = Object.keys(validations);
  let valid = true;

  // REQUIRED
  if (rules.includes('required')) {
    if (
      field.value === '' ||
      field.value === null ||
      field.value?.length <= 0 ||
      field?.value == false
    ) {
      valid = false;
      field.error = `${name} ${strings.errorMessage.isRequired}`;
    } else if (rules.includes('compare')) {
      //check Two Value
      if (field?.value2 !== '' || field?.value2 !== null) {
        if (field?.value !== field?.value2) {
          valid = false;
          field.error = `The value should be the same.`;
        }
      }
    }
  }
  if (rules.includes('regex') && valid) {
    if (!validations.regex.test(field.value)) {
      valid = false;
      field.error =
        name == 'Email' || name == 'The Email'
          ? 'This value should be a valid email.'
          : `${name} ${strings.errorMessage.mustValidFiled}`;
    }
  }
  if (rules.includes('min') && valid) {
    let min = Number(validations.min);
    if (field.value.toString().length < min) {
      valid = false;
      field.error = `${name} ${strings.errorMessage.minMust} ${min}  ${strings.errorMessage.minLong}`;
    }
  }
  // MAX
  if (rules.includes('max') && valid) {
    let max = Number(validations.max);
    if (field.value.toString().length > max) {
      valid = false;
      field.error = `${name} ${'must be atleast'} ${max} ${'characters'}`;
    }
  }
}

export default function checkAllFields(self) {
  return new Promise((resolve, reject) => {
    try {
      let valid = true;
      var error = {};
      Object.keys(self.formData).forEach(key => {
        if (key !== 'otherNotes') {
          checkErrors(
            self.formData[key],
            self.formData[key].name,
            self.formData[key].rules,
            self.formData[key].type,
          );
          if (self.formData[key].error != '') {
            valid = false;
          }

          error = { ...error, [key]: self.formData[key].error };
        }
      });

      resolve({ valid, error: error });
    } catch (error) {
      reject(error);
    }
  });
}
// ****************** CHECK VALIDATIONS END ******************
