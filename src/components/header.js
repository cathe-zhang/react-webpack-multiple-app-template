/**
 * @description 头部组件
 * @author cellerchan
 */
import React from 'react'
import './header.scss'

import { navHeaderList } from '../constants/navHeader';

export default class extends React.Component {

  constructor(props) {
		super(props)
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
