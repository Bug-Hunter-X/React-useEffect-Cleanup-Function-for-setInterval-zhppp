# React useEffect Cleanup Function for setInterval

This example demonstrates a common mistake when using the `useEffect` hook with `setInterval` in React.  Forgetting to clear the interval in the cleanup function leads to memory leaks and unexpected behavior.

## Bug

The `bug.js` file shows a component that uses `setInterval` to update a counter. However, it fails to clear the interval when the component unmounts, leading to unnecessary updates after the component is removed from the DOM. This causes a memory leak as the interval continues to fire.

## Solution

The `bugSolution.js` file demonstrates the correct way to use `setInterval` with `useEffect`.  A cleanup function is provided to clear the interval using `clearInterval` when the component unmounts, preventing memory leaks and ensuring correct behavior.