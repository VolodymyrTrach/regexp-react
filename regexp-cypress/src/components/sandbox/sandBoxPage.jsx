import { Typography } from '@material-ui/core'
import React, { useEffect, useState } from 'react'

import Editor from '../editor/Editor'

const SandBoxPage = () => {
  const [html, setHtml] = useState('')
  const [js, setJs] = useState('')
  const [css, setCss] = useState('')
  const [srcDoc, setSrcDoc] = useState('')

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
        <html>
          <body>${html}</body>
          <style>${css}</style>
          <script>${js}</script>
        </html>
      `)
    }, 250)

    return () => clearTimeout(timeout)
  }, [html, css, js])

  return (
    <>
    <Typography align="center" variant='h1'>Sandbox</Typography>
      <div className='sandbox top-box'>
        <Editor programmingLanguage='xml' title='HTML' value={html} onChange={setHtml} />
        <Editor programmingLanguage='javascript' title='JS' value={js} onChange={setJs} />
        <Editor programmingLanguage='css' title='CSS' value={css} onChange={setCss} />
      </div>
      <div className='sandbox'>
        <iframe
          srcDoc={srcDoc}
          title='output'
          sandbox='allow-scripts'
          frameBorder='0'
          width='100%'
          height='100%'
        />
      </div>
    </>
  )
}
export default SandBoxPage;
