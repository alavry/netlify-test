import React from 'react'
import avatar from '../img/avatar.png'
import './officer.sass'

class Officer extends React.Component {
  render() {
    return (<div class="officer">
            <img id="avt" alt={this.props.name} src={this.props.img}></img>
              <h1 class="officer-name">{this.props.name}</h1>
              <p class="officer-role has-text-weight-semibold">{this.props.role}</p>
              <a href={`mailto:${this.props.email}`} class="button">Contact</a>
          </div>)
  }
}
Officer.defaultProps = {
  name: "",
  img: avatar,
  role: "",
  email: ""
}

export default Officer
