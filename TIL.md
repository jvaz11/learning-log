# Today I Learned

This file will contain a daily log of things I learned on a particular day. This may include surprising new information, information I want to remember, new connections with existing knowledge, and other interesting tidbits.

---


## 2021-03-09 - 2021-03-09, Tuesday and Wednesday

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