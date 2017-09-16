export function capitalise(names) {
  return names.map(name => name.toUpperCase());
}

export function extractValue(objects, key) {
  return objects.map(obj => obj[key]);
}

export function extractCompoundValue(objects, keysString) {
  return objects.map(obj => obj[keysString.split('.')[0]][keysString.split('.')[1]]);
}
