import { describe, expect, it } from "vitest";

import { isComponentName } from "./isComponentName.ts";

describe(isComponentName, () => {
	it.each([
		"A",
		"App",
		"MyComponent",
		"My_Component",
		"MyComponent$",
		"MyComponent2",
		"UPPERCASE",
		"Élan",
		// cspell:disable-next-line
		"ñandú",
		"双池视图",
		"𝒜pp",
		"B2B",
		"HTMLElement",
		"X_",
		"Ω",
		// cspell:disable-next-line
		"Über",
		"コンポーネント",
	])("returns true for %j", (name) => {
		expect(isComponentName(name)).toBe(true);
	});

	it.each([
		"",
		"a",
		"app",
		"div",
		"myComponent",
		"useState",
		"_App",
		"$App",
		"1App",
		"My-Component",
		"My.Component",
		"My Component",
		"My:Component",
		"😀",
		"App😀",
		"button",
		"my-element",
		"9Lives",
		"App!",
		" App",
		"App ",
		"<App>",
		"App/Page",
	])("returns false for %j", (name) => {
		expect(isComponentName(name)).toBe(false);
	});
});
