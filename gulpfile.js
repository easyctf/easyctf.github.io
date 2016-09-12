var gulp = require("gulp");
var less = require("gulp-less");
var path = require("path");
var watch = require("gulp-watch");

gulp.task("less", function () {
	return gulp.src("./less/bootstrap.less")
		.pipe(less({
			paths: [ path.join(__dirname, "less", "mixins") ]
		}))
		.pipe(gulp.dest("./css"));
});

gulp.task("watch", function() {
	return gulp.watch("./less/**/*.less", ["less"]);
});