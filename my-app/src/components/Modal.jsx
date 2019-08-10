import React from "react"
import { Modal, Button, Form } from "react-bootstrap"

export class VerticalModal extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            date: this.props.date,
            miles: "",
            completed: false,
            crossTraining: false,
            restDay: false,
            hideElements: false
        }
    }


    handleMiles(event) {
        this.setState({ miles: event.target.value })
    }

    handleRest(event) {
        let rest = false
        if (event.target.value === "true") {
            rest = true
        }
        this.setState({
            restDay: rest,
            hideElements: rest
        })
    }

    handleCross(event) {
        this.setState({ crossTraining: event.target.value })
    }

    handleCompleted(event) {
        this.setState({ completed: event.target.checked })
    }

    submit = (event) => {
        let runDetails = {
            miles: this.state.miles,
            completed: this.state.completed,
            crossTraining: this.state.crossTraining,
            restDay: this.state.restDay
        }
        this.props.details(this.props.date, runDetails)
        event.preventDefault();
    }


    render() {
        console.log('render modal: ', this.props);
        const { hideElements } = this.state
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
                    <Form>
                        <Form.Group controlId="rest-day">
                            <Form.Label>Is today a rest day?</Form.Label>
                            <Form.Control as="select" value={this.state.value} onChange={this.handleRest.bind(this)}>
                                <option value="">Select...</option>
                                <option value="true">Yes</option>
                                <option value="false">No</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group className={`cross-train ${hideElements ? "hidden" : ""}`} controlId="cross-training-day">
                            <Form.Label>Cross-training today?</Form.Label>
                            <Form.Control as="select" value={this.state.value} onChange={this.handleCross.bind(this)}>
                                <option>Select...</option>
                                <option>Yes</option>
                                <option>No</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group className={`miles-run ${hideElements ? "hidden" : ""}`} controlId="miles-run">
                            <Form.Label>Enter miles to run:</Form.Label>
                            <Form.Control type="text" name="miles" value={this.state.miles} onChange={this.handleMiles.bind(this)} placeholder="example: 3" />
                        </Form.Group>
                        <Form-Group>
                            <Form.Check
                                className={`completed ${hideElements ? "hidden" : ""}`}
                                type="checkbox"
                                className="run-complete"
                                checked={this.state.true}
                                onChange={this.handleCompleted.bind(this)}
                                id="completed"
                                label="Run Completed?"
                            />
                        </Form-Group>


                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={(e) => {
                        this.submit(e);
                        this.props.onHide(e);
                    }}>Submit</Button>
                    <Button onClick={this.props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        );
    }

}
