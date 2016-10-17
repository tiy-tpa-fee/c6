# React

React helps developers solve the problem of keeping the DOM properly reflecting the state of their applications. This is difficult even with modern tools like KVO systems like ember.

React's primary difference over other frameworks is that the architecture is designed to re-render the entirety of the application any time any state changes. This is similar to doing a full page refresh. React organizes everything that needs to be displayed using Components. So if you want to learn react, you need to learn components, and if you want to learn components you should read the rest of this lesson...

```js
import React, { Component } from 'react'

class MyComponent extends Component {

  render () {
    return <div>Hello {this.props.name}</div>
  }
}
```

```js
ReactDOM.render(<MyComponent name="John" />, document.body);
```

## Nesting

Nest components to separate concerns. See [multiple components](http://facebook.github.io/react/docs/multiple-components.html).

```js
var UserAvatar  = React.createClass({...});
var UserProfile = React.createClass({...});
```

```js
var Info = React.createClass({
  render() {
    return <div>
      <UserAvatar src={this.props.avatar} />
      <UserProfile username={this.props.username} />
    </div>;
  }
});
```

## States & Properties

Use [props](https://facebook.github.io/react/docs/tutorial.html#using-props) (this.props) to access parameters passed from the parent. Use [states](https://facebook.github.io/react/docs/tutorial.html#reactive-state) (this.state) to manage dynamic data.

```js
<MyComponent fullscreen={true} />
```

```js
// props
  this.props.fullscreen //=> true

// state
  this.setState({ username: 'dietz' });
  this.replaceState({ ... });
  this.state.username //=> 'dietz'
  ```

```js
render: function () {
  return <div className={this.props.fullscreen ? 'full' : ''}>
    Welcome, {this.state.username}
  </div>;
}
```


### Setting defaults

Pre-populates this.state.comments and this.props.name.

```js
React.createClass({
  getInitialState: function () {
    return { comments: [] };
  },

  getDefaultProps: function () {
    return { name: "Hello" };
  }
);
```

## Component API

These are methods available for Component instances. See [Component API](http://facebook.github.io/react/docs/component-api.html).

```js
ReactDOM.findDOMNode(c)  // 0.14+
React.findDOMNode(c)  // 0.13
c.getDOMNode()        // 0.12 below
```

```js
c.forceUpdate()
c.isMounted()

c.state
c.props

c.setState({ ... })
c.replaceState({ ... })

c.setProps({ ... })       // for deprecation
c.replaceProps({ ... })   // for deprecation

c.refs
```

### Component specs

Methods and properties you can override. See [component specs](http://facebook.github.io/react/docs/component-specs.html).

<table>
	<tr>
		<td colspan="2">render()</td>
	</tr>
	<tr>
		<td colspan="2">getInitialState()</td>
	</tr>
	<tr>
		<td colspan="2">getDefaultProps()</td>
	</tr>
	<tr>
		<td>mixins: [ ... ]</td>
		<td>Mixins... [more](#mixins)</td>
	</tr>
	<tr>
		<td>propTypes: { ... }</td>
		<td>Validation... [more](#property-validation)</td>
	</tr>
	<tr>
		<td>statics: { ... }</td>
		<td>Static methods</td>
	</tr>
	<tr>
		<td>displayName: "..."</td>
		<td>Automatically filled by JSX</td>
	</tr>
</table>


## Lifecycle

### Mounting

Before initial rendering occurs. Add your DOM stuff on didMount (events, timers, etc). See [reference](http://facebook.github.io/react/docs/component-specs.html#mounting-componentwillmount).

|  NOOP    					|  When
| ------------------------	| -----------------------------:|
| componentWillMount()		| Before rendering (no DOM yet)
| componentDidMount()		| After rendering


### Updating

Called when parents change properties and .setState(). These are not called for initial renders. See [reference](http://facebook.github.io/react/docs/component-specs.html#updating-componentwillreceiveprops).

|  NOOP    										|  When
| ------------------------						| -----------------------------:|
| componentWillReceiveProps(newProps={})		| Use setState() here
| shouldComponentUpdate(newProps={}, newState={}) | Skips render() if returns false
| componentWillUpdate(newProps={}, newState={})		| Can’t use setState() here
| componentDidUpdate(prevProps={}, prevState={})		| Operate on the DOM here


### Unmounting

Clear your DOM stuff here (probably done on didMount). See [reference](http://facebook.github.io/react/docs/component-specs.html#unmounting-componentwillunmount).

|  NOOP    						|  When
| ------------------------		| -----------------------------:|
| componentWillUnmount()		| Invoked before DOM removal



### Example: loading data

See [initial AJAX data](http://facebook.github.io/react/tips/initial-ajax.html).

```js
React.createClass({
  componentWillMount: function () {
    $.get(this.props.url, function (data) {
      this.setState(data);
    }.bind(this));
  },

  render: function () {
    return <CommentList data={this.state.data} />
  }
});
```

## DOM nodes

### References

Allows access to DOM nodes. See References.

```js
<input ref="myInput">
```

```js
this.refs.myInput
ReactDOM.findDOMNode(this.refs.myInput).focus()
ReactDOM.findDOMNode(this.refs.myInput).value
```

### DOM Events

Add attributes like onChange. See [events](https://facebook.github.io/react/docs/events.html).

```js
<input type="text"
    value={this.state.value}
    onChange={this.handleChange}
/>
```

```js
handleChange: function(event) {
  this.setState({ value: event.target.value });
}
```

## Two-way binding

Use [LinkedStateMixin](http://facebook.github.io/react/docs/two-way-binding-helpers.html) for easier two-way binding.

```js
Email: <input type="text" valueLink={this.linkState('email')} />
```

```js
React.createClass({
  mixins: [React.addons.LinkedStateMixin]
});
```

```js
this.state.email
```

## Property validation

### Basic types

Primitive types: `.string`, `.number`, `.func`, and `.bool`. See [propTypes](http://facebook.github.io/react/docs/reusable-components.html#prop-validation).

```js
React.createClass({
  propTypes: {
    email:      React.PropTypes.string,
    seats:      React.PropTypes.number,
    settings:   React.PropTypes.object,
    callback:   React.PropTypes.func,
    isClosed:   React.PropTypes.bool,
    any:        React.PropTypes.any,
  }
});
```

### Required types

Add `.isRequired`.

```js
propTypes: {
  requiredFunc:  React.PropTypes.func.isRequired,
  requiredAny:   React.PropTypes.any.isRequired,
```

### React elements

Use `.element`, `.node`.

```js
propTypes: {
  element:  React.PropTypes.element,  // react element
  node:     React.PropTypes.node,     // num, string, element
                                      // ...or array of those
```

### Enumerables

Use `.oneOf`, `.oneOfType`.

```js
propTypes: {
  enum:     React.PropTypes.oneOf(['M','F']),  // enum
  union:    React.PropTypes.oneOfType([        // any
              React.PropTypes.string,
              React.PropTypes.number ]),
```

### Arrays and objects

Use `.array[Of]`, `.object[Of]`, `.instanceOf`, `.shape`.

```js
propTypes: {
  array:    React.PropTypes.array,
  arrayOf:  React.PropTypes.arrayOf(React.PropTypes.number),
  object:   React.PropTypes.object,
  objectOf: React.PropTypes.objectOf(React.PropTypes.number),

  message:  React.PropTypes.instanceOf(Message),

  object2:  React.PropTypes.shape({
    color:  React.PropTypes.string,
    size:   React.PropTypes.number
  }),
```

### Custom validation

Supply your own function.

```js
propTypes: {
  customProp: function(props, propName, componentName) {
    if (!/matchme/.test(props[propName])) {
      return new Error('Validation failed!');
    }
  }
}
```

## Other features

### Class set

Manipulate DOM classes with [classnames](https://www.npmjs.org/package/classnames), previously known as React.addons.classSet. See [Class set](http://facebook.github.io/react/docs/class-name-manipulation.html).

```js
var cx = require('classnames');

render: function() {
  var classes = cx({
    'message': true,
    'message-important': this.props.isImportant,
    'message-read': this.props.isRead
  });

  return <div className={classes}>Great Scott!</div>;
}
```

### Propagating properties

See [Transferring props](http://facebook.github.io/react/docs/transferring-props.html).

```js
<VideoPlayer src="video.mp4" />
```

```js
var VideoPlayer = React.createClass({
  render: function() {
    /* propagates src="..." down to this sub component */
    return <VideoEmbed {...this.props} controls='false' />;
  }
});
```

### Mixins

See [addons](https://facebook.github.io/react/docs/addons.html) for some built-in mixins.

```js
var SetIntervalMixin = {
  componentWillMount: function() { .. }
}
```

```js
var TickTock = React.createClass({
  mixins: [SetIntervalMixin]
}
```

## [Top level API](https://facebook.github.io/react/docs/top-level-api.html)

```js
React.createClass({ ... })

React.isValidElement(c)

ReactDOM.findDOMNode(c) // 0.14+
ReactDOM.render(<Component />, domnode, [callback]) // 0.14+
ReactDOM.unmountComponentAtNode(domnode) // 0.14+

ReactDOMServer.renderToString(<Component />) // 0.14+
ReactDOMServer.renderToStaticMarkup(<Component />) // 0.14+
```

## JSX patterns

### Style shorthand

See [inline styles](https://facebook.github.io/react/tips/inline-styles.html).

```js
var style = { backgroundImage: 'url(x.jpg)', height: 10 };
return <div style={style}></div>;
```

### InnerHTML

See [dangerously set innerHTML](https://facebook.github.io/react/tips/dangerously-set-inner-html.html).

```js
function markdownify() { return "<p>...</p>"; }
<div dangerouslySetInnerHTML={{__html: markdownify()}} />
```

### Lists

```js
var TodoList = React.createClass({
  render: function() {
    function item(itemText) {
      return <li>{itemText}</li>;
    };
    return <ul>{this.props.items.map(item)}</ul>;
  }
});

```

## Misc

* [Animations](http://facebook.github.io/react/docs/animation.html)
* [Source](http://ricostacruz.com/cheatsheets/react.html)
