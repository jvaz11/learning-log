# Today I Learned

This file will contain a daily log of things I learned on a particular day. This may include surprising new information, information I want to remember, new connections with existing knowledge, and other interesting tidbits.

---

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