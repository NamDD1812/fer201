import { useState,useEffect } from 'react';
import { Col, Container, Row, Table } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

export default function Comment() {
    const { id } = useParams()

    const [comments, setComments] = useState([])

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts/" + id + "/comments")
            .then(res => res.json())
            .then(data => setComments(data));
    }, [id])

    return (
        <Row>
            <Col style={{ marginTop: '20px' }}>
                <Container>
                    <Row>
                        <Col><h2>Comments - postId: {id}</h2></Col>
                    </Row>
                    <Row>
                        <Col>
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Body</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {comments.map(comment => (
                                        <tr key={comment.id}>
                                            <td>{comment.id}</td>
                                            <td>{comment.name}</td>
                                            <td>{comment.email}</td>
                                            <td>{comment.body}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </Col>
                    </Row>
                </Container>
            </Col>
        </Row>
    )
}