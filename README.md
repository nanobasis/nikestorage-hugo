# nikestorage-hugo

Source code for the website of [Nike Storage Center](http://www.nikestorage.com) generated with [hugo](https://github.com/gohugoio/hugo).

## Development

Serve the app locally on `http://localhost:1313` by running:

```
hugo server
```

Changes are reloaded in realtime.

Modify `markdown` files within `content/` for basic changes.

For more drastic changes, consider the following directories:

```
layouts/partials/
static/
themes/nikestorage/layouts/
```

## Deployment

Code is hosted on [Github Pages](https://pages.github.com/) and served from the `docs/` directory of this `master` branch.

First remove the old deployment:

```
rm -r docs
```

Next, check out the `docs/CNAME` file we just removed:

```
git checkout docs/CNAME
```

Next, build the new code:

```
hugo
```

Finally, commit the changes & push to Github:

```
git add .
git commit -m 'latest changes'
git push origin master
```
