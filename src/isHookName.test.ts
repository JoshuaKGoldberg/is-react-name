import { describe, expect, it } from "vitest";

import { isHookName } from "./isHookName.ts";

describe(isHookName, () => {
	it.each([
		"use",
		"useA",
		"use1",
		"use3D",
		"useState",
		"useMyCustomHook",
		"useMy_Hook",
		"useMyHook$",
		"use0",
		"useID",
		"useActionState",
		"useSyncExternalStore",
	])("returns true for %j", (name) => {
		expect(isHookName(name)).toBe(true);
	});

	it.each([
		"",
		"us",
		"user",
		"useless",
		// cspell:disable-next-line
		"usestate",
		"use_state",
		"use$",
		// cspell:disable-next-line
		"useñ",
		// cspell:disable-next-line
		"useÜbersicht",
		"Use",
		"UseState",
		"_useState",
		"use-state",
		"use.State",
		"use State",
		"useState!",
		"USE",
		"usE",
		"useful",
		"reuseState",
		// cspell:disable-next-line
		"useα",
		"use()",
		"useState()",
		" useState",
	])("returns false for %j", (name) => {
		expect(isHookName(name)).toBe(false);
	});
});
