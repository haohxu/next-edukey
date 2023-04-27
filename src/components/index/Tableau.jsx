import React, { Component } from 'react';  
import tableau from 'tableau-api';  

// const tableau = require('tableau-api');

let viz;

class TableauReact extends Component { 
 
  componentDidMount() {  
    this.initViz();
  }  

  initViz() {  
    const vizUrl = 'https://public.tableau.com/views/StackedBarchart_16825907189930/Sheet1?:language=en-AU&:display_count=n&:origin=viz_share_link';
    const vizContainer = this.vizContainer;  
    const options = {
      width: "100%",
      height: "400px",
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


export default TableauReact;