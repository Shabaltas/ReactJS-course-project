export const maxLengthValidator = maxLength => value => {
    if (value && value.length <= maxLength) return undefined;
    return `Max length is ${maxLength}`;
};

export const minLengthValidator = minLength => value => {
    if (value && value.length >= minLength) return undefined;
    return `Min length is ${minLength}`;
};

export const required = value => {
    if (value) return undefined;
    return "Required field";
};
