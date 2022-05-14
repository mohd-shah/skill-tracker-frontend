import React, { PureComponent } from "react";
import { Col, Row, Table } from "react-bootstrap";

export default class SkillRow extends PureComponent {
  render() {
    let row = this.props.row;
    return (
      <>
        <hr></hr>
        <Row className="mt-3">
          <Col>
            <h5>Basic Details</h5>
            <Table striped bordered hover>
              <tbody>
                <tr>
                  <th>Name</th>
                  <td>{row.name}</td>
                </tr>
                <tr>
                  <th>Associate Id</th>
                  <td>{row.associateId}</td>
                </tr>
                <tr>
                  <th>Email</th>
                  <td>{row.email}</td>
                </tr>
                <tr>
                  <th>Mobile</th>
                  <td>{row.mobile}</td>
                </tr>
              </tbody>
            </Table>
          </Col>
          <Col>
            <h5>Technical Skills</h5>
            <Table striped bordered hover>
              <tbody>
                {row.technicalSkills.map((skill) => (
                  <tr key={skill.id}>
                    <th>{skill.name}</th>
                    <td>{skill.level}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
          <Col>
            <h5>Non Technical Skills</h5>
            <Table striped bordered hover>
              <tbody>
                {row.nonTechnicalSkills.map((skill) => (
                  <tr key={skill.id}>
                    <th>{skill.name}</th>
                    <td>{skill.level}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </>
    );
  }
}
