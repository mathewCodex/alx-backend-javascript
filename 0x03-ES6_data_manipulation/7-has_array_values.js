/**
 * Checks if a set contains each elem in an array
 * @param {set} set - The collection of unique items.
 * @param {*} array - The array of items.
 * @returns {Boolean}
 */
export default function hasValuesFromArray(set, array) {
  return array.every((value) => set.has(value));
}
