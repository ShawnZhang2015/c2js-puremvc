debug=$1
browserify js/app.js $debug > app-all.js
cp app-all.js src/app-all.js
