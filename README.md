# minima

*Minima is a one-size-fits-all Jekyll theme for writers*. It's Jekyll's default (and first) theme. It's what you get when you run `jekyll new`.

[Theme preview](https://jekyll.github.io/minima/)

![minima theme preview](/screenshot.png)

## Installation

Add this line to your Jekyll site's Gemfile:

```ruby
gem "minima"
```

And add this line to your Jekyll site:

```yaml
theme: minima
```

And then execute:

    $ bundle


## Contents At-A-Glance

Minima has been scaffolded by the `jekyll new-theme` command and therefore has all the necessary files and directories to have a new Jekyll site up and running with zero-configuration.

### Layouts

Refers to files within the `_layouts` directory, that define the markup for your theme.

  - `default.html` &mdash; The base layout that lays the foundation for subsequent layouts. The derived layouts inject their contents into this file at the line that says ` {{ content }} ` and are linked to this file via [FrontMatter](https://jekyllrb.com/docs/frontmatter/) declaration `layout: default`.
  - `home.html` &mdash; The layout for your landing-page / home-page / index-page.
  - `page.html` &mdash; The layout for your documents that contain FrontMatter, but are not posts.
  - `post.html` &mdash; The layout for your posts.

### Includes

Refers to snippets of code within the `_includes` directory that can be inserted in multiple layouts (and another include-file as well) within the same theme-gem.

  - `disqus_comments.html` &mdash; Code to markup disqus comment box.
  - `footer.html` &mdash; Defines the site's footer section.
  - `google-analytics.html` &mdash; Inserts Google Analytics module (active only in production environment).
  - `head.html` &mdash; Code-block that defines the `<head></head>` in *default* layout.
  - `header.html` &mdash; Defines the site's main header section.
  - `icon-* files` &mdash; Inserts github and twitter ids with respective icons.

### Sass

Refers to `.scss` files within the `_sass` directory that define the theme's styles.

  - `minima.scss` &mdash; The core file imported by preprocessed `main.scss`, it defines the variable defaults for the theme and also further imports sass partials to supplement itself.
  - `minima/_base.scss` &mdash; Resets and defines base styles for various HTML elements.
  - `minima/_layout.scss` &mdash; Defines the visual style for various layouts.
  - `minima/_syntax-highlighting.scss` &mdash; Defines the styles for syntax-highlighting.

### Assets

Refers to various asset files within the `assets` directory.
Contains the `main.scss` that imports sass files from within the `_sass` directory. This `main.scss` is what gets processed into the theme's main stylesheet `main.css` called by `_layouts/default.html` via `_includes/head.html`.

This directory can include sub-directories to manage assets of similar type, and will be copied over as is, to the final transformed site directory.


## Usage

### Customization

To override the default structure and style of minima, simply create the concerned directory at the root of your site, copy the file you wish to customize to that directory, and then edit the file.
e.g., to override the [`_includes/head.html `](_includes/head.html) file to specify a custom style path, create an `_includes` directory, copy `_includes/head.html` from minima gem folder to `<yoursite>/_includes` and start editing that file.

The site's default CSS has now moved to a new place within the gem itself, [`assets/main.scss`](assets/main.scss). To **override the default CSS**, the file has to exist at your site source. Do either of the following:
- Create a new instance of `main.scss` at site source.
  - Create a new file `main.scss` at `<your-site>/assets/`
  - Add the frontmatter dashes, and
  - Add `@import "minima";`, to `<your-site>/assets/main.scss`
  - Add your custom CSS.
- Download the file from this repo
  - Create  a new file `main.scss` at `<your-site>/assets/`
  - Copy the contents at [assets/main.scss](assets/main.scss) onto the `main.scss` you just created, and edit away!
- Copy directly from Minima 2.0 gem
  - Go to your local minima gem installation directory ( run `bundle show minima` to get the path to it ).
  - Copy the `assets/` folder from there into the root of `<your-site>`
  - Change whatever values you want, inside `<your-site>/assets/main.scss`

--

### Change default date format

You can change the default date format by specifying `site.minima.date_format`
in `_config.yml`.

```
# Minima date format
# refer to http://shopify.github.io/liquid/filters/date/ if you want to customize this
minima:
  date_format: "%b %-d, %Y"
```

--

### Enabling comments (via Disqus)

Optionally, if you have a Disqus account, you can tell Jekyll to use it to show a comments section below each post.

To enable it, add the following lines to your Jekyll site:

```yaml
  disqus:
    shortname: my_disqus_shortname
```

You can find out more about Disqus' shortnames [here](https://help.disqus.com/customer/portal/articles/466208).

Comments are enabled by default and will only appear in production, i.e., `JEKYLL_ENV=production`

If you don't want to display comments for a particular post you can disable them by adding `comments: false` to that post's YAML Front Matter.

--

### Enabling Google Analytics

To enable Google Anaytics, add the following lines to your Jekyll site:

```yaml
  google_analytics: UA-NNNNNNNN-N
```

Google Analytics will only appear in production, i.e., `JEKYLL_ENV=production`

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/jekyll/minima. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](http://contributor-covenant.org) code of conduct.

## Development

To set up your environment to develop this theme, run `script/bootstrap`.

To test your theme, run `script/server` (or `bundle exec jekyll serve`) and open your browser at `http://localhost:4000`. This starts a Jekyll server using your theme and the contents. As you make modifications, your site will regenerate and you should see the changes in the browser after a refresh.

## License

The theme is available as open source under the terms of the [MIT License](http://opensource.org/licenses/MIT).
