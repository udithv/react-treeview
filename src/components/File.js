import React, { Component } from 'react';

class File extends Component {
     
    fileicon() {
        return <i className="fa fa-file-text" aria-hidden="true"></i>;
    }

    render() {
        
        return (
            <li>
                {this.fileicon()} {this.props.file.name}
            </li>
        );
    }
}
 export default File;