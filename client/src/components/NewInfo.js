import React, {Component} from 'react';
import axios from 'axios';

import Input from './Input';
import ListNewInfo from './ListNewInfo';

class NewInfo extends Component {

  state = {
    newInfos: []
  }

  componentDidMount(){
    this.getNewInfos();
  }

  getNewInfos = () => {
    axios.get('/api/newInfos')
      .then(res => {
        if(res.data){
          this.setState({
            newInfos: res.data
          })
        }
      })
      .catch(err => console.log(err))
  }

  deleteNewInfo = (id) => {
    axios.delete(`/api/newInfos/${id}`)
      .then(res => {
        if(res.data){
          this.getNewInfos()
        }
      })
      .catch(err => console.log(err))
  }

  render() {
    let { newInfos } = this.state;
    //console.log(newInfos);
    return(
      <div>
        <h1>Informação Partilhada</h1>
        <Input getNewInfos={this.getNewInfos}/>
        <ListNewInfo newInfos={newInfos} deleteNewInfo={this.deleteNewInfo}/>
      </div>
    )
  }
}

export default NewInfo;