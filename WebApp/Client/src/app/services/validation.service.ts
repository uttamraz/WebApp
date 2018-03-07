export class ValidationService {
    static getValidatorErrorMessage(validatorName: string, validatorValue?: any) {
        let config = {
            'required': 'Required',
            'minlength': `Minimum length ${validatorValue.requiredLength}`,
            'email': 'Invalid email address',
        };
        return config[validatorName];
    }
}
