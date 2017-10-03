import React from 'react';
import { ContextMenu, Item, Separator, IconFont } from 'react-contexify';

function onClick(targetNode, ref, data) {
   // targetNode refer to the html node on which the menu is triggered
   console.log(targetNode);
   //ref will be the mounted instance of the wrapped component
   //If you wrap more than one component, ref will be an array of ref
   console.log(ref);
   // Additionnal data props passed down to the `Item`
   console.log(data);
}

// create your menu first
const FileMenu = () => (
   <ContextMenu id={"menu_id"}>
       <Item leftIcon={<IconFont className="fa fa-pencil-square-o" />} onClick={onClick}>
           Rename
       </Item>
       <Item leftIcon={<IconFont className="fa fa-trash-o" />} onClick={onClick}>
           Delete
       </Item>
   </ContextMenu>
);

export default FileMenu;
