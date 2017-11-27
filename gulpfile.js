'use strict'

const gulp = require('gulp')
const cache = require('gulp-cached')
const htmlmin = require('gulp-htmlmin')
const image = require('gulp-image')
const mustache = require('gulp-mustache')
const remember = require('gulp-remember')
const rename = require('gulp-rename')

const subtasks = []

const subtask = (name, files, transform) => {
  const buildTaskId = `build:${name}`
  gulp.task(buildTaskId, () => transform(gulp.src(files)))
  gulp.task(`watch:${name}`, [buildTaskId], () => gulp.watch(files, [buildTaskId]))
  subtasks.push(name)
}

subtask('html', './src/*.mustache', (s) => s
  .pipe(cache('html'))
  .pipe(mustache())
  .pipe(rename({ extname: '.html' }))
  .pipe(htmlmin({
    collapseBooleanAttributes: true,
    collapseInlineTagWhitespace: true,
    collapseWhitespace: true,
    decodeEntities: true,
    removeComments: true,
    removeEmptyAttributes: true,
    removeRedundantAttributes: true,
    sortAttributes: true,
    sortClassName: true
  }))
  .pipe(remember('html'))
  .pipe(gulp.dest('./dist')))

subtask('img', './src/img/*', (s) => s
  .pipe(cache('img'))
  .pipe(image())
  .pipe(remember('img'))
  .pipe(gulp.dest('./dist/img')))

gulp.task('build', subtasks.map((t) => `build:${t}`))
gulp.task('watch', subtasks.map((t) => `watch:${t}`))