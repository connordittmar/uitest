import React, {Component} from 'react'
import { Container, Menu} from 'semantic-ui-react'

class TopMenu extends Component {
  render() {
    return (
      <div>
        <Menu fixed='top' inverted>
          <Container>
            <Menu.Item name='telemetry' />
            <Menu.Item name='imaging'/>
            <Menu.Item name='network'/>
          </Container>
        </Menu>
      </div>
    )
  };
}
export default TopMenu
