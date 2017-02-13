// @flow
import React, { Component } from 'react';
import { Link } from 'react-router';
import keyboardJS from 'keyboardjs';
import uuidV4 from 'uuid/v4';
import { Row, Col, Collection, CollectionItem } from 'react-materialize';

import styles from './Counter.css';
import FolderUtils from '../utils/folderUtils';
import FileInput from './FileInput';

class Pictures extends Component {

  constructor() {
    super();
    this.state = {
      file: {},
      files: [],
      selectFile: ''
    };
    this.folderUtils = new FolderUtils();
  }
  componentDidMount() {
    keyboardJS.bind('down', () => {
      const files = this.state.files;
      const selectFile = this.state.selectFile;
      if (files.length > 0) {
        if (selectFile) {
          const selectIndex = files.indexOf(selectFile);
          if (selectIndex < files.length - 1) {
            this.setState({ selectFile: files[selectIndex + 1] });
          }
        } else {
          this.setState({ selectFile: files[0] });
        }
      }
    });

    keyboardJS.bind('up', () => {
      const files = this.state.files;
      const selectFile = this.state.selectFile;
      if (files.length > 0) {
        if (selectFile) {
          const selectIndex = files.indexOf(selectFile);
          if (selectIndex > 0) {
            this.setState({ selectFile: files[selectIndex - 1] });
          }
        } else {
          this.setState({ selectFile: files[files.length - 1] });
        }
      }
    });
  }


  onChooseFile(fileObj) {
    if (fileObj) {
      this.folderUtils.setFolder(fileObj.path);
      this.setState({
        file: fileObj,
        files: this.folderUtils.getFiles()
      });
    }
  }

  selectOnePicture(fileName) {
    this.setState({ selectFile: fileName });
  }

  props: {
    increment: () => void,
    incrementIfOdd: () => void,
    incrementAsync: () => void,
    decrement: () => void,
    counter: number
  };

  render() {
    return (
      <div>
        <Row>
          <div className={styles.backButton}>
            <Link to="/">
              <i className="fa fa-arrow-left fa-3x" />
            </Link>
          </div>
        </Row>
        <Row>
          <FileInput
            directory
            label="Choose Folder"
            chooseFile={::this.onChooseFile.bind(this)}
          />
        </Row>
        <Row>
          <Col s={3} style={{ overflowY: 'scroll', height: '400px' }}>
            <Collection>
              {this.state.files.map((fileName) =>
                <CollectionItem
                  key={uuidV4()}
                  active={this.state.selectFile === fileName}
                  style={{ cursor: 'pointer' }}
                  onClick={::this.selectOnePicture.bind(this, fileName)}
                >{fileName}</CollectionItem>
              )}
            </Collection>
          </Col>
          <Col s={9}>
            {this.state.file.path && this.state.selectFile
              ? (<img
                style={{ 'max-width': '600px', 'max-height': '700px' }}
                src={`${this.state.file.path}/${this.state.selectFile}`} alt=""
              />)
              : ''
            }
          </Col>
        </Row>
      </div>
    );
  }
}

export default Pictures;
