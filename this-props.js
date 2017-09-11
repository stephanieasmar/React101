// Information that gets passed from one component to another is known as "props." 

// Every component has something called props.
// A component's props is an object. It holds information about that component.
// To see a component's props object, you use the expression 'this.props'

// EXAMPLE OF this.props BEING USED INSIDE A RENDER FUNCTION:
render() {
  console.log("Props object comin' up!");

  console.log(this.props);

  console.log("That was my props object!");

  return <h1>Hello world</h1>;
}