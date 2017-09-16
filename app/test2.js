export function capitalise(names) {
    return names.map(function (name) {
        return name.toUpperCase();
    });
}

export function extractValue(objects, key) {
    return objects.map(function (obj) {
        return obj[key];
    });
}

export function extractCompoundValue(objects, keysString) {
    return objects.map(function (obj) {
        return obj[keysString.split('.')[0]][keysString.split('.')[1]]
    });
}
