import React from "react"
import { Modal, Button, Form } from "react-bootstrap"

export class VerticalModal extends React.Component {
    constructor(props) {
        super(props)

        this.handleChange = this.handleChange.bind(this);
    }

    submit(event) {
        event.preventDefault()

        let data = {
            date: this.state.date,
            miles: this.state.miles,
            completed: this.state.completed,
            crossTraining: this.state.crossTraining,
            restDay: this.state.restDay
        }
    }

    handleChange(event) {
        const { name, value } = event.target;
        console.log("HELLO FROM HANDLECHANGE", name, value)

        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <Modal
                {...this.props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Enter a training run
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={this.submit}>
                        <Form.Group controlId="rest-day">
                            <Form.Label>Is today a rest day?</Form.Label>
                            <Form.Control as="select">
                                <option value="">Select...</option>
                                <option value="1">Yes</option>
                                <option value="2">No</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="cross-training-day">
                            <Form.Label>Cross-training today?</Form.Label>
                            <Form.Control as="select">
                                <option>Select...</option>
                                <option>Yes</option>
                                <option>No</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="miles-run">
                            <Form.Label>Enter miles to run:</Form.Label>
                            <Form.Control type="text" placeholder="example: 3" />
                        </Form.Group>
                        <Form-Group>
                            <Form.Check
                                type="checkbox"
                                id="completed"
                                label="Run Completed?"
                            />
                        </Form-Group>


                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <button type="submit">Submit</button>
                    <Button onClick={this.props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        );
    }

}
