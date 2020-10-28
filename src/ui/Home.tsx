import React, {useState} from 'react';
import Container from './../components/GridSystem/Container';
import Col from './../components/GridSystem/Col';
import Row from './../components/GridSystem/Row';
import { Typography, Button } from '@material-ui/core';
import ListOutlinedIcon from '@material-ui/icons/ListOutlined';
import InputBox from './InputBox';
import Inicio from './Inicio';
import GridSystem from './GridSystem';
import Datepicker from './DatePicker';
import './Home.scss';

export default function Home() {

    const [ values ] = useState([
        {value: 0, label: ''}, 
        {value: 1, label: 'InputBox'}, 
        {value: 2, label: 'GridSystem'}, 
        {value: 3, label: 'Datepicker'}
    ])

    const [ value, setValue ] = useState(0) 
    
    return(

        <Container fluid className='tela-home'>
            <Row>
                <Col className='col-barra-superior'>
                    <div className='box-barra-superior'>
                        <Typography variant='h5'>
                            Package de componentes react-material
                        </Typography>
                    </div>
                    
                </Col>
            </Row>
            <Row className = 'linha-conteudo'>
                <Col md={1}>
                    <div className='menu-lateral'>
                        <div className='icone-menu-lateral'>
                            <ListOutlinedIcon fontSize='large'/>
                            <div>Componentes</div>
                        </div>
                        {
                            values.map((v: any) => 
                            <Button onClick={() => {setValue(v.value)}} >{v.label}</Button>
                            )
                        }
                    </div>
                </Col>
                <Col md={11}>


                    {value === 0 && <Inicio/>}
                    {value === 1 && <InputBox/>}
                    {value === 2 && <GridSystem/>}
                    {value === 3 && <Datepicker/>}
                    
                </Col>
            </Row>

        </Container>
    )
};