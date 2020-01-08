// https://github.com/semantic-release/semantic-release/blob/master/docs/usage/configuration.md#configuration
module.exports = {
  // https://github.com/semantic-release/semantic-release/blob/master/docs/extending/plugins-list.md
  // https://github.com/semantic-release/semantic-release/blob/master/docs/usage/plugins.md#plugins
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    [
      '@semantic-release/npm',
      {
        npmPublish: false,
      },
    ],
    '@semantic-release/changelog',
    '@semantic-release/git',
  ],
  branch: 'master',
  // 	Responsible for verifying conditions necessary to proceed with the
  // 	release: configuration is correct, authentication token are valid, etc...
  verifyConditions: [
    '@semantic-release/changelog',
    '@semantic-release/npm',
    '@semantic-release/git',
    '@semantic-release/github',
  ],
  // Responsible for preparing the release, for example creating or updating
  // files such as package.json, CHANGELOG.md, documentation or compiled assets and pushing a commit.
  prepare: ['@semantic-release/changelog', '@semantic-release/npm', '@semantic-release/git'],
  publish: ['@semantic-release/github'],
  generateNotes: {
    preset: 'angular',
  },
  npmPublish: false,
  dryRun: true,
  ci: false,
};
