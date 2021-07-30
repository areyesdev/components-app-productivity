# Cero a producción

FIXME: improve readme structure

## Components library

The project is located [here](https://github.com/areyesdev/app-productivity.git)

### Storybook configuration [Components]

- `npx sb init`
- Choose that is a Reat project
- `yarn add react react-dom`
- `yarn storybook`
- Add classNames
- `yarn add classnames`
- Add global styles `globals.css`\*
- Add reset styles `https://jgthms.com/minireset.css`\*
- Add typography from Google Fonts

### Design Tokens [Components]

- Create tokens.js file
- Create script to transform the tokens into custom properties
- Add brand colors to tokens
- Add the rest of the tokens based on the project\*

### Atoms & Molecules [Components]

- Create Paragraph Atom
- Create Heading Atom
- Create Button Molecule
- Create Icon Atom
- Create Picture Atom
- Create ButtonIcon Molecule
- Create Spacer's Layout
- Create Avatar Atom
- Create Card Atom

### Eslint and Prettier

- Add a modified version of [EditorConfig](https://github.com/airbnb/javascript/blob/master/.editorconfig)

1. Install ESLint and create a config file following the instructions [here](https://eslint.org/docs/user-guide/getting-started#installation-and-usage)
2. Install Prettier `yarn add --dev prettier`
3. Install the prettier configuration along ESLint following [these](https://github.com/prettier/eslint-plugin-prettier#recommended-configuration) instructions
4. Finally configure the precommit hook with lint-staged [here](https://prettier.io/docs/en/precommit.html#option-1-lint-stagedhttpsgithubcomokonetlint-staged)
5. Configure stylelint\*

### Creating tests

1. Install Jest for React following [this](https://jestjs.io/docs/en/tutorial-react) instructions.
2. Mock the CSS and CSS Modules files for Storybook [here](https://jestjs.io/docs/en/webpack#mocking-css-modules)
3. Configure Storyshoots [here](https://storybook.js.org/docs/react/workflows/snapshot-testing)
4. Configure Cromatic in https://www.chromatic.com/
5. FIXME: Configure Chromatic with GitHub. Review with checks should with got with the Pull request.
6. TODO: Creating unit tests for `scripts` and `utils`
7. TODO: Create a coverage script with `instanbul`.
8. TODO: Upload the coverage HTML report to a service per pull request

### NPM scripts

- TODO: Create an script to watch when the `tokens/index.js` changes and build it. This script should be part of `yarn dev`.

### Github Actions

- Create a GitHub action for a pull request
- Create a GitHub action for a release

### Publishing in NPM

- FIXME: Create the process of release a new version using `semantic-release`
- TODO: Configure commitizen to enable conventional commits messages
- TODO: Create a hook to force conventional commit messages

### Adding a Good README

- TODO: Create instructions to run this project in dev
- TODO: Create instructions to run the tests of this project
- TODO: Add NPM, Coverage, GitHub actions badges to the README.
- TODO: Create a `CONTRIBUTING.md` file with instructions.
