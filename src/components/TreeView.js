import React, { Component } from 'react';
import axios from 'axios';

//SubComponents
import RootDir from './RootDir';

//Css
import 'font-awesome/css/font-awesome.min.css';
import 'react-contexify/dist/ReactContexify.min.css';
import '../css/TreeView.css';

class TreeView extends Component {
    constructor(props){
        super(props);
        this.state = {
            treedata: {}
        }
    }
    componentWillMount() {
        axios.get('http://localhost:4040/data')
            .then(res => res.data)
            .then((treedata) => {
                this.setState({ treedata });
            });
    }
    render() {
        return (
            <div>
                <RootDir data={this.state.treedata} />
            </div>
        );
    }
}

export default TreeView;
