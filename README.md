<h1 align="center">is-react-name</h1>

<p align="center">
	Checks whether strings match React naming conventions.
	📛
</p>

<p align="center">
	<!-- prettier-ignore-start -->
	<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
	<a href="#contributors" target="_blank"><img alt="👪 All Contributors: 1" src="https://img.shields.io/badge/%F0%9F%91%AA_all_contributors-1-21bb42.svg" /></a>
<!-- ALL-CONTRIBUTORS-BADGE:END -->
	<!-- prettier-ignore-end -->
	<a href="https://github.com/JoshuaKGoldberg/is-react-name/blob/main/.github/CODE_OF_CONDUCT.md" target="_blank"><img alt="🤝 Code of Conduct: Kept" src="https://img.shields.io/badge/%F0%9F%A4%9D_code_of_conduct-kept-21bb42" /></a>
	<a href="https://codecov.io/gh/JoshuaKGoldberg/is-react-name" target="_blank"><img alt="🧪 Coverage" src="https://img.shields.io/codecov/c/github/JoshuaKGoldberg/is-react-name?label=%F0%9F%A7%AA%20coverage" /></a>
	<a href="https://github.com/JoshuaKGoldberg/is-react-name/blob/main/LICENSE.md" target="_blank"><img alt="📝 License: MIT" src="https://img.shields.io/badge/%F0%9F%93%9D_license-MIT-21bb42.svg" /></a>
	<a href="http://npmjs.com/package/is-react-name" target="_blank"><img alt="📦 npm version" src="https://img.shields.io/npm/v/is-react-name?color=21bb42&label=%F0%9F%93%A6%20npm" /></a>
	<img alt="💪 TypeScript: Strict" src="https://img.shields.io/badge/%F0%9F%92%AA_typescript-strict-21bb42.svg" />
</p>

Lint rules and other static analysis tools often need to know whether a name refers to a React component or hook.
React's own tooling checks this internally, but doesn't export those checks for others to use.
As a result, many projects copy and paste their own slightly different regular expressions.

This package gives you one small, dependency-free implementation that matches how JSX and React treat names today.

## Usage

```shell
npm i is-react-name
```

```ts
import { isComponentName, isHookName, isReactName } from "is-react-name";

isComponentName("MyComponent"); // true
isComponentName("myComponent"); // false

isHookName("useState"); // true
isHookName("useless"); // false

isReactName("MyComponent"); // true
isReactName("useState"); // true
isReactName("myFunction"); // false
```

All functions return `false` for strings that aren't valid JavaScript identifiers, such as `"My-Component"` or `"use State"`.

### `isComponentName`

Whether a string is a valid React component name: it starts with an ASCII uppercase letter or any non-ASCII character.
This matches JSX, which only treats ASCII-lowercase tag names such as `div` as DOM elements.

```ts
isComponentName("App"); // true
isComponentName("双池视图"); // true
isComponentName("app"); // false
isComponentName("_App"); // false
```

### `isHookName`

Whether a string is a valid React hook name: it's `use` itself, or `use` followed by an ASCII uppercase letter or digit.
This matches [`eslint-plugin-react-hooks`](https://www.npmjs.com/package/eslint-plugin-react-hooks) and the React Compiler.

```ts
isHookName("use"); // true
isHookName("use3D"); // true
isHookName("user"); // false
isHookName("use_state"); // false
```

### `isReactName`

Whether a string is either a valid React component name or a valid React hook name.

```ts
isReactName("App"); // true
isReactName("useState"); // true
isReactName("app"); // false
isReactName("useless"); // false
```

## Development

See [`.github/CONTRIBUTING.md`](./.github/CONTRIBUTING.md), then [`.github/DEVELOPMENT.md`](./.github/DEVELOPMENT.md).
Thanks! 📛

## Contributors

<!-- spellchecker: disable -->
<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center"><a href="http://www.joshuakgoldberg.com"><img src="https://avatars.githubusercontent.com/u/3335181?v=4?s=100" width="100px;" alt="Josh Goldberg ✨"/><br /><sub><b>Josh Goldberg ✨</b></sub></a><br /><a href="https://github.com/JoshuaKGoldberg/is-react-name/commits?author=JoshuaKGoldberg" title="Code">💻</a> <a href="#content-JoshuaKGoldberg" title="Content">🖋</a> <a href="https://github.com/JoshuaKGoldberg/is-react-name/commits?author=JoshuaKGoldberg" title="Documentation">📖</a> <a href="#ideas-JoshuaKGoldberg" title="Ideas, Planning, & Feedback">🤔</a> <a href="#infra-JoshuaKGoldberg" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="#maintenance-JoshuaKGoldberg" title="Maintenance">🚧</a> <a href="#projectManagement-JoshuaKGoldberg" title="Project Management">📆</a> <a href="#tool-JoshuaKGoldberg" title="Tools">🔧</a></td>
    </tr>
  </tbody>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->
<!-- spellchecker: enable -->

> 💝 This package was templated with [`create-typescript-app`](https://github.com/JoshuaKGoldberg/create-typescript-app) using the [Bingo framework](https://create.bingo).
