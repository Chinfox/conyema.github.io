// const gulp = require('gulp');
const { src, dest, series, parallel, watch } = require('gulp');
const pug = require('gulp-pug');
const del = require('del');
// const replace = require('gulp-replace');
const uglify = require('gulp-uglify-es').default;
const cleanCSS = require('gulp-clean-css');
const purgecss = require('gulp-purgecss');
const gulpIf = require('gulp-if');
const useref = require('gulp-useref');
const autoprefixer = require('gulp-autoprefixer');
const htmlmin = require('gulp-htmlmin');
// const imagemin = require('gulp-imagemin');
const responsive = require('gulp-responsive-images');
const postcss = require('gulp-postcss');
const postcssCustomProperties = require('postcss-custom-properties');
const sourcemaps = require('gulp-sourcemaps');

// Site data
const siteData = require('./data.js');

//  Bootstrap links
// const bootstrapCdn = {
//   css: '<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/web/dist/css/bootstrap.min.css" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">', 
//   js: '<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/web/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous" defer></script>'
// };

// const bootstrapLocal = {
//   css: '<link rel="stylesheet" href="/styles/bootstrap.min.css">',
//   js: '<script src="/scripts/bootstrap.bundle.min.js" defer></script>'
// };

const clean = () => {
  return del([ 'web/dist/**/*', '!web/dist' ]);
}

// Remove html generated in source during build
const removeHtmlSrc = () => {
  return del([ 'web/src/*.html', '!web/src' ]);
}

const views = () => {
  return src('web/views/pages/*.pug')
    .pipe(
      pug({
        pretty: true,
        locals: siteData,
      })
    )
    .pipe(dest('web/src'));
};

// Create minified HTML, CSS and JS for web/distribution
const minifyFiles = () => {
  return src('web/src/*.html')
    .pipe(useref())
    
    //   Minify and create Sourcemap for JS files
    .pipe(gulpIf('*.js', sourcemaps.init()))
    .pipe(gulpIf('*.js', uglify()))
    .pipe(gulpIf('*.js', sourcemaps.write('.')))

    //   Minify and create Sourcemap for CSS files
    .pipe(gulpIf('*.css', sourcemaps.init()))
    .pipe(gulpIf('*.css', postcss([
      postcssCustomProperties({
        preserve: false
      }),
    ])))
    .pipe(gulpIf('*.css', purgecss({
      content: ['web/src/**/*.html'],
      safelist: ['show']
    })))
    .pipe(gulpIf('*.css', autoprefixer()))
    .pipe(gulpIf('*.css', cleanCSS()))
    .pipe(gulpIf('*.css', sourcemaps.write('.')))

    //    Minify HTML files
    // .pipe(gulpIf('*.html', replace(bootstrapLocal.css, bootstrapCdn.css)))
    // .pipe(gulpIf('*.html', replace(bootstrapLocal.js, bootstrapCdn.js)))
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(dest('web/dist'))
}

// Copy manifest, favicon and other root files
// const copy = () => {
//   return src([
//     'web/src/favicon.ico',
//     'web/src/sw.js',
//     'web/src/manifest.json'
//   ])
//   //   Minify root JS files
//   .pipe(gulpIf('*.js', uglify()))
//   .pipe(dest('web/dist'));
// }


// Create respoonsive images
const respImages = () => {
  return src('web/src/assets/images/**/*')
    .pipe(responsive({
      '*.{png,jpg}': [
        {
          quality: 70,
        },
      ]
    }))
    .pipe(dest('web/dist/assets/images'));
};

// Watch for file changes
const watchFiles = () => {
  // watch('web/src/*.html', minifyFiles);
  // watch('web/src/assets/images', respImages);
  watch('data.js', views);
  watch('web/views', views);
}

// build optimized files
// const build = series(clean, views, parallel(minifyFiles, respImages));
const build = series(clean, views, parallel(minifyFiles, respImages), removeHtmlSrc);


module.exports = {
  default: build,
  views,
  watchFiles
};