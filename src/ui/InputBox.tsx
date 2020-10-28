import React from 'react';
import InputBox from './../components/InputBox/InputBox';
import './InputBox.scss';

export default function InputBoxExample() {

    return(
        <>
            <div className='App'>
                <h3>InputBox</h3>
            </div>

            <div>
                <h4>1.1: básico</h4>
                <InputBox
                    name='inputbox-exemplo1'
                    label='Input Básico'

                />
            </div>

            <div>
                <h4>1.2: máscara de cpf</h4>
                <InputBox
                    name='inputbox-exemplo2'
                    label='Input de CPF'
                    mask='999.999.999-99'
                />
            </div>

            <div>
                <h4>1.3: financeiros</h4>
                <InputBox
                    name='inputbox-exemplo3'
                    label='Input financeiro'
                    prependText='R$'
                />
                <InputBox
                    name='inputbox-exemplo4'
                    label='Input financeiro'
                    appendText='%'
                />
            </div>

            <div>
                <h4>1.4: multiline</h4>
                <InputBox
                    name='inputbox-exemplo5'
                    label='Input Multiline'
                    multiline={true}
                    rows={5}
                />
            </div>
        </>
    )
};