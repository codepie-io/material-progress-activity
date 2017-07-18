let mix = require('laravel-mix').mix;

let env = 'src/'; //test or src

mix.sass('resources/assets/sass/progress.scss',env+'css/progress.css');
//mix.js('resources/assets/js/dialog.js',env+'js/dialog.js');