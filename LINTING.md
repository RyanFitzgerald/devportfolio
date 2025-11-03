# Linting and Code Formatting Guide

This project uses ESLint and Prettier to maintain code quality and consistency.

## Tools

- **ESLint**: JavaScript/TypeScript linter
- **Prettier**: Code formatter
- **eslint-plugin-astro**: Astro-specific linting rules
- **prettier-plugin-astro**: Astro formatting support

## Available Scripts

### Linting

```bash
# Check for linting errors
npm run lint

# Fix linting errors automatically
npm run lint:fix
```

### Formatting

```bash
# Format all files
npm run format

# Check if files are formatted correctly
npm run format:check
```

## Configuration Files

### ESLint (`.eslintrc.json`)

**Rules Enforced:**
- Semicolons required
- Single quotes preferred
- 2-space indentation
- No trailing spaces
- Max 1 empty line
- Trailing commas in multiline
- Object curly spacing
- No console warnings
- TypeScript strict rules

**File Extensions:**
- `.js` - JavaScript files
- `.ts` - TypeScript files
- `.astro` - Astro components

### Prettier (`.prettierrc.json`)

**Formatting Rules:**
- Semicolons: Yes
- Quotes: Single
- Tab Width: 2 spaces
- Trailing Commas: ES5
- Print Width: 100 characters
- Bracket Spacing: Yes
- Arrow Parens: Always
- End of Line: LF (Unix)

## IDE Integration

### VS Code

Install these extensions:
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [Astro](https://marketplace.visualstudio.com/items?itemName=astro-build.astro-vscode)

Add to `.vscode/settings.json`:
```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "[astro]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  }
}
```

### WebStorm / IntelliJ

1. Go to **Settings** → **Languages & Frameworks** → **JavaScript** → **Code Quality Tools**
2. Enable **ESLint** and **Prettier**
3. Check "Run eslint --fix on save"
4. Check "On save" for Prettier

## Pre-commit Hooks (Optional)

To automatically lint and format before commits, install Husky:

```bash
npm install --save-dev husky lint-staged
npx husky install
```

Add to `package.json`:
```json
{
  "lint-staged": {
    "*.{js,ts,astro}": ["eslint --fix", "prettier --write"],
    "*.{css,json,md}": ["prettier --write"]
  }
}
```

Create `.husky/pre-commit`:
```bash
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

npx lint-staged
```

## Common Issues

### Issue: "Parsing error: Cannot find module"

**Solution:** Install dependencies
```bash
npm install
```

### Issue: "File ignored by default"

**Solution:** Check `.eslintignore` and `.prettierignore`

### Issue: "Unexpected token"

**Solution:** Update parser in `.eslintrc.json`

## Ignored Files

The following are ignored by linters:

- `node_modules/`
- `dist/`
- `.astro/`
- `*.config.js`
- `*.config.mjs`
- Lock files

## Best Practices

1. **Run linting before committing**
   ```bash
   npm run lint && npm run format:check
   ```

2. **Fix issues automatically**
   ```bash
   npm run lint:fix && npm run format
   ```

3. **Check CI/CD**
   - Add linting to CI pipeline
   - Fail builds on lint errors

4. **Keep dependencies updated**
   ```bash
   npm update
   ```

## Customization

### Adding New Rules

Edit `.eslintrc.json`:
```json
{
  "rules": {
    "your-rule": "error"
  }
}
```

### Disabling Rules

For specific files:
```javascript
/* eslint-disable rule-name */
```

For specific lines:
```javascript
// eslint-disable-next-line rule-name
```

### Prettier Override

Edit `.prettierrc.json`:
```json
{
  "printWidth": 120
}
```

## Resources

- [ESLint Documentation](https://eslint.org/docs/latest/)
- [Prettier Documentation](https://prettier.io/docs/en/)
- [Astro ESLint Plugin](https://github.com/ota-meshi/eslint-plugin-astro)
- [TypeScript ESLint](https://typescript-eslint.io/)

## Contributing

When contributing:
1. Run `npm run lint:fix` before committing
2. Run `npm run format` to format code
3. Ensure all checks pass
4. Follow the existing code style

## License

Same as the main project.
