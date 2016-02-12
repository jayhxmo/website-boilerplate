#Website Boilerplate
A simple boilerplate that includes SASS (Bourbon, Neat) and jQuery to use when creating websites, put together by <a href="https://github.com/jayhxmo">Jay Mo (@jayhxmo).</a>


##Getting Started
It's quite simple. Here are some ways to start.
* [Download](https://github.com/jayhxmo/boilerplate/archive/master.zip) the latest version
* Clone the repository: `https://github.com/jayhxmo/website-boilerplate.git`

Requirements
* [SASS](http://sass-lang.com/) installed on your machine
* Positive Attitude

Once you have the files, just add them to your project directory.

##What's Included
Here are some components you get to start off with
```
.gitignore
index.html
ss/
├── base/
│	├── _base.scss
│	├── _normalize.scss
│	├── _variables.scss
│	├── _initialize.scss
│	├── _typography.scss
│
├── components/
│	├── _all.scss
│	├── _buttons.scss
│	├── _form.scss
│	├── _grid.scss
│	├── grid/
│	│	├── _grid-settings.scss
│	│	├── *other important things (Neat) that you shouldn't worry about*
│
├── lib/
│	├── *many important things that you shouldn't worry about*
js/
├── jquery.min.js
├── jquery.easing.min.js
├── jquery.plusanchor.min.js
```
Note that `index.html` is only linked, and has no content. You should add your own HTML in there.

##How to Use
All files are linked, so all you have to do is write your code as you wish and add more components in `ss/components/` as you build your website. If you're creating new files, make sure to import them in `ss/components/_all.scss`.

Components are in the `ss/components/` folder, while things like variables & typography are set in `ss/base/`. The `lib/` folder provides you with helpful functions and mixins.

To compile, simply run this command in CMD / Terminal.
```
sass --watch ss/main.scss:ss/main.css
```
If you're compiling for production, it's recommended to add the `--style compressed` to minify & get rid of large comments. So, the command might look something like this.

```
sass --watch main.scss:main.css --style compressed
```

##Notes
This is a simple personal project made for & by me to make my websites quickly and spend less time on doing repetitive & tedious things. I'll be updating this as I run into problems / issues. Meanwhile, feel free to give a star or a follow on [GitHub @jayhxmo](https://github.com/jayhxmo) & [Twitter @jayhxmo](https://twitter.com/jayhxmo) :)