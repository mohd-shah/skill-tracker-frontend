import React, { Component } from "react";
import { Card, Col, Form, Row, Button } from "react-bootstrap";

export default class SearchPanel extends Component {
  render() {
    return (
      <Card className="col-sm-6 m-auto">
        <Card.Header className="bg-primary text-white">Search Panel</Card.Header>
        <Card.Body>
          <Form>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm={2}>
                Name
              </Form.Label>
              <Col sm={10}>
                <Form.Control type="text" />
                <Form.Text className="text-muted">
                  Initial characters of name can be provided
                </Form.Text>
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm={2}>
                Associate Id
              </Form.Label>
              <Col sm={10}>
                <Form.Control type="text" />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm={2}>
                Skill
              </Form.Label>
              <Col sm={10}>
                <Form.Select aria-label="Skill">
                  <option value="HTML-CSS-JAVASCRIPT">HTML-CSS-JAVASCRIPT</option>
                  <option value="ANGULAR">ANGULAR</option>
                  <option value="REACT">REACT</option>
                  <option value="SPRING">SPRING</option>
                  <option value="RESTFUL">RESTFUL</option>
                  <option value="HIBERNATE">HIBERNATE</option>
                  <option value="GIT">GIT</option>
                  <option value="DOCKER">DOCKER</option>
                  <option value="AWS">AWS</option>
                </Form.Select>
              </Col>
            </Form.Group>
            <Button variant="primary" type="button">
              Search
            </Button>
          </Form>
        </Card.Body>
      </Card>
    );
  }
}
