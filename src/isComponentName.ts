import { isIdentifierName } from "./isIdentifierName.ts";

/**
 * Checks whether a string is a valid React component name.
 *
 * JSX only treats ASCII-lowercase tag names (`div`, `span`, ...) as DOM elements.
 * React considers names starting with an ASCII uppercase letter or any
 * non-ASCII character (e.g. `双池视图`) to be components.
 * @example
 * ```ts
 * isComponentName("App"); // true
 * isComponentName("双池视图"); // true
 * isComponentName("app"); // false
 * isComponentName("_App"); // false
 * ```
 * @see https://github.com/react/react/pull/37667
 */
export function isComponentName(name: string) {
	return (
		(/^[A-Z]/.test(name) || name.charCodeAt(0) > 0x7f) && isIdentifierName(name)
	);
}
