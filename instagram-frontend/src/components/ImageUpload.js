import React, { useState } from 'react'
import './ImageUpload.css'
import Button from '@material-ui/core/Button'

const ImageUpload = () => {
    const [caption, setCaption] = useState('')

    const handleUpload = () => {
        console.log('Handle Upload')
    }

    return (
        <div className='imageUpload'>
            <progress className='imageUpload__progress' max='100' />
            <input type="text" value={caption} onChange={(e) => setCaption(e.target.value)} placeholder='Enter a caption' />
            <input type="file" />
            <Button onClick={handleUpload}>Upload</Button>
        </div>
    )
}

export default ImageUpload
