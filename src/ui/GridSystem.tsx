import React from 'react';
import Col from './../components/GridSystem/Col'
import Container from './../components/GridSystem/Container'
import Row from './../components/GridSystem/Row'
import { useHistory } from 'react-router-dom';
import './../components/GridSystem/bootstrap-grid.css'; // bootstrap grid system

export default function GridSystemExample() {

    return(
        <>
            <div className='App'>
                <h3>GridSystem</h3>
            </div>

            <Container 
                fluid
                className="grid-system-story"
                style={{ border: "solid 2px green", height: "150px" }}
            >
                Container
                <Row 
                    style={{ border: "solid 2px red", height: "75px", marginTop: "20px" }}
                >
                    Row
                    <Col 
                        style={{ border: "solid 2px blue", height: "35px", marginTop: "20px" }} 
                        md={4}
                    >
                        Coluna 1
                    </Col>
                    <Col 
                        style={{ border: "solid 2px blue", height: "35px", marginTop: "20px" }} 
                        md={4}
                    >
                        Coluna 2
                    </Col>
                </Row>
            </Container>
        </>
    )
};