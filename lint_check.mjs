import { ESLint } from 'eslint';

async function main() {
    const eslint = new ESLint();
    const results = await eslint.lintFiles(['src/**/*.jsx', 'src/**/*.js']);
    const formatter = await eslint.loadFormatter('stylish');
    const resultText = await formatter.format(results);
    console.log(resultText);
}

main().catch(console.error);
