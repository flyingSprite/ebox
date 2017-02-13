// @flow
import React, { Component } from 'react';

import RaisedButton from 'material-ui/RaisedButton';

class FileInputButton extends Component {

  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    const { directory } = this.props;
    if (directory) {
      const fileInputRef = this.fileInputRef;
      fileInputRef.directory = true;
      fileInputRef.webkitdirectory = true;
    }
  }

  onClickFileInputButton() {
    this.fileInputRef.click();
  }

  onChangeFileInput(e) {
    e.preventDefault();
    const { chooseFile } = this.props;
    const fileList = e.target.files;
    if (fileList && fileList.length > 0) {
      const fileObj = fileList[0];
      if (chooseFile) {
        chooseFile(fileObj);
      }
    }
  }

  props: {
    label: string,
    directory: boolean,
    chooseFile: () => void
  };

  render() {
    const { label } = this.props;
    return (
      <RaisedButton
        label={label}
        primary
        onClick={::this.onClickFileInputButton.bind(this)}
      >
        <input
          style={{ display: 'none' }}
          type="file"
          ref={(c) => { this.fileInputRef = c; }}
          onChange={::this.onChangeFileInput.bind(this)}
        />
      </RaisedButton>
    );
  }
}

export default FileInputButton;
