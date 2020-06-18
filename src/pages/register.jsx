import React, { Component } from 'react'
import {Row, Container, Card, Form, Button} from 'react-bootstrap'

export default class register extends Component {
    constructor(props){
        super(props)
        this.state = {
                fullname: '',
                email: '',
                password: ''
            }
        }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    handlePost = (event) => {
        event.preventDefault()
        const registerData = {
            fullname: this.state.fullname,
            email: this.state.email,
            password: this.state.password
        }
        this.props.history.push('/home', registerData)
    }


    render() {
        {console.log(this.state)}
        return (
            <>
                <Row md={12} className="no-gutters h-75 mt-5">
                    <Container>
                        <div className="d-flex justify-content-center align-items-center h-100">
                            <Card style={{ width: '30rem' }} className="shadow rounded">
                                <Card.Body>
                                    <Card.Title className="d-flex justify-content-center">REGISTER</Card.Title>
                                    <Card.Text>
                                    <Form className="form-rounded-input" onSubmit={this.handlePost}>
                                        <Form.Group controlId="formBasicFullname">
                                            <Form.Label>Full Name</Form.Label>
                                            <Form.Control name="fullname" value={this.state.fullname} onChange={this.handleChange} type="text" placeholder="Enter email" />
                                        </Form.Group>
                                        <Form.Group controlId="formBasicEmail">
                                            <Form.Label>Email</Form.Label>
                                            <Form.Control name="email" value={this.state.email} onChange={this.handleChange} type="email" placeholder="Enter email" />
                                        </Form.Group>
                                        <Form.Group controlId="formBasicPassword">
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control name="password" value={this.state.password} onChange={this.handleChange} type="password" placeholder="Password" />
                                        </Form.Group>
                                        <Button variant="primary" type="submit">
                                            Login
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
