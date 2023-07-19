---
heroImage: https://blog.openreplay.com/images/doing-animations-with-react-reveal/images/hero.png
title: React Reveal
pubDate: 2023-07-11T05:31:59.971Z
description: Animation with react reveal
---

If you are looking for a simple and elegant way to add some animation effects to your React app, you might want to check out the react-reveal library. React-reveal is a collection of components that use CSS transitions and transforms to create stunning animations for your web pages. You can use react-reveal to animate elements as they enter or leave the viewport, or as they scroll into view. You can also apply different effects such as fade, zoom, flip, rotate, bounce, slide, and more.

In this blog post, I will show you how to install and use react-reveal in your React project. I will also demonstrate some of the effects that you can achieve with this library and how to customize them to suit your needs.

## Installation

To install react-reveal, you can use npm or yarn:

```shell
npm install react-reveal --save
# or
yarn add react-reveal
```

## U﻿sage

\
To use react-reveal, you need to import the components that you want to use from the library and wrap them around the elements that you want to animate. For example, if you want to fade in a heading element, you can do something like this:

```tsx
import React from "react"
import Fade from "react-reveal/Fade"

function App() {
  return (
    <div className="App">
      <Fade>
        <h1>Hello, world!</h1>
      </Fade>
    </div>
  )
}

export default App
```

This will make the heading element appear with a fade-in effect when it enters the viewport. You can also specify some props to control the duration, delay, direction, and distance of the animation. For example, if you want to make the heading element fade in from the left with a 2-second delay and a 100px distance, you can do something like this:

```tsx
import React from "react"
import Fade from "react-reveal/Fade"

function App() {
  return (
    <div className="App">
      <Fade left delay={2000} distance="100px">
        <h1>Hello, world!</h1>
      </Fade>
    </div>
  )
}

export default App
```

You can also use other components from react-reveal to create different effects. For example, if you want to zoom in a paragraph element, you can do something like this:

```tsx
import React from "react"
import Zoom from "react-reveal/Zoom"

function App() {
  return (
    <div className="App">
      <Zoom>
        <p>Lorem ipsum dolor sit amet...</p>
      </Zoom>
    </div>
  )
}

export default App
```

You can also combine multiple components to create more complex animations. For example, if you want to slide in a list of items from the bottom and then flip them one by one, you can do something like this:

```tsx
import React from "react"
import Slide from "react-reveal/Slide"
import Flip from "react-reveal/Flip"

function App() {
  return (
    <div className="App">
      <Slide bottom cascade>
        <ul>
          <Flip top>
            <li>Item 1</li>
          </Flip>
          <Flip top>
            <li>Item 2</li>
          </Flip>
          <Flip top>
            <li>Item 3</li>
          </Flip>
        </ul>
      </Slide>
    </div>
  )
}

export default App
```

## Customization

React-reveal also allows you to customize the animation effects by using custom CSS classes or inline styles. You can use the `className` prop or the `style` prop to pass your own styles to the components. For example, if you want to change the color of the heading element when it fades in, you can do something like this:

```tsx
import React from "react"
import Fade from "react-reveal/Fade"

function App() {
  return (
    <div className="App">
      <Fade style={{ color: "red" }}>
        <h1>Hello, world!</h1>
      </Fade>
    </div>
  )
}

export default App
```

You can also use the `onReveal` prop or the `ref` prop to access the DOM element that is being animated and manipulate it with JavaScript. For example, if you want to log a message when the paragraph element is zoomed in, you can do something like this:

```tsx
import React from "react"
import Zoom from "react-reveal/Zoom"

function App() {
  return (
    <div className="App">
      <Zoom onReveal={() => console.log("Zoomed in!")}>
        <p>Lorem ipsum dolor sit amet...</p>
      </Zoom>
    </div>
  )
}

export default App
```

## Conclusion

React-reveal is a powerful and easy-to-use library that can help you add some spice to your React app with minimal effort. You can choose from a variety of components and effects to create engaging and dynamic web pages. You can also customize the animations with your own styles and logic to fit your design and functionality.

If you want to learn more about react-reveal, you can visit its official website: https://www.react-reveal.com/. There you can find more examples, documentation, and source code. You can also check out its GitHub repository: https://github.com/rnosov/react-reveal.

I hope you enjoyed this blog post and found it useful. If you have any questions or feedback, feel free to leave a comment below. Happy coding!
