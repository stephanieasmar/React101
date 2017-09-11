// ***** SETTING INITIAL STATE ****** //
// A React component can access dynamic information in two ways: props and state.
// Unlike props, a component's state is not passed in from the outside. A component decides its own state.
// To make a component have state, give the component a state property. 
// This property should be declared inside of a constructor method, like this:
class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = { mood: 'decent' };
  }

  render() {
    return <div></div>;
  }
}

<Example />