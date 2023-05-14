import React, { Component } from 'react';  
import tableau from 'tableau-api';  

// const tableau = require('tableau-api');

let viz;

class TableauReactMap extends Component { 
 
  componentDidMount() {  
    this.initViz();
  }  

  initViz() {  
    const vizUrl = 'https://public.tableau.com/views/Undo/Dashboard1?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link';
    const vizContainer = this.vizContainer;  
    const options = {
      width: "100%",
      height: "1000px",
    };
    if (viz != undefined) {viz.dispose();}
    viz = new window.tableau.Viz(vizContainer, vizUrl, options); 
  }  

  render() {  
    return (  
      <div ref={(div) => { this.vizContainer = div }}>  
      </div>  
    )  
  }  
}  


export default TableauReactMap;