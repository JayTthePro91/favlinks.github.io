import React from 'react';
import Table from './Table';
import Form from './Form';

class LinkContainer extends React.Component {
    constructor(props) {
        super(props)
            /* TODO - Create state object for storing favLinks */
            //this is the state object that stores favlinks
        this.state = { favLink: [] }
        this.removeCharacter = this.removeCharacter.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    removeCharacter = index => {
        /*
            TODO - Create logic for setting the state to filter array and remove favLink at index
        */
    }

    handleSubmit = favLink => {
        /*
            TODO - Create logic to setState and add new favLink to favLinks array in state
        */
    }

    render() {

        return ( <
            div className = "container" >
            <
            h1 > My Favorite Links < /h1>  <
            p > Add a new url with a name and link to the table. < /p>  { /*TODO - Add Table Component */ }

            <
            Table removeLink = { this.removeCharacter }
            linkData = { this.state.favLink }
            />


            <
            br / >

            <
            h3 > Add New < /h3> { / * TODO - Add Form Component * / } <
            Form handleSubmit = { this.handleSubmit }
            /> < /
            div >
        );
    }
}

export default LinkContainer;