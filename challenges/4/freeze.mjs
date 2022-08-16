// —————————————————————————————————————————————————————————————————————————————
// Challenge: Decorate frozen objects
// —————————————————————————————————————————————————————————————————————————————
// Write the bodies to `setData` and `getData` below so that the tests pass.
//
// —————————————————————————————————————————————————————————————————————————————
// Hint: Frozen objects cannot be modified.
// You must find a way to assign data to them.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakMap
// —————————————————————————————————————————————————————————————————————————————

/**
 * Assign some value to `object` so it can be retrieved later.
 *
 * @template T
 * @param {Readonly<object>} object
 * @param {T} value
 * @returns {void}
 */

let freezeObj = null;

export function setData(object, value) {
  freezeObj = Object.create(null, {
    0: { value }
  })
  object = freezeObj
}

/**
 * Retrieve some value from `object`.
 *
 * @template T
 * @param {Readonly<object>} object
 * @returns {T | undefined}
 */
// export function getData(object) {
//   return /* … */;
// }

export function getData(object) {
  let newValue = freezeObj == null ? null : freezeObj[0]
  freezeObj = null;
  return newValue;
}
