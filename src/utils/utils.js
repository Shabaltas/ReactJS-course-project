export const updateObjectInArray = (array, objPropName, prop, newProps) =>
    array.map(item => item[objPropName] === prop ? {...item, ...newProps} : item);