function findKey(obj, keys) {
    let result = obj;
    for (const key of keys) {
    if (Object.hasOwn(result, key) === false) {
    return null;
    } else {
    result = result[key];
    }
    } return result;
    }

export { findKey }