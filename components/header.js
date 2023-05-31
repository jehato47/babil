import React from 'react';
import { Menu } from 'semantic-ui-react';
import { withRouter } from 'next/router';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: null,
    };
  }

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name });

    switch(name) {
      case 'babil':
        this.props.router.push('/');
        break;
      case 'fundraising':
        this.props.router.push('/fundraising');
        break;
      case 'resourceAllocation':
        this.props.router.push('/resourceAllocation');
        break;
      case 'disasterReport':
        this.props.router.push('/disasterReport');
        break;
      default:
        break;
    }
  };

  render() {
    const { activeItem } = this.state;
    
    return (
      <Menu>
        <Menu.Item
          name="babil"
          onClick={this.handleItemClick}
        />
        <Menu.Menu position="right">
          <Menu.Item
            name="fundraising"
            active={activeItem === 'fundraising'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="resourceAllocation"
            active={activeItem === 'resourceAllocation'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="disasterReport"
            active={activeItem === 'disasterReport'}
            onClick={this.handleItemClick}
          />
        </Menu.Menu>
      </Menu>
    );
  }
}

export default withRouter(Header);
