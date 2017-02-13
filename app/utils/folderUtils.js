import fs from 'fs';

class FolderUtils {

  setFolder(folder) {
    this.folder = folder;
    this.files = [];
    this.findFiles();
  }

  getFiles() {
    return this.files;
  }

  findFiles() {
    const fd = fs.readdirSync(this.folder);
    this.files = fd;
    console.log(this.files);
  }
}

export default FolderUtils;
