import React, {Component} from 'react'
import { Container, Segment, Table, Header } from 'semantic-ui-react'
import CameraListener from './CameraListener'
class TelemTable extends Component {
  render() {
    return (
      <div>
        <Container style={{ padding: '5em 0em' }}>
          <Header as='h2'>Telemetry Stream</Header>
          <Segment attached='top'>ASV Tracking.</Segment>
          <Table attached='bottom'>
            <Table.Header>
              <Table.HeaderCell>Telemetry Stream</Table.HeaderCell>
            </Table.Header>
            <Table.Body>
              <Table.Row>
                <Table.Cell>Position X (meters)</Table.Cell>
                <Table.Cell><CameraListener/></Table.Cell>
                <Table.Cell>Position Y (meters)</Table.Cell>
                <Table.Cell></Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Heading (degrees)</Table.Cell>
                <Table.Cell/>
                <Table.Cell>Timestamp</Table.Cell>
                <Table.Cell/>
              </Table.Row>
            </Table.Body>
          </Table>
        </Container>
      </div>
    )
  };
}
export default TelemTable
