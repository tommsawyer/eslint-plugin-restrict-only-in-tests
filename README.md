# eslint-plugin-restrict-only-in-tests

Doesn't allow to write .only() in tests.

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-restrict-only-in-tests`:

```
$ npm install eslint-plugin-restrict-only-in-tests --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-restrict-only-in-tests` globally.

## Usage

Add `restrict-only-in-tests` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "restrict-only-in-tests"
    ]
}
```


