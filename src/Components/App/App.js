import React from 'react';
import './App.css';
import Header from './../Header/Header.js';
import SearchBox from './../SearchBox/SearchBox.js';
import ResultsContainer from './../ResultsContainer/ResultsContainer.js';

const name =  require("@rstacruz/startup-name-generator");

class app extends React.Component {

    state = {
        headerText: 'Search Name for your projects!',
         headerImageExpanded:true,
         headerTextExpanded:true,
         suggestedNames:[],
         result:false,
         
    };

    handleInputChange = (data) => {

        this.setState({ headerImageExpanded : data.length > 0 ? false : true ,headerTextExpanded : data.length > 0 ? false : true, suggestedNames : data.length > 0 ? name(data) : [] , result : data.length > 0 ? true : false })

    }
    

    render() {

        return (
            <div>
                <Header headerImageExpanded={this.state.headerImageExpanded} headerTextExpanded={this.state.headerTextExpanded} headTitle={this.state.headerText} />

                <SearchBox onInputChange={this.handleInputChange} />

                <ResultsContainer suggestedNames = {this.state.suggestedNames} showHeading = {this.state.result}/>

                {/* <h3>{this.state.headerText}</h3> */}
                {/* <button onClick={() => {
                    this.setState({
                        headerText: "Tada!!"
                    });
                }}>Click Me!</button> */}
            </div>
        );
    };
}

export default app;