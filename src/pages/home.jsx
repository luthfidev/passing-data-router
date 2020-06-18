import React, { Component } from 'react'
import { Row, Card, Form, Container, Button } from 'react-bootstrap' 

export default class home extends Component {

    goBack = (event) => {
        event.preventDefault()
        this.props.history.goBack()
    }

    render() {
        let data = {}
        const { fullname, email, password } = this.props.location.state
        data = { fullname, email, password }
        {console.log(this.props)}
        return (
            <>
                <Row md={12} className="no-gutters h-75 mt-5">
                    <Container>
                        <div className="d-flex justify-content-center align-items-center h-100">
                            <Card style={{ width: '25rem' }} className="shadow rounded">
                                <Card.Body>
                                    <Card.Title className="d-flex justify-content-center">HOME</Card.Title>
                                    <Card.Text>
                                    <Form className="form-rounded-input">
                                        <Form.Group controlId="formBasicEmail">
                                            <Form.Label>Fullname : {data.fullname}</Form.Label>
                                        </Form.Group>
                                        <Form.Group controlId="formBasicEmail">
                                            <Form.Label>Email : {data.email}</Form.Label>
                                        </Form.Group>
                                        <Form.Group controlId="formBasicPassword">
                                            <Form.Label>Password : {data.password}</Form.Label>
                                        </Form.Group>
                                        <Button variant="primary" type="submit" onClick={this.goBack}>
                                            Back
                                        </Button>
                                    </Form>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    </Container>
                </Row>
            </>
        )
    }
}
