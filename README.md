## Why react-inview?

Use the *Inview* React component to figure out when a DOM element is in user's
view. It will call a *Function* passed in the `onInview` property. As it turns
out, it's specific for DOM (shouldn't work for react-native). It requires two
dependencies, `jquery` and `jquery-inview` plugin.

## Demo

*Inview* React component can be used in an infinite scroll layout.

![infinite scroll](https://cloud.githubusercontent.com/assets/967155/8971390/4de7b93c-3626-11e5-8d1c-28e6504a255c.gif)

See the [example](./example) for more details.

## Usage

Install it using `npm`.

    npm install --save rxaviers/react-inview

Simple usage example.

```html
<Inview onInview={this.handleInview}>
  <span>I'm in your view</span>
</Inview>
```

## Properties (`props`)

**`onInview`** A *Function* that is triggered when the children element is in
view.

## License

MIT © [Rafael Xavier de Souza](http://rafael.xavier.blog.br)
