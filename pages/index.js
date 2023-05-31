import { Component, Fragment } from "react";
import Header from "../components/header";
import { Card, Container } from "semantic-ui-react";
import { withRouter } from 'next/router';

class HomePage extends Component {
  liste = ["0x1", "0x2", "0x3"];

  goToCampaign = (address) => {
    this.props.router.push(`/disasterReport/${address}`);
  }

  renderCampaigns() {
    const items = this.liste.map((address) => {
      return (
        <Card
          header={address}
          description={<a onClick={() => this.goToCampaign(address)}>View Events</a>}
          fluid={true}
          style={{ overflowWrap: "break-word" }}
        />
      );
    });
    return <Card.Group>{items}</Card.Group>;
  }

  render() {
    return (
      <Fragment>
        {/* <Header /> */}
        <h3>Reported Disasters</h3>
        {this.renderCampaigns()}
        {/* Add other components or elements here */}
      </Fragment>
    );
  }
}

export default withRouter(HomePage);
