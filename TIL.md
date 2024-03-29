# Today I Learned

This file will contain a daily log of things I learned on a particular day. This may include surprising new information, information I want to remember, new connections with existing knowledge, and other interesting tidbits.

---

## 2021-06-14 - 2021-06-16, Monday - Wednesday

I've been brushing up on Python concepts that I had either forgotten or learned. This course is great: https://www.youtube.com/watch?v=ZDa-Z5JzLYM&list=PL-osiE80TeTsqhIuOqKhwlXsIBIdSeYtc

I didn't have a great handle on how class methods, inheritance, and subclassing worked. Now I feel more confident about those things.

The course covered a lot of ground and I didn't take notes for most of it, but here are some learning highlights from one of the videos I watched today:

### @classmethod decorator
The `@classmethod` decorator was one that showed up in the API client I was working with. This decorator changes a function within a class so that the class is passed in as the first argument (as opposed to the instance, `self`, like so:

```python
class MyClass:
    def some_method(self, another_arg):
        pass
```    
    
Instead of `self`, the convention is to name the first argument `cls`, like so:

```python
class MyClass:
    def some_class_method(cls, another_arg):
        pass
```

### help() function 

This function takes a class, and gives a lot of neat info about the class, including the Method Resolution Order, which lists any classes that are being inherited and the order in which it will try to resolve each method.

Run `print(help(SomeClass))` to use it.

Here's a screenshot from the course: https://cdn.zappy.app/c517f05afb2f96550716ca0669b4e441.png

## 2021-04-07, Wednesday

More fun with higher-order components! Using the hover logic already in `Tooltip.js`, we built a higher-order component (`withHover`) to decouple all the "hovering" and "unhovering" work. This component takes a `Component` as its argument, and conveniently returns a div with the "mouseOver" and "mouseOut" methods attached to it. The `Component` that was passed to it is rendered within this div.

This was a bit mind-bendy, and I have a feeling there are likely newer, cleaner ways to implement similar functionality in React (perhaps the course will go over them later?). Whether that's true or not, it's neat to see how hovering functionality can be made reusable. 

One key thing to consider is the way props need to be passed through from the "initial" component to the "higher-order component" (where it will exist as a wrapped component). Using object destructuring is the go-to convention here. Example: https://cdn.zappy.app/92fe017e2e8f51dcff348097288b693f.png

## 2021-03-23 and 2021-03-24, Tuesday and Wednesday

I sometimes get the purpose of "props" vs. "state" mixed up. The key difference based on my current understanding is that state is specific and local to the component, while props are passed into the component wherever the component is being invoked for eventual rendering.

The course is now discussing the concept of "Higher-Order Components". Similar to the concept of higher-order functions, which JavaScript supports, it's the idea that a component can accept a component and return a component that is transformed in some way. This is a tool and pattern we can use to make more powerful reusable components. This pattern is also seen in React router and React hooks. From the [docs](https://reactjs.org/docs/higher-order-components.html): "Whereas a component transforms props into UI, a higher-order component transforms a component into another component." One problem with higher-order components is that we trust them to pass a set of props to the wrapper component whenever it renders. There's an "inversion of control" that happens here, and we have to be careful to avoid naming collisions.

The course continued with an interesting exercise: building a tooltip component that wraps around an element. I found it interesting that the tooltip component contains the "main" element, and not the other way around. The special `children` prop comes in handy here because without it, the "main" element doesn't show up.

## 2021-03-17, Wednesday

Did a similar refactor as yesterday, this time with the "profile list" element. It made the code much more readable. I'm thinking this is part of the magic of React—abstracting elements into components, to then compose a UI from components within components within components with components. Very nice, Juan, good job. You're getting it! Why are you typing internal dialogue to yourself? It's just one of those days. Oh, ok.

The next requirement in the project: add a "reset" button to the "Results" view, that will clear the state of the battle. But which state do we need to reset? At first I thought I should reset the state of the `Results` component, but it turns out we'll need to update the state of the `Battle` component. This is done by passing a function expression as a prop to the `Results` component which sets the state of the component back to the initial value, causing a re-render of the UI which follows the conditional logic in place for the respective components. Neat!

On default props: setting default props allows props to have a value even when a value isn't explicitly set. In class components, you define defaults props similarly to propTypes, `MyComponent.defaultProps = { prop: defaultValue}`. Since function components are just functions, you can use the regular syntax for default parametersm, example: `function StarRating ({ color = '#ECB244' }) {}` 

## 2021-03-16, Tuesday

More progress on the "Battle" project in the React course. I abstracted the "player container" component and the "repo card" component into a generic "Card" component, which was an interesting exercise.

As I suspected, the `props.children` keyword came in handy here. It allowed for "custom content" to be inserted inside an instance of the new, reusable `Card` component. `children` is used by setting it as one of the props in the component, and inserting it as an expression `{children}`.

![](https://cdn.zappy.app/aa4bd0b7c626c4a628567a25616510c3.png)

In the implementation of an instance, instead of using a single closed tag `<Card />`, use an opening and closing tag, `<Card>` and `</Card>`, and insert whatever "custom content/elements" you want in between these tags—this content will be referenced as `children` in the `Card` component.

![](https://cdn.zappy.app/2524d437ef83e6304508b2fe72aee87b.png)

Cool stuff today!

## 2021-03-15, Monday

Continued to build out the "Battle" UI, starting with the cards for the winner and the loser of the battle. I'm noticing a pattern often used to conditionally render an element that relies on the logical `&&` operator ([screenshot](https://cdn.zappy.app/79c3d0071927392da1018aca2a629681.png) of an example).

In JavaScript, when you have something like `somethingTruthy && anotherTruthyThing && expression`, the `expression` is conveniently evaluated. On the other hand, `somethingFalsy && expression` evaluates to `false`.

`props.children` allows you to access the elements between the opening and closing tag of a component. This may come in handy when creating re-usable components.

## 2021-03-12, Friday

Most of today was building out the API (https://github.com/jvaz11/learning-log/blob/main/Courses/ui.dev%20-%20Learn%20React/app/utils/api.js) that will serve the information to the "Battle" app. Looking forward to building out the UI for these in the next section of the course!
## 2021-03-11, Thursday

To answer my own question from the last post, I found this quote in a blog post: "Handling state was only doable in a class component until recently, but from React 16.8, React Hook useState was introduced to allow developers to write stateful functional components." This is why the course is using class components in cases where state is needed. The course is deliberately covering "classic React" concepts first before going into more modern tools and patterns, so this makes sense.

I worked through the first part of the project that builds out the "battle" functionality ([commit](https://github.com/jvaz11/learning-log/commit/b0cba1d8423c45a7b420277657cad0deab52affd)), which takes two Github usernames from two fields and compares their stats. One tricky thing to keep in mind is that `onChange` and `onSubmit` accept function expressions. The project follows the "controlled components" pattern in that the value of an input field in a form is tied to state that lives in the class component. `onChange` must be set up to update the state, which thus causes a re-render. This means the value in the field is "going through the React tubes" in a way (that's how my brain remembers the flow/structure of the logic).

When thinking about whether "something" should be a prop on a component, it's a good idea to avoid making something a prop if it can already be derived from other existing props. It doesn't make sense to add extra props that we then have to manage.

## 2021-03-09 - 2021-03-10, Tuesday and Wednesday

Created another set of components in the "Learn React" project, all living under a main "Battle" component.

Question: I wonder how the author of the course decided which components should be class-based vs functional. It seems the "big" component is a class, and the components that live under it are functional. I suspect it has something to do with state management needs.

Further along in the project, we're introducing form elements. State is handled differently in forms. Form state lives in the DOM, which is different from regular React component state, which lives in the component. 

> With “Controlled Components”, you do things the “React way”. The form state lives inside of the component’s state and the value of the input field is whatever the value on the component state is. If you want to update the input field, you have to update the component state.

> “Uncontrolled Components” are the opposite. You don’t have any component state and instead, the form state lives inside of the DOM (or the input) field. Then, whenever you need to get the state, you grab it from the DOM.

General recommendation is to use Controlled Components. One big reason: if you want to update the UI based on a piece of form state, you need to use Controlled components or else the UI won’t update.
## 2021-03-08, Monday

Spent some time reading through the official React documentation (https://reactjs.org/docs)—specifically the "step-by-step" guide that walks through each concept in depth. Most of it was review, but I stumbled on some pieces of info that wasn't covered in the ui.dev course:

- Props are immutable. All React components must act like pure functions. When things have to change, “state” comes to the rescue.
- State is similar to props, but it is private and fully controlled by the component.
- Whenever you use `.map` to create a list in React, you need to make sure that you add a **unique** keyprop to each list item. This helps with efficient rendering of each component.
- PropTypes(capitalP) is what we call the object being exported from (example)  `theprop-typespackage.propTypes` (lower casep) is the name of the static property we add to our component.

Also reviewed and took notes on component lifecycle and associated methods:
- mounting
    - `componentDidMount`
        - invoked on initial render
        - a good place to set inital state
        - initial state
        - rendering a DOM node
- state changes
    -   `componentDidUpdate`
        - invoked when a component's local state changes or when it receives new props. not invoked on initial render.
        - takes `prevProps` and `prevState`, which allow for building logic to determine whether a state change is needed. Invoking `this.setState` will trigger a re-render
- unmounting
    - clean up, remove listeners
    - `componentWillUnmount`
        - runs right before a component leaves the DOM