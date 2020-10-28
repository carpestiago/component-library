import React from "react";
import { TextField } from "@material-ui/core";
import MaskedInput from "react-input-mask";
import InputAdornment from '@material-ui/core/InputAdornment';

import { MinimunEventCallBack } from "../commonProps";

import "./InputBox.scss";
import "./../commonStyles.scss";

export const defaultFormatChars = {
    '9': '[0-9]',
    'a': '[A-Za-z]',
    '*': '[A-Za-z0-9]'
  };

export interface IInputBoxProps {
    type?: string
    name: string
    label: string
    placeholder?: string
    value?: string,
    maxLength?: number
    mask?: string
    maskChar?: string
    maskAlwaysShowMask?: boolean
    maskFormatChars?: { [key: string]: string }
    disabled?: boolean
    errorMessage?: string
    multiline?: boolean
    rows?: number
    rowsMax?: number
    appendText?: string
    prependText?: string
    onChangeCallback?: MinimunEventCallBack
    onBlurCallback?: MinimunEventCallBack
}

export const InputBox = React.forwardRef(({
    type = "text",
    name = "",
    label = "",
    placeholder = "",
    value = null!,
    mask = "",
    maskChar = "_",
    maskAlwaysShowMask = false,
    maskFormatChars = defaultFormatChars,
    disabled = false,
    errorMessage = "",
    multiline=false,
    rows = null!,
    rowsMax = null!,
    appendText = "",
    prependText = "",
    onChangeCallback = null!,
    onBlurCallback = null!
}: IInputBoxProps, ref) => {

    const isInvalid = (errorMessage?.trim()?.length > 0);

    const handleOnChange = (e: any) => {
        if (onChangeCallback) {
            let value: string = e.target.value.toString();
            if (mask) {
                value = value.replace(/[-_]/g, ""); // só para cep, deve ser melhorado.
            }
            onChangeCallback({
                target: {
                    id: name,
                    name,
                    value
                }
            });
        }
    };
    const handleOnBlur = (e: any) => {
        if (onBlurCallback) 
            onBlurCallback({
                target: {
                    id: name,
                    name,
                    value: e.target.value.toString()
                }
            });
    };

    const getTextField = (onChangeHandler: any, onBlurHandler: any, value: any) => 
        <TextField
            type={type}
            id={name}
            name={name}
            label={label}
            placeholder={placeholder}
            inputRef={ref}
            value={value}
            disabled={disabled}
            onChange={onChangeHandler}
            onBlur={onBlurHandler}
            error={isInvalid}
            helperText={(isInvalid && errorMessage)}
            multiline={multiline}
            rows={rows}
            rowsMax={rowsMax}
            size="small"
            variant="outlined"
            InputProps={{
                endAdornment: (appendText ?? false) && <InputAdornment position="end">{appendText}</InputAdornment>,
                startAdornment: (prependText ?? false) && <InputAdornment position="start">{prependText}</InputAdornment>
              }
            }
        />

    return (
        <div className="input-box">
        {
            mask 
            ?
                <MaskedInput
                    mask={mask}
                    maskChar={maskChar}
                    alwaysShowMask={maskAlwaysShowMask}
                    formatChars={maskFormatChars}
                    onChange={handleOnChange}
                    onBlur={handleOnBlur}
                    value={value}
                    disabled={disabled} >
                    {
                        (inputProps: any) => getTextField(inputProps.onChange, inputProps.onBlur, inputProps.value)
                    }
                </MaskedInput>
            :
                getTextField(handleOnChange, handleOnBlur, value)
        }
        </div>
    )
});
export default InputBox;
