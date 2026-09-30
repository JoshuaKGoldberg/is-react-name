import { describe, expect, it } from "vitest";

import { isIdentifierName } from "./isIdentifierName.ts";

describe(isIdentifierName, () => {
	it.each([
		"a",
		"$",
		"_",
		"a1",
		"$a_b",
		"café",
		"日本",
		"a\u200Cb",
		"𝒜",
		"A",
		"Ω",
		"a$",
		"_1",
		"コンポーネント",
	])("returns true for %j", (name) => {
		expect(isIdentifierName(name)).toBe(true);
	});

	it.each([
		"",
		"1a",
		"a-b",
		"a b",
		"a.b",
		"\u200Ca",
		"😀",
		"a😀",
		"1",
		"$-",
		"a!",
		" a",
	])("returns false for %j", (name) => {
		expect(isIdentifierName(name)).toBe(false);
	});
});
