module.exports = {
  //https://github.com/okonet/lint-staged#configuration.

  "*": ["git add"],
  // "*.{json,css,scss,md,js}": ["prettier --write", "git add"],
  // "*.(ts)": ["prettier-tslint fix", "git add"]
  // '{apps,libs}/**/*.{ts,json,md,scss,html}': [
  //   //see https://nx.dev/web/api/workspace/npmscripts/affected-lint
  //   'yarn affected:lint --uncommitted --parallel --fix',
  //   'yarn format:write --uncommitted',
  //   'git add',
  // ],
};
