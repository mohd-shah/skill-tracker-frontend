import React, { Component } from "react";
import { Card, Col, Form, Row, Button } from "react-bootstrap";
import { toast } from "react-toastify";
import API from "../../API";

export default class SearchPanel extends Component {
  constructor(props) {
    super(props);
    this.api = new API();
    this.state = {
      name: "",
      associateId: "",
      skill: "",
    };
  }

  handleClick = () => {
    const { name, associateId, skill } = this.state;
    if (!name && !associateId && !skill) {
      return;
    }
    this.api.handleSearch(this.state).then(
      (response) => {
        this.props.search(response.data);
      },
      (error) => {
        this.props.search([]);
        toast.error(error.response.data.message, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    );
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    return (
      <Card className="col-sm-7 m-auto">
        <Card.Header className="bg-primary text-white">
          Search Panel
        </Card.Header>
        <Card.Body>
          <Form>
            <Form.Group as={Row} className="mb-3" controlId="name">
              <Form.Label column sm={2}>
                Name
              </Form.Label>
              <Col sm={10}>
                <Form.Control
                  type="text"
                  name="name"
                  value={this.state.name}
                  onChange={this.handleChange}
                />
                <Form.Text className="text-muted">
                  Provide initial characters of name
                </Form.Text>
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="associateId">
              <Form.Label column sm={2}>
                Associate Id
              </Form.Label>
              <Col sm={10}>
                <Form.Control
                  type="text"
                  name="associateId"
                  value={this.state.associateId}
                  onChange={this.handleChange}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="skill">
              <Form.Label column sm={2}>
                Skill
              </Form.Label>
              <Col sm={10}>
                <Form.Select
                  aria-label="Skill"
                  name="skill"
                  value={this.state.skill}
                  onChange={this.handleChange}
                >
                  <option value="">None</option>
                  <option value="HTML-CSS-JAVASCRIPT">
                    HTML-CSS-JAVASCRIPT
                  </option>
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
            <div className="text-center">
              <Button
                variant="primary"
                type="button"
                onClick={this.handleClick}
              >
                Search
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    );
  }
}
