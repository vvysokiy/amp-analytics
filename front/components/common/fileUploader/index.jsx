import React from 'react';
import PropTypes from 'prop-types';
import XLSX from 'xlsx';

import './style';

const FileUploader = ({ className, onChange }) => {
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

  const uploaderClass = className ? `uploader ${className}` : 'uploader';

  return (
    <div className={uploaderClass}>
      <label className={'uploader__label'} htmlFor='file'>
        <div className={'uploader__btn'}>
          Загрузить файл xmlx
        </div>
      </label>
      <input
        className={'uploader__input'}
        type='file'
        id='file'
        name='file'
        multiple
        onChange={parser}/>
    </div>
  );
};

FileUploader.propTypes = {
  className: PropTypes.string,
  onChange: PropTypes.func.isRequired
};

export default FileUploader;
