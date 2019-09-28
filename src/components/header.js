import React, { Component } from 'react'
import css from './header.scss'
console.log('css',css)

import { navHeaderList } from '@/constants/navHeader';

export default class header extends Component {

  super() {
    
  }
  
  render() {
    return (
      <div className='header-comp'>
        这是头
        <div className='header-nav-list'>
          {
            navHeaderList.map((item,index)=>{
              return (
                <div className={`header-nav-item ${true?'active':''}`}>
                  {item.text}
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }
}
