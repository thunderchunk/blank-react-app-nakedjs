import React from 'react';

//basic hook in a functional component


const Function1 = () => {
    const [counter, setCounter] = React.useState(0);

    return (
        <div className="button-holder">
            <h4>You clicked {counter} times.</h4>
            <p>This is a hook function.</p>
            <button onClick={() => setCounter(counter + 1)}>{counter}</button>
        </div>
        
    );
  };
  
  export default Function1;


  //same function written differently.

  /*
  class Function1 extends React.Component {

    state = { counter: 0 };
  
    setCounter = () => {
      this.setState({ counter: this.state.counter + 1 });
    };
  
    render() {
      return (
        <div className="button-holder">
          <h4>You clicked {this.state.counter} times.</h4>
          <button onClick={this.setCounter}>{this.state.counter}</button>
        </div>
  
      );
    };
  };

  export default Function1;

*/