import React from 'react';

class ClassComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      name: ''
    }
    this.age = '18'
  }

  handleChangeName() {
    this.setState({
      name: 'VAANH',
    })
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   return false
  // }

  componentDidMount() {
    window.addEventListener('resize', function () {
      console.log('=====resize=====')
    })
  }

  componentWillUnmount() {
    window.removeEventListener('resize')
  }

  render() {
    const { name } = this.state;
    const { checkModal } = this.props;
    let status = '';

    if (checkModal) {
      status = 'true'
    } else {
      status = 'false'
    }
    console.log('=======', checkModal);

    return (
      <React.Fragment>
        <div>this is class component {name} {this.age}</div>
        <div>this is check modal is: {status}</div>
        <div>{checkModal ? "true" : "false"}</div>
        <button type="button" onClick={this.handleChangeName.bind(this)}>Change name</button>
      </React.Fragment>
    )
  }
}

export default ClassComponent;
