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

## Deploying changes

After your pull request is merged to master:

```
$ ./bin/deploy
```

Note that the script will regenerate public dir from scratch. If there are changes to public dir that haven't been committed it will halt deployment and ask you to commit those changes first.
