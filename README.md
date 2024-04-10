# modino-website
modino.io website

## How to add new article

In order to add new article which will be displayed on [https://modino.io/articles](https://modino.io/articles), a file with an `.mdx` extension has to be created in `src/articles` directory (name of the file does not matter).

### Header section
In the beginning of the file a section with a metadata has to be created. A structure of the section is as follows in the example below:
```js
---
title: "Modino.io - V4 Startup Force 2023"
tile_title: "V4 Startup Force, autumn edition 2023"
summary: "On November 20–22, 2023, as the only startup from Poland, the Modino.io team took part in finals of the V4 Startup Force acceleration program. The event was held in the Hungarian capital city – Budapest."
meta_description: "Modino.io joins V4 Startup Force, autumn edition as the only startup from Poland. Learn more about the event and our participation."
date: "2023-12-19"
thumbnail: "./../images/articles/V4-group-autumn-2023.jpg"
slug: "v4-budapest-2023"
type: "article"
category: "press"
---
```
Description of the fields in the header section:
  - `title` - title displayed on the tab in user's browser,
  - `tile_title` - title displayed on the article tile on articles list and on the article page,
  - `summary` - a summary displayed on the article's tile, it is not displayed in the article's text when viewing the article,
  - `meta_description` - description placed in the meta tag which should summarize the article (for SEO purposes),
  - `date` - publication date for the article,
  - `thumbnail` - source path for article's thumbnail, photo must be placed in `src/images` directory
  - `slug` - link to the article on which the article will be available (in this case, `modino.io/articles/v4-budapest-2023`),
  - `type` - hardcoded value which determines whether it is an `article` or `job-offer` (use `article` in this case),
  - `category` - article's categories as coma-separated list, e.g. `case-study`, `press` or `blog`.

### Article's text

After the header section, article text can be written using regular Markdown syntax.

To add an image, firstly add a file to `src/images` directory. In the article's text use Markdown syntax `![](./../images/image_name.ext)` where `image_name.ext` is a name of the image with its extension (e.g. `![](./../images/articles/V4-group-work-2023.jpeg)`).

**CAUTION:** All images' source paths must begin with `./../images/`, the same goes for a thumbnail photo path in the header section

To add a regular link use `[]()` syntax, e.g. `[Modino.io](https://modino.io)`.


## How to add new job offer

The rules are the same as in the case of creating new article, but files with the job offer's text should be placed in `src/jobs`.

### Header section
Fields that need to be filled in case of a job offer are as follows:
```js
---
title: "Internship program"
meta_description: "If you're passionate about software engineering and love solving UX/UI or engineering challenges, our internship could be a great fit for you."
slug: "internship-program"
type: "job-offer"
---
```
Description of the fields:
- `title` - name of a job, will be displayed on the job list and when viewing the job,
- `meta_description` - description placed in the meta tag which should summarize the job offer (for SEO purposes),
- `slug` - link to the job offer on which it will be available (in this case, `modino.io/jobs/internship-program`),
- `type` -  hardcoded value which determines whether it is an `article` or `job-offer` (use `job-offer` in this case).
