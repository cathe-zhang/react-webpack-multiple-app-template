import React from 'react'
import ReactDOM from 'react-dom'

import './index.scss'

class Index extends React.Component {
  render() {
    return (
      <div>这是react组件2</div>
    )
  }
}

ReactDOM.render(
  <Index />,
  document.getElementById('root')
)