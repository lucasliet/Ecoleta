import React, {useCallback, useState} from 'react'
import {useDropzone} from 'react-dropzone'
import { FiUpload } from 'react-icons/fi';

import './styles.css';

interface Props { upload : (photo: File) => void }

const Dropzone : React.FC<Props> = ({upload}) => {
  const [selectedFileUrl, setSelectedFileUrl] = useState('');

  const onDrop = useCallback(acceptedFiles => {
    const file = acceptedFiles[0];
    const fileUrl = URL.createObjectURL(file);
    setSelectedFileUrl(fileUrl);
    upload(file);
  }, [upload])
  const {getRootProps, getInputProps, isDragActive} = useDropzone({
    onDrop,
    accept: 'image/*'
  })

  return (
    <div className="dropzone" {...getRootProps()}>
      <input {...getInputProps()} accept="image/*" />
      {
        selectedFileUrl
        ? <img src={selectedFileUrl}/>
        : (
          isDragActive
            ? <p>
                <FiUpload/>
                Solte a foto do estabelecimento aqui ...
              </p>
            : <p>
                <FiUpload/>
                Arraste aqui a foto do estabelecimento
              </p>
        )
      }
      
    </div>
  )
}
export default Dropzone;