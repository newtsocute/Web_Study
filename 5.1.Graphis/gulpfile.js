const gulp = require("gulp")
const sass = require("gulp-sass")(require("sass"));

function styles(){

    return gulp.src("*.scss")
                .pipe(sass({outputStyle: "compressed"}).on("error", sass.logError))
                .pipe(gulp.dest("static/css"));
}

exports.styles = styles;