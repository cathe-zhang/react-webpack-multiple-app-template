import React from 'react'
import ReactDOM from 'react-dom'
import Header from './../../components/header';
import TimePng from './../../assets/images/time.jpg'

import './index.scss'

class Index extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    document.title = 'home'
  }
  render() {
    return (
      <div>
        <Header/>
        <img src={TimePng} />
        omepagehhhh

      </div>
    )
  }
}

ReactDOM.render(
  <Index />,
  document.getElementById('root')
)