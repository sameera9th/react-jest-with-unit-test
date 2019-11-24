module.exports = {
  linters: {
    '**/*.+(js|jsx|md|ts|css|sass)': [
      'eslint --fix',
      'prettier --write',
      'jest --findRelatedTests',
      'git add',
    ],
  },
};
