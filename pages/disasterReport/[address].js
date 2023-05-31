import { withRouter } from 'next/router'
import { Component } from 'react'

class Page extends Component {
  render() {
    const { address } = this.props.router.query

    // Now you can use id in your component

    return <h3>Your id is {address}</h3>
  }
}

export default withRouter(Page)
