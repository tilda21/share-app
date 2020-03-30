import React, { Component } from 'react';
import axios from 'axios';


class Input extends Component {

  state = {
    information: ""
  }

  addNewInfo = () => {
    const task = {
      information: this.state.information
    }
    
    if(task.information && task.information.length > 0){
      axios.post('/api/newInfos', task)
        .then(res => {
          if(res.data){
            this.props.getNewInfos();
            this.setState({information: ""})
          }
        })
        .catch(err => console.log(err))
    }else {
      console.log('input field required')
    }
  }

  handleChange = (e) => {
    //console.log(e.target.id)
    let stateValue = e.target.id;
    this.setState({
      [stateValue]: e.target.value
    })
  }

  render() {
    let { information } = this.state;
    return (
      <div id='inputs'>
        <input id="information" type="text" onChange={this.handleChange} value={information} />
        <button onClick={this.addNewInfo}>Adicionar</button>
      </div>
    )
  }
}

export default Input;