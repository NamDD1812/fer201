import { Col, Row } from 'react-bootstrap';

export default function Header(){
    return(
        <Row>
            <Col style={{textAlign:'center', lineHeight:'30px'}}>
                <h2>Working Data</h2>
            </Col>
        </Row>
    )
}