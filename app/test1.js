export function filterNames(names, startsWith) {
    return names.filter(name => name.startsWith(startsWith));
}

export function objectFilter(objects, key, searchString) {
    return objects.filter(object => object[key] === searchString);
}

export function compoundObjectFilter(objects, keysString, searchString) {

}
