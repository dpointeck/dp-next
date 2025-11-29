import kirby from 'vite-plugin-kirby'

export default ({ mode }) => ({
  // During development the assets are served directly from vite's dev server
  // e.g. `localhost:5173/index.js`, but for production they are placed inside
  // the `build.outDir`, `/dist/` in this case.
  base: mode === 'development' ? '/' : '/dist/',

  build: {
    // Where your manifest an bundled assets will be placed. This example
    // assumes you use a public folder structure.
    outDir: 'public/dist',
    assetsDir: 'assets',

    // Your entry file(s).
    // Note: CSS files can either be a separate entry. In this case you use it
    // like this: `<?= vite->css('main.css') ?>`. Or you can only add the
    // `main.js` as an entry and import the CSS in your JS file. In this case
    // you would use the JS file name: `vite()->css('main.js')`.
    rollupOptions: {
      input: ['main.js', 'main.css'],
    },
  },

  plugins: [
    kirby({
      // By default Kirby's templates, snippets, controllers, models, layouts and
      // everything inside the content folder will be watched and a full reload
      // triggered. All paths are relative to Vite's root folder.
      watch: [
        '../site/(templates|snippets|controllers|models|layouts)/**/*.php',
        '../content/**/*',
      ],
      // or disable watching
      watch: false,

      // Where the automatically generated `vite.config.php` file should be
      // placed. This has to match Kirby's config folder!
      kirbyConfigDir: 'site/config', // default
    }),
  ],
})
