import './index.css'
import {Component} from 'react'

class Welcome extends Component {
  state = {isLoggedIn: true}

  subscribeButton = () => {
    this.setState(prevState => {
      console.log(`${prevState.isLoggedIn}`)
      return {
        isLoggedIn: prevState.isLoggedIn <= 0 ? prevState.isLoggedIn + 1 : 0,
      }
    })
  }

  render() {
    const {isLoggedIn} = this.state
    const buttonText = isLoggedIn === 0 ? 'Subscribed' : 'Subscribe'
    return (
      <div className="container">
        <h1 className="heading">Welcome</h1>
        <p className="para">Thank you! Happy Learning</p>
        <button type="button" onClick={this.subscribeButton} className="button">
          {buttonText}
        </button>
      </div>
    )
  }
}

export default Welcome
