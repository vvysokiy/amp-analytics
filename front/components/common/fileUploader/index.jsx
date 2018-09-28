import React from 'react';
import PropTypes from 'prop-types';
import XLSX from 'xlsx';

import './style';

const FileUploader = ({ onChange }) => {
  const parser = event => {
    const reader = new FileReader();

    reader.onload = function(e) {
      const data = e.target.result;
      const workbook = XLSX.read(data, {
        type: 'binary'
      });
      workbook.SheetNames.forEach(function(sheetName) {
        const sheet_to_csv = XLSX.utils.sheet_to_csv(workbook.Sheets[sheetName]);
        onChange((`${sheet_to_csv}`).split('\n'));
      });
    };
    reader.onerror = error => console.log(error);

    reader.readAsBinaryString(event.target.files[0]);
  };

  return (
    <div className={'uploader'}>
      <label htmlFor='file'>
        Choose file to upload
      </label>
      <input
        type='file'
        id='file'
        name='file'
        multiple
        onChange={parser}/>
    </div>
  );
};

FileUploader.propTypes = {
  onChange: PropTypes.func.isRequired
};

export default FileUploader;
