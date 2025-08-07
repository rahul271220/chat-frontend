import React from "react";


class ProgressClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }
   handleSelect(e) {
    console.log(e);
    this.setState(
        (prevState) => {
          const newCount = prevState.count + 1;
          // Call the parent's function with the updated value
          this.props.updateCounter(newCount);
          return { count: newCount };
        }
      );
    this.props.updateCounter(this.state.count);
  }
    render() {
        return  <div>hello
            {this.state.count}
            <button onClick={(e)=> {
                this.handleSelect(e);
            }}>click me</button>
        </div>
    }
}

export default ProgressClass