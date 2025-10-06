import React from 'react';
import  { NavigationDots, SocialMedia } from '../components'

const AppWrap = (Component, idName, classNames) => function HOC() {
  return (
    <div id={idName} className={`app__container ${classNames}`} >
      <SocialMedia />

      <div className="app__wrapper app__flex">
        <Component />

        <div className="copyright">
            <p className="p-text">Powered by <a target='_blank' href="https://www.morelandmediadesign.com">
              Moreland Media Design</a></p>
            <p className="p-text">All Rights Reserved</p>
        </div>
      </div>
        <NavigationDots active={idName} />
    </div>
  )
}

export default AppWrap
