import ToolbarComponent from "../Toolbar/Toolbar";
import HamburgerComponent from "../Hamburger/Hamburger";

import React from 'react'

export default class Header extends React.Component {
    state = {
        left: false
      };
    
      toggleDrawer = () => {
        // if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        //   return;
        // }
    
        this.setState({ left: false });
      };
    
      openDrawer = () => {
        this.setState({
          left: true
        });
      };
    
  render() {
    return (
        <div className="Header">
            <ToolbarComponent openDrawerHandler={this.openDrawer} />
            <HamburgerComponent
            left={this.state.left}
            toggleDrawerHandler={this.toggleDrawer}
            />
      </div>
    )
  }
}
