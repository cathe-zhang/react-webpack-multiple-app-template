import React from 'react'
import ReactDOM from 'react-dom'

console.log(123);


// import Header from '@/components/header'
import Header from '../../components/header';
// import Footer from '@/components/footer'
import Footer from '../../components/footer'
// import test from
// import TimePng from './../../assets/images/time.jpg';

import './index.scss'

console.log('Header',Header)

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
				header
        <Header title="home" />
        {/* <img src={TimePng} /> */}
        omepagehhhh
        <Footer />
      </div>
    )
  }
}

ReactDOM.render(
  <Index />,
  document.getElementById('root')
)
