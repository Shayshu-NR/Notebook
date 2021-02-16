import { Button, Row, Container, Col } from 'react-bootstrap'

function Footer({ onAdd, showAddNote }) {
    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col md="auto">
                    <h2>Add new page</h2>
                </Col>
                <Col md="auto">
                    <button
                        className={`btn btn-lg ${showAddNote ? 'btn-danger' : 'btn-success'}`}
                        onClick={onAdd}>
                        {showAddNote ? 'Close' : 'Add'}
                    </button>
                </Col>
            </Row>
        </Container>
    )
}

export default Footer
