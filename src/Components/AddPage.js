import { Button, Row, Container, Col, Form } from 'react-bootstrap'
import { useState } from 'react'
import Editor from './Jodit'


function AddPage({ onAdd }) {
    const [Name, setName] = useState('')
    const [Tag, setTag] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault()

        onAdd({Name, Tag})

        setName('')
        setTag()
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="NoteName">
                <Form.Label>
                    Note Name:
                </Form.Label>
                <Form.Control type="text" value={Name} onChange={(e) => setName(e.target.value)}/>
            </Form.Group>

            <Form.Group controlId="Tags">
                <Form.Label>
                    Tags:
                </Form.Label>
                {
                    ['Science', 'Math', 'Physics', 'Ethics', 'CS', 'Other'].map((subject) => (
                        <Form.Check
                            type='checkbox'
                            id={`subject_${subject}`}
                            label={`${subject}`}
                            value={`${subject}`}
                            onChange={(e) => setTag(arr => [...arr, e.target.value])}
                        />
                    ))    
                }
            </Form.Group>
            <Editor />
            <br></br>
            <Row className="justify-content-center">
                <Col>
                    <Button variant="outline-primary btn-lg " type="submit" block>
                        Add Note
                    </Button>
                </Col>
            </Row>
        </Form>
    )
}

export default AddPage
