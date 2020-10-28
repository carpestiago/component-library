import React, { useState } from 'react';
import Datepicker from './../components/Datepicker/DatePickerBox';
import './Datepicker.scss';

export default function DatepickerExample() {
    


    const [ value, setValue ] = useState("2004-10-04");

    return(
        <>
            <div>
                <h4>Datepicker</h4>
            </div>
            <Datepicker 
                label="Data"
                placeholder="Selecione uma data"
                value={value}
                onChangeCallback={(e) => { setValue(e.target.value); } }
            />
        </>
    )
};