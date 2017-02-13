// @flow
import React, { Component } from 'react';

import TextField from 'material-ui/TextField';

import FileInputButton from './FileInputButton';

class FileInput extends Component {

  constructor() {
    super();
    this.state = {
      inputValue: ''
    };
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

  onChooseFile(fileObj) {
    if (fileObj) {
      this.setState({ inputValue: fileObj.path });
      const { chooseFile } = this.props;
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
    const { label, directory } = this.props;
    return (
      <div>
        <FileInputButton
          directory={directory}
          label={label}
          chooseFile={::this.onChooseFile.bind(this)}
        />
        <TextField
          value={this.state.inputValue}
          hintText={directory ? 'Choose Folder' : 'Choose File'}
        />
      </div>
    );
  }
}

export default FileInput;
