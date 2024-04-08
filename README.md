# modino-website
modino.io website

## How to add new article

In order to add new article which will be displayed on [https://modino.io/articles](https://modino.io/articles), a file with an `.mdx` extension has to be created in `src/articles` directory (name of the file does not matter).

### Header section
In the beginning of the file a section with a metadata has to be created. A structure of the section is as follows in the example below:
```js
---
title: "Modino.io - V4 Startup Force 2023" // title displayed on the tab in user's browser
tile_title: "V4 Startup Force, autumn edition 2023" // title displayed on the article tile on articles list and on the article page
summary: "On November 20–22, 2023, as the only startup from Poland, the Modino.io team took part in finals of the V4 Startup Force acceleration program. The event was held in the Hungarian capital city – Budapest." // a summary displayed before the main section of the article's text
meta_description: "Modino.io joins V4 Startup Force, autumn edition as the only startup from Poland. Learn more about the event and our participation." // description placed in the meta tag (for SEO purposes, should summarize the article)
date: "2023-12-19" // article's publish date
thumbnail: "./../images/articles/V4-group-autumn-2023.jpg" // source path for article's thumbnail, photo must be placed in src/images directory
slug: "v4-budapest-2023" // link to the article on which the article will be available (in this case, modino.io/articles/v4-budapest-2023)
type: "article" // hardcoded value which determines whether it is an article or job posting (just leave it as "article" :) )
category: "press" // article's categories as coma-separated list
---
```

### Article's text

After the header section, article text can be written using regular Markdown syntax.

To add an image, firstly add a file to `src/images` directory. In the article's text use Markdown syntax `![](./../images/image_name.ext)` where `image_name.ext` is a name of the image with its extension (e.g. `![](./../images/articles/V4-group-work-2023.jpeg)`).

**CAUTION:** All images' source paths must begin with `./../images/`, the same goes for a thumbnail photo path in the header section

To add a regular link use `[]()` syntax, e.g. `[Modino.io](https://modino.io)`.
