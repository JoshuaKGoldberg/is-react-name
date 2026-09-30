import { isIdentifierName } from "./isIdentifierName.ts";

/**
 * Checks whether a string is a valid React hook name.
 *
 * React considers `use` itself, or `use` followed by an ASCII uppercase letter
 * or digit, to be a hook. `useless` and `use_thing` are not hooks.
 * @example
 * ```ts
 * isHookName("use"); // true
 * isHookName("useState"); // true
 * isHookName("user"); // false
 * isHookName("use_state"); // false
 * ```
 * @see https://github.com/react/react/blob/main/packages/eslint-plugin-react-hooks/src/rules/RulesOfHooks.ts
 */
export function isHookName(name: string) {
	return (name === "use" || /^use[A-Z\d]/.test(name)) && isIdentifierName(name);
}
