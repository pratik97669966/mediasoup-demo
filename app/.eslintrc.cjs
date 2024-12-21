const disabled = 0
const warning = 1
const error = 2
const default_level = warning

module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  plugins: ['import', 'react'],
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  settings: {
    react: {
      pragma: 'React',
      version: '18',
    },
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      impliedStrict: true,
      jsx: true,
    },
  },
  rules: {
    'array-bracket-spacing': [
      default_level,
      'always',
      {
        objectsInArrays: true,
        arraysInArrays: true,
      },
    ],
    'arrow-parens': [default_level, 'always'],
    'arrow-spacing': default_level,
    'block-spacing': [default_level, 'always'],
    'brace-style': [default_level, 'allman', { allowSingleLine: true }],
    camelcase: default_level,
    'comma-dangle': default_level,
    'comma-spacing': [default_level, { before: false, after: true }],
    'comma-style': default_level,
    'computed-property-spacing': default_level,
    'constructor-super': default_level,
    'func-call-spacing': default_level,
    'generator-star-spacing': default_level,
    'guard-for-in': default_level,
    'key-spacing': [
      default_level,
      {
        singleLine: {
          beforeColon: false,
          afterColon: true,
        },
        multiLine: {
          beforeColon: true,
          afterColon: true,
          align: 'colon',
        },
      },
    ],
    'keyword-spacing': default_level,
    'linebreak-style': [default_level, 'unix'],
    'lines-around-comment': [
      default_level,
      {
        allowBlockStart: true,
        allowObjectStart: true,
        beforeBlockComment: true,
        beforeLineComment: false,
      },
    ],
    'newline-after-var': default_level,
    'newline-before-return': default_level,
    'newline-per-chained-call': default_level,
    'no-alert': default_level,
    'no-caller': default_level,
    'no-case-declarations': default_level,
    'no-catch-shadow': default_level,
    'no-class-assign': default_level,
    'no-confusing-arrow': default_level,
    'no-console': default_level,
    'no-const-assign': default_level,
    'no-debugger': default_level,
    'no-dupe-args': default_level,
    'no-dupe-keys': default_level,
    'no-duplicate-case': default_level,
    'no-div-regex': default_level,
    'no-empty': [default_level, { allowEmptyCatch: true }],
    'no-empty-pattern': default_level,
    'no-else-return': disabled,
    'no-eval': default_level,
    'no-extend-native': default_level,
    'no-ex-assign': default_level,
    'no-extra-bind': default_level,
    'no-extra-boolean-cast': default_level,
    'no-extra-label': default_level,
    'no-extra-semi': default_level,
    'no-fallthrough': default_level,
    'no-func-assign': default_level,
    'no-global-assign': default_level,
    'no-implicit-coercion': default_level,
    'no-implicit-globals': default_level,
    'no-inner-declarations': default_level,
    'no-invalid-regexp': default_level,
    'no-invalid-this': default_level,
    'no-irregular-whitespace': default_level,
    'no-lonely-if': default_level,
    'no-mixed-operators': default_level,
    'no-mixed-spaces-and-tabs': disabled,
    'no-multi-spaces': default_level,
    'no-multi-str': default_level,
    'no-multiple-empty-lines': [
      default_level,
      { max: 1, maxEOF: 0, maxBOF: 0 },
    ],
    'no-native-reassign': default_level,
    'no-negated-in-lhs': default_level,
    'no-new': default_level,
    'no-new-func': default_level,
    'no-new-wrappers': default_level,
    'no-obj-calls': default_level,
    'no-proto': default_level,
    'no-prototype-builtins': disabled,
    'no-redeclare': default_level,
    'no-regex-spaces': default_level,
    'no-restricted-imports': default_level,
    'no-return-assign': default_level,
    'no-self-assign': default_level,
    'no-self-compare': default_level,
    'no-sequences': default_level,
    'no-shadow': default_level,
    'no-shadow-restricted-names': default_level,
    'no-spaced-func': default_level,
    'no-sparse-arrays': default_level,
    'no-this-before-super': default_level,
    'no-throw-literal': default_level,
    'no-undef': default_level,
    'no-unexpected-multiline': default_level,
    'no-unmodified-loop-condition': default_level,
    'no-unreachable': default_level,
    'no-unused-vars': [default_level, { vars: 'all', args: 'after-used' }],
    'no-use-before-define': [default_level, { functions: false }],
    'no-useless-call': default_level,
    'no-useless-computed-key': default_level,
    'no-useless-concat': default_level,
    'no-useless-rename': default_level,
    'no-var': default_level,
    'no-whitespace-before-property': default_level,
    'object-curly-newline': disabled,
    'object-curly-spacing': [default_level, 'always'],
    'object-property-newline': [
      default_level,
      { allowMultiplePropertiesPerLine: true },
    ],
    'prefer-const': default_level,
    'prefer-rest-params': default_level,
    'prefer-spread': default_level,
    'prefer-template': default_level,
    quotes: [default_level, 'single', { avoidEscape: true }],
    semi: [default_level, 'always'],
    'semi-spacing': default_level,
    'space-before-blocks': default_level,
    'space-before-function-paren': [
      default_level,
      {
        anonymous: 'never',
        named: 'never',
        asyncArrow: 'always',
      },
    ],
    'space-in-parens': [default_level, 'never'],
    'spaced-comment': [default_level, 'always'],
    strict: default_level,
    'valid-typeof': default_level,
    'eol-last': default_level,
    yoda: default_level,
    // eslint-plugin-import options.
    'import/extensions': default_level,
    'import/no-duplicates': default_level,
    // eslint-plugin-react options.
    'jsx-quotes': [default_level, 'prefer-single'],
    'react/display-name': [default_level, { ignoreTranspilerName: false }],
    'react/forbid-prop-types': disabled,
    'react/jsx-boolean-value': default_level,
    'react/jsx-closing-bracket-location': default_level,
    'react/jsx-curly-spacing': default_level,
    'react/jsx-equals-spacing': default_level,
    'react/jsx-handler-names': default_level,
    'react/jsx-key': default_level,
    'react/jsx-max-props-per-line': disabled,
    'react/jsx-no-bind': disabled,
    'react/jsx-no-duplicate-props': default_level,
    'react/jsx-no-literals': disabled,
    'react/jsx-no-undef': disabled,
    'react/jsx-pascal-case': default_level,
    'react/jsx-sort-prop-types': disabled,
    'react/jsx-sort-props': disabled,
    'react/jsx-uses-react': default_level,
    'react/jsx-uses-vars': default_level,
    'react/no-danger': default_level,
    'react/no-deprecated': default_level,
    'react/no-did-mount-set-state': default_level,
    'react/no-did-update-set-state': default_level,
    'react/no-direct-mutation-state': default_level,
    'react/no-is-mounted': default_level,
    'react/no-multi-comp': disabled,
    'react/no-set-state': disabled,
    'react/no-string-refs': disabled,
    'react/no-unknown-property': default_level,
    'react/prefer-es6-class': default_level,
    'react/prop-types': [default_level, { skipUndeclared: true }],
    'react/react-in-jsx-scope': default_level,
    'react/self-closing-comp': default_level,
    'react/sort-comp': disabled,
    'react/jsx-wrap-multilines': [
      default_level,
      {
        declaration: false,
        assignment: false,
        return: true,
      },
    ],
  },
}
