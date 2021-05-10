import React from 'react'
import { Controlled as ControlledEditor } from 'react-codemirror2'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/css/css'
import { Typography } from '@material-ui/core'


const Editor = ({ programmingLanguage, title, value, onChange }) => {
    const onChangeHandler = (editor, data, value) => {
        onChange(value)
    }
    return (
        <div className="editor-container">
        <Typography className="editor-title">
            {title}
        </Typography >
        <ControlledEditor
        onBeforeChange={onChangeHandler}
        value={value}
        className="code-wrapper"
        options={{
            lineWrapping: true,
            lint: true,
            mode: programmingLanguage,
            lineNumbers: true,
            theme: 'material'
        }}
        />
        </div>
    )
}

export default Editor

