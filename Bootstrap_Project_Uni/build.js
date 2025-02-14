const esbuild = require('esbuild');
const sassPlugin = require('esbuild-plugin-sass');

esbuild.build({
    entryPoints: ['src/js/main.js', 'node_modules/bootstrap/dist/js/bootstrap.bundle.min.js', 'src/scss/style.scss'],
    bundle: true,
    outdir: 'dist',
    minify: true,
    sourcemap: true,
    plugins: [sassPlugin()],
}).catch(() => process.exit(1));
