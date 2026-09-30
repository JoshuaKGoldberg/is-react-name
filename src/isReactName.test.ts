import { describe, expect, it } from "vitest";

import { isReactName } from "./isReactName.ts";

describe(isReactName, () => {
	// cspell:disable-next-line
	it.each(["App", "双池视图", "Über", "use", "useState", "use1"])(
		"returns true for %j",
		(name) => {
			expect(isReactName(name)).toBe(true);
		},
	);

	it.each([
		"",
		"app",
		"useless",
		"_App",
		"My-Component",
		"user",
		"use_state",
		"my-element",
	])("returns false for %j", (name) => {
		expect(isReactName(name)).toBe(false);
	});
});
