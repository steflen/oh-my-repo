// https://github.com/semantic-release/semantic-release/blob/master/docs/usage/configuration.md#configuration
// https://github.com/semantic-release/semantic-release/blob/master/docs/extending/plugins-list.md
// https://github.com/semantic-release/semantic-release/blob/master/docs/usage/plugins.md#plugins
module.exports = {
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
    [
      '@semantic-release/git',
      {
        assets: ['package.json', 'CHANGELOG.md'],
        message: 'chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}',
      },
    ],
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
};
