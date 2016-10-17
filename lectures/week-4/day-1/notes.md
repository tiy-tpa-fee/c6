
# Installing `create-react-app`:

    npm install -g create-react-app
    cd ~/Projects/or/whatever
    create-react-app hello-react

    cd hello-react
    npm start

## Some important Atom packages

- `language-babel`
- `linter-eslint`

Since we're using `language-babel`, don't install the `react` Atom extension.

## Take away

- React is a library for building interface composed of components.
  - Components can be boiled down to object with a `render()`
    method that returns DOM nodes (HTML), other components, or a mix.
  - Eventually when all the render functions are called you end up with
    the final DOM interface

- Webpack is a tool used under the hood by `create-react-app` that bundles
  our assets (JavaScript, HTML, CSS, images, anything) and also provides a
  development server with live-reloading.
