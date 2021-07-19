# Cero a producción

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

# Notes

- TODO: Decidir cómo debería comportarse nuestro Atomic Design, respecto a que debería ser un Atomo o una Molecula.
