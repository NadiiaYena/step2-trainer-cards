'use strict';

import gulp from "gulp";
import concat from "gulp-concat";
import minify from "gulp-minify";
import cleanCSS from "gulp-clean-css";
import clean from "gulp-clean";
import browserSync from "browser-sync";
import imagemin from 'gulp-imagemin';
import dartSass from "sass";
import gulpSass from "gulp-sass";
import autoprefixer from "gulp-autoprefixer";
import plumber from "gulp-plumber";
import favicons from 'gulp-favicons';


const sass = gulpSass(dartSass);

const html = () => {
  return gulp.src("./src/*.html").pipe(gulp.dest("./dist"));
};

const css = () => {
  return gulp
    .src("./src/styles/**/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(autoprefixer())
    .pipe(concat("styles.css"))
    .pipe(cleanCSS({ compatibility: "ie8" }))
    .pipe(gulp.dest("./dist/styles"));
};

const js = () => {
  return gulp
    .src("./src/scripts/**/*.js")
    .pipe(concat("script.js"))
    .pipe(
      minify({
        ext: {
          src: ".js",
          min: ".min.js",
        },
      })
    )
    .pipe(gulp.dest("./dist/scripts"));
};

const image = () => {
    return gulp.src("./src/images/**/*.*")
        .pipe(imagemin())
        .pipe(gulp.dest("./dist/images"));
};

const fontTaskHandler = () => {
	return gulp.src("./src/fonts/**/*.*")
    .pipe(plumber()) 
    .pipe(gulp.dest("./dist/fonts"));
};

const favicon = () => {
    return gulp.src("./src/favicons/**/*.*")
    .pipe(favicons({
        appName: 'My App',
        appDescription: 'This is my application',
        developerName: 'My Name',
        developerURL: 'http://mywebsite.com/',
        background: '#020307',
        path: 'favicons/',
        url: 'http://mywebsite.com/',
        display: 'standalone',
        orientation: 'portrait',
        scope: '/',
        start_url: '/?homescreen=1',
        version: 1.0,
        logging: false,
        html: 'index.html',
        pipeHTML: true,
        replace: true,
    }))
    .pipe(gulp.dest("./dist/favicons"));
}


const cleanDist = () => {
   return gulp.src("./dist", { read: false, allowEmpty: true }).pipe(
        clean({ force: true })
      )
};

const server = () => {
  browserSync.init({
    server: {
      baseDir: "./dist",
    },
  });
};

const watcher = () => {
  gulp.watch("./src/*.html", html).on("all", browserSync.reload);
  gulp
    .watch("./src/styles/**/*.{scss,sass,css}", css)
    .on("all", browserSync.reload);
  gulp.watch("./src/scripts/**/*.js", js).on("all", browserSync.reload);
  gulp.watch("./src/images/**/*.*", image).on("all", browserSync.reload);
  gulp.watch("./src/favicons/**/*.*", favicon).on("all", browserSync.reload);

};

gulp.task("html", html);
gulp.task("style", css);
gulp.task("script", js);
gulp.task("cleanDist", cleanDist);
gulp.task("browser-sync", server);
gulp.task("image", image);
gulp.task("fontTaskHandler", fontTaskHandler);
gulp.task("favicons", favicon);


gulp.task("build", gulp.series(cleanDist, gulp.parallel(html, css, js, image, fontTaskHandler, favicon)));

gulp.task(
  "dev",
  gulp.series(
      cleanDist,
    gulp.parallel(html, css, js, image, fontTaskHandler,favicon),
    gulp.parallel(server, watcher)
  )
);

