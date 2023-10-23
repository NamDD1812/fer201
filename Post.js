import { Col, Container, Row, Card, Form } from 'react-bootstrap';
import { useEffect, useState } from 'react';

export default function Post() {

    const [posts, setPosts] = useState([]);
    const [comments, setComments] = useState([]);
    const [users, setUsers] = useState([]);
    const [query,setQuery] = useState([]);

    


    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(response => response.json())
            .then(json => setPosts(json));

        fetch("https://jsonplaceholder.typicode.com/comments")
            .then(response => response.json())
            .then(data => setComments(data));
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(data => setUsers(data));
    }, []);


    return (
        <Row>
            <Col style={{ marginTop: '20px', lineHeight: '30px' }}>
                <Container>
                    <Row>
                        <Col>
                            <Form style={{ textAlign: 'center' }}>
                                <input 
                                    type='text'
                                    // value={}
                                    placeholder="Enter title to search..."
                                    onChange={e => setQuery(e.target.value)}
                                />
                            </Form>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h2>Posts:</h2>
                        </Col>
                    </Row>
                    <Row>
                        {posts.map(p => (
                            <Col xs={12} sm={6} md={4} lg={3} style={{ padding: '0px 15px' }} key={p.id}>
                                <Card style={{ width: '100%', margin: '10px' }}>
                                    <Card.Body>
                                        <Card.Title>{p.title.substring(0, 16) + ' ...'}</Card.Title>
                                        <Card.Text>
                                            {p.body.substring(0, 60) + ' ...'}
                                        </Card.Text>
                                        <Card.Link href={`/posts/${p.id}`}>Detail</Card.Link>
                                        <Card.Link href={`/posts/${p.id}/comments`}>Comments({comments.filter(c => c.postId === p.id).length})</Card.Link>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </Col>
        </Row>
    )
}