module.exports = function(option = {}) {
  const { ts = false } = option;
  return {
    env: {
      browser: true,
      commonjs: true,
      es6: true,
      jest: true,
      node: true,
    },
    globals: {
      __ENV__: true,
      __MODE__: true,
      __EXT__: true,
    },
    settings: {
      react: {
        version: 'detect'
      }
    },
    parser: ts ? '@typescript-eslint/parser' : 'babel-eslint',
    parserOptions: {
      ecmaVersion: 2019,
      sourceType: 'module',
      ecmaFeatures: {
        jsx: true
      }
    },
    plugins: ts ? ['react', 'react-hooks', '@typescript-eslint'] : ['react', 'react-hooks'],
    extends: (['airbnb-base', 'plugin:react/recommended', 'plugin:react-hooks/recommended']).concat(
      ['../rules/import', '../rules/no', '../rules/react', '../rules/base', '../rules/ts'].map(require.resolve))
      .concat(ts ? ['plugin:@typescript-eslint/recommended'] : []),
    rules: {
    
    }
  };
}
