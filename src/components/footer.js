import React, { Component } from 'react'

import './footer.scss'

export default class footer extends Component {
  render() {
    return (
      <div className='footer-comp'>
        <div className='footer-top'>
          <div className='links'></div>
          <div className='social-accounts'></div>
        </div>
        <div className='footer-bottom'>
          Copyright © 2017 Weleadin. All Rights Reserved. 微领地网络版权所有
        </div>
      </div>  
    )
  }
}
