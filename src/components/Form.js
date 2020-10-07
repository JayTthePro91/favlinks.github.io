import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
                name: "",
                URL: ""
            }
            /*
                 TODO - set initial state for link name and URL 

             */
        this.handleChange = this.handleChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }


    handleChange = event => {
        /*
            TODO - Logic for changing state based on form changes
        */
        const thename = event.thename;
        const thetarget = event.thetarget;
        const thevalue = event.thevalue;

        this.setState({
            [thename]: thevalue
        });
    }

    onFormSubmit = (event) => {
        // to prevent page reload on form submit
        event.preventDefault();

        /*
            TODO - Logic for calling props to handle submission and setting state changes
        */

        let name = this.state.thename;
        let URL = this.state.URL;
        let object = { name, URL };
        console.log("object", object)
        this.props.handleSubmit(object);
        this.setState({ name: "", URL: "" })

    }

    render() {

        console.log("name", this.state.name);
        console.log("url", this.state.URL);
        return ( < form > { /* TODO - Logic for returning a form element with labels and inputs for link name and URL */ }

            <
            label
            for = "name" > name: < /label> <
            br / >
            <
            input type = "text"
            id = "name"
            name = "name"
            value = { this.state.name }
            onChange = { this.handleChange }
            /> <
            br / >
            <
            label
            for = "url" > Last URL: < /label> <
            br / >
            <
            input type = "text"
            id = "url"
            name = "url"
            value = { this.state.URL }
            onChange = { this.handleChange }
            /> <
            br / >
            <
            br / >
            <
            input type = "submit"
            value = "submit"
            onClick = { this.onFormSubmit }
            />

            <
            /form>
        )

    }
}

export default Form;