# Setup for orangeiceberg.com

## Requirements:

* [Hugo](https://gohugo.io/)

On OS X, if you have [Homebrew](http://brew.sh/), just run:

```
$ brew update && brew install hugo
```

Clone repository

```
$ git clone git@github.com:orangeiceberg/orangeiceberg.com.git
$ cd orangeiceberg.com
$ mkdir static
```
## Start server

```
$ hugo server
```
You can find your site on [http://localhost:1313/](http://localhost:1313/)

## Add content

If you want to add new page eg.(promo.html) fallow this steps:

```
$ hugo new promo.md
```
In this step you create Markdown file inside `content/promo.md`,
edit front matter inside `promo.md`

```
+++
date = "2016-02-14T16:11:58+05:30"
title = "Page Title"
type = "promo"
+++

Your text goes here.
```

## Add layout

Under the `themes/oi/layouts` make directory `promo` with file `single.html` in it, and edit `single.html` how you want, that is your layout for `promo.md`.

Now you can find your page on `http://localhost:1313/promo`.

## Put your page online

When you pleased with your changes add, commit and push your branch. After merge to master:

```
$ git co master
$ git pull
$ rm -rf public/*
$ hugo
```

Hugo automatically create or fill in directory `public` with all code necessary for deployment.

Add, commit and push new changes on master branch.

Now we need to push that content from `public` to `gh-pages` branch.

```
$ git subtree push --prefix=public git@github.com:orangeiceberg/orangeiceberg.com.git gh-pages
```
And that is it.
