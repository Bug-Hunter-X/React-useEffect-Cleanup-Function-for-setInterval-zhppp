```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect way to set the interval
    const intervalId = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);

    // Missing cleanup function to clear the interval
    // This will cause memory leaks and unexpected behavior

    return () => clearInterval(intervalId); 
  }, []);

  return (
    <div>Count: {count}</div>
  );
}
```