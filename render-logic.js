// A render() function must have a return statement. However, that isn't all that it can have.
// It can also be a fine place to put simple calculations that need to happen right before a component renders.
// SIMPLE EXAMPLE:
class Random extends React.Component {
  render() {

    // First, some logic that must happen
    // before rendering:
    const n = Math.floor(Math.random()*10+1);

    // Next, a return statement
    // using that logic:
    return <h1>The number is {n}!</h1>;
  }
}