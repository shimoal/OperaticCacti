import React from 'react'
import NavLink from './NavLink'

export default React.createClass({
  render() {
    return (
      <div>
        <ul role="nav" className="nav nav-pills">
          <li><NavLink to="/" onlyActiveOnIndex>Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/AllLists">AllLists</NavLink></li>
          <li><NavLink to="/LogIn">LogIn</NavLink></li>
          <li><NavLink to="/SignUp">SignUp</NavLink></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
})