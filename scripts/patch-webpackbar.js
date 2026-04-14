const fs = require('fs');
const path = require('path');

function patchFile(file, transform) {
  if (!fs.existsSync(file)) return;
  const source = fs.readFileSync(file, 'utf8');
  const next = transform(source);
  if (next !== source) {
    fs.writeFileSync(file, next);
    console.log(`Patched ${path.relative(process.cwd(), file)}`);
  }
}

patchFile(
  path.join(__dirname, '..', 'node_modules', '@docusaurus', 'bundler', 'lib', 'currentBundler.js'),
  (source) => source.replace('    return webpackbar_1.default;', '    return currentBundler.instance.ProgressPlugin;')
);

const progressPluginRegex = /new ProgressBarPlugin\(\{\n\s*name: '(Client|Server)',\n\s*color: '(green|yellow|blue)',\n\s*\}\)/g;

patchFile(
  path.join(__dirname, '..', 'node_modules', '@docusaurus', 'core', 'lib', 'webpack', 'client.js'),
  (source) => source.replace(progressPluginRegex, 'new ProgressBarPlugin()')
);

patchFile(
  path.join(__dirname, '..', 'node_modules', '@docusaurus', 'core', 'lib', 'webpack', 'server.js'),
  (source) => source.replace(progressPluginRegex, 'new ProgressBarPlugin()')
);
