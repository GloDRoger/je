import antfu from '@antfu/eslint-config'

export default antfu(
  {
    vue: {
      overrides: {
        'vue/operator-linebreak': 'off',
        'vue/singleline-html-element-content-newline': 'off',
        'vue/multi-word-component-names': 'off',
        'vue/no-v-model-argument': 'off',
        'vue/require-default-prop': 'off',
        'vue/require-prop-types': 'off',
        'vue/html-self-closing': 'off',
        'vue/quote-props': 'off',
        'vue/no-irregular-whitespace': 'off',
        'vue/prop-name-casing': 'off',
        'vue/html-indent': 'off',
        'vue/no-reserved-component-names': 'off',
      },
    },
    typescript: true,
  },
  {
    rules: {
      'antfu/if-newline': 'off',
      'style/jsx-closing-tag-location': 'off',
      'import/order': 'off',
      'prefer-const': 'error',
      'node/prefer-global/process': 'off',
      'unused-imports/no-unused-vars': 'off',
      'style/semi': 'off',
      'style/indent': 'off',
      'style/quote-props': 'off',
      'style/brace-style': 'off',
      'style/arrow-parens': 'off',
      'style/indent-binary-ops': 'off',
      'style/operator-linebreak': 'off',
      'style/member-delimiter-style': 'off',
      'no-var': 'error',
      'no-undef': 'off',
      'no-new': 'off',
      'no-param-reassign': 'error',
      'no-console': 'off',
      'no-irregular-whitespace': 'off',
      'unicorn/number-literal-case': 'off',
      'ts/ban-ts-comment': 'off',
    },
  },
)
