import React, { Fragment, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Card } from "semantic-ui-react";
import eventTracker from "../ethereum/DisasterEventTracker";

const HomePage = ({ owner }) => {
  const router = useRouter();
  const [events, setEvents] = useState([]);

  useEffect(() => {
    getAllEvents();
  }, []);

  const goToEvent = (address) => {
    router.push(`/disasterReport/${address}`);
  };

  async function getAllEvents() {
    try {
      const counter = await eventTracker.methods.getEventCount().call();
      const eventPromises = [];

      for (let i = 1; i <= counter; i++) {
        eventPromises.push(eventTracker.methods.getEvent(i).call());
      }

      const eventResults = await Promise.all(eventPromises);

      const events = eventResults.map((result) => ({
        id: result[0],
        eventType: result[1],
        description: result[2],
        timestamp: result[3],
        location: result[4],
        status: result[5],
      }));

      setEvents(events);
    } catch (error) {
      console.error(error);
    }
  }

  const renderCampaigns = () => {
    return events.map((event) => (
      <Card
        key={event.id}
        header={event.eventType}
        description={<a onClick={() => goToEvent(event.id)}>View Events</a>}
        fluid
        style={{ overflowWrap: "break-word" }}
      />
    ));
  };

  return (
    <Fragment>
      <h3>Reported Disasters</h3>
      {renderCampaigns()}
    </Fragment>
  );
};

export async function getStaticProps() {
  const owner = await eventTracker.methods.owner().call();
  return { props: { owner } };
}

export default HomePage;
