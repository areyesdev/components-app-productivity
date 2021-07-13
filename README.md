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

### Design Tokens [Components]

- Create tokens.js file
- Create script to transform the tokens into custom properties
- Add brand colors to tokens\*

### Atoms & Molecules [Components]

- Create Paragraph Atom
- Create Heading Atom
- Create Button Molecule
- Create Icon Atom
- Create Picture Atom\*
- Create ButtonIcon Molecule
- Create Spacer's Layout\*

### Eslint and Prettier

- Add a modified version of [EditorConfig](https://github.com/airbnb/javascript/blob/master/.editorconfig)

1. Install ESLint and create a config file following the instructions [here](https://eslint.org/docs/user-guide/getting-started#installation-and-usage)
2. Install Prettier `yarn add --dev prettier`
3. Install the prettier configuration along ESLint following [these](https://github.com/prettier/eslint-plugin-prettier#recommended-configuration) instructions
4. Finally configure the precommit hook with lint-staged [here](https://prettier.io/docs/en/precommit.html#option-1-lint-stagedhttpsgithubcomokonetlint-staged)

# Notes

- TODO: Decidir cómo debería comportarse nuestro Atomic Design, respecto a que debería ser un Atomo o una Molecula.
