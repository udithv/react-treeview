import React, { Component } from 'react';

//SubComponents 
import File from './File';

class Directory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: true
        }
    }

    renderDirChildren() {
        const entityList = this.props.dir.children;
        return entityList.map((entity, i) => {
            if(entity.type === 'directory'){
                return <Directory key={i} dir={entity} />;
            }else if(entity.type === 'file') {
                return <File key={i} file={entity} />;
            }
            return <li>undefined</li>;
        });
    }

    onClickHandler(e) {
        this.setState({ collapsed: !this.state.collapsed });
    }

    foldericon() {
        if(this.state.collapsed){
            return <i className="fa fa-folder" aria-hidden="true" />
        }else{
            return <i className="fa fa-folder-open" aria-hidden="true" />
        }
    }

    render() {
        return (
            <li>
                <span onClick={this.onClickHandler.bind(this)} >{this.foldericon()} {this.props.dir.name}</span>
                <ul>
                    {this.state.collapsed ? null : this.renderDirChildren()}
                </ul>
            </li>
        );
    }
}

export default Directory;