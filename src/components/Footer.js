import React, { Component } from 'react'
import { Row } from 'react-bootstrap'

export default class Footer extends Component {
    render() {
        return (
            <>
                <Row md={12} className="no-gutters d-flex justify-content-center">
                    <h1>Footer</h1>
                </Row>
            </>
        )
    }
}
