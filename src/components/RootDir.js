import React, { Component } from 'react';

//SubComponents 
import File from './File';
import Directory from './Directory';

class RootDir extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: false
        }
    }
    renderRootChildren() {
        const entityList = this.props.data.children;
        if(entityList){
            return entityList.map((entity,i) => {
                if(entity.type === 'file') {
                    return <File key={i} file={entity} />
                }else if(entity.type === 'directory'){
                    return <Directory key={i} dir={entity} />;
                }
                return <li key={i}>undefined</li>;
            });
        }
        return <p>Loading</p>;
    }

    foldericon() {
        if(this.state.collapsed){
            return <i className="fa fa-folder" aria-hidden="true" />;
        }else{
            return <i className="fa fa-folder-open" aria-hidden="true" />;
        }
    }

    onClickHandler(e) {
        this.setState({ collapsed: !this.state.collapsed });
    }
    
    renderRootDir() {
        return (
            <ul>
                <li>
                    <span onClick={this.onClickHandler.bind(this)} >{this.foldericon()} {this.props.data.name}</span>
                    <ul>
                    {this.state.collapsed ? null : this.renderRootChildren()}
                    </ul>
                </li>
            </ul>
        );
    }


    render() {
        return (
            <div>
                {this.renderRootDir()}
            </div>
        );
    }
}

export default RootDir;