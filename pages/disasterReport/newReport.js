import React, { Component } from "react";
import { Form, Input, Button } from "semantic-ui-react";
import { withRouter } from "next/router";
import eventTracker from "../../ethereum/DisasterEventTracker";

class CreateEventForm extends Component {
  state = {
    eventType: "",
    description: "",
    location: "",
    loading: false,
  };

  handleCreateEvent = async () => {
    try {
      this.setState({ loading: true });
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      const account = accounts[0];

      await eventTracker.methods
        .createEvent(
          this.state.eventType,
          this.state.description,
          this.state.location
        )
        .send({ from: account });

      // Event created successfully, navigate to the home page
      this.props.router.push("/"); // Replace "/" with the path of your home page route

      this.setState({
        eventType: "",
        description: "",
        location: "",
        loading: false,
      });
    } catch (error) {
      console.error(error);
      this.setState({ loading: false });
    }
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { eventType, description, location, loading } = this.state;

    return (
      <Form onSubmit={this.handleCreateEvent}>
        <Form.Field>
          <label>Event Type</label>
          <Input
            placeholder="Enter event type"
            name="eventType"
            value={eventType}
            onChange={this.handleChange}
          />
        </Form.Field>
        <Form.Field>
          <label>Description</label>
          <Input
            placeholder="Enter description"
            name="description"
            value={description}
            onChange={this.handleChange}
          />
        </Form.Field>
        <Form.Field>
          <label>Location</label>
          <Input
            placeholder="Enter location"
            name="location"
            value={location}
            onChange={this.handleChange}
          />
        </Form.Field>
        <Button type="submit" loading={loading} primary>
          Create Event
        </Button>
      </Form>
    );
  }
}

export default withRouter(CreateEventForm);
