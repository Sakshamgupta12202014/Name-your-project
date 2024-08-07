import React from 'react';
import './App.css';
import Header from './../Header/Header.js';
import SearchBox from './../SearchBox/SearchBox.js';
import ResultsContainer from './../ResultsContainer/ResultsContainer.js';

const name =  require("@rstacruz/startup-name-generator");

class app extends React.Component {

    state = {
        headerText: 'Name It!',
         headerImageExpanded:true,
         headerTextExpanded:true,
         suggestedNames:[],
         
    };

    handleInputChange = (data) => {

        this.setState({ headerImageExpanded : data.length > 0 ? false : true ,headerTextExpanded : data.length > 0 ? false : true, suggestedNames : data.length > 0 ? name(data) : []})
    }

    render() {

        

        return (
            <div>
                <Header headerImageExpanded={this.state.headerImageExpanded} headerTextExpanded={this.state.headerTextExpanded} headTitle={this.state.headerText} />

                <SearchBox onInputChange={this.handleInputChange} />

                <ResultsContainer suggestedNames = {this.state.suggestedNames}/>
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