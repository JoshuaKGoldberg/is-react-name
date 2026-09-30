import { isComponentName } from "./isComponentName.ts";
import { isHookName } from "./isHookName.ts";

/**
 * Checks whether a string is a valid React component or hook name.
 * @example
 * ```ts
 * isReactName("App"); // true
 * isReactName("useState"); // true
 * isReactName("app"); // false
 * isReactName("useless"); // false
 * ```
 * @see {@link isComponentName}
 * @see {@link isHookName}
 */
export function isReactName(name: string) {
	return isComponentName(name) || isHookName(name);
}
