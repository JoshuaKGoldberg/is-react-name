// https://tc39.es/ecma262/#prod-IdentifierName
const identifierName = /^[$_\p{ID_Start}][$\u200C\u200D\p{ID_Continue}]*$/u;

export function isIdentifierName(name: string) {
	return identifierName.test(name);
}
