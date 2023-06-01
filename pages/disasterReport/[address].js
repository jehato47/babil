import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { Card, Loader, Form, Button } from 'semantic-ui-react';
import eventTracker from '../../ethereum/DisasterEventTracker';
import web3 from '../../ethereum/web3';

const DisasterReport = () => {
  const router = useRouter();
  const { address } = router.query;
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [donationAmount, setDonationAmount] = useState('');
  const [donationError, setDonationError] = useState(null);
  const [donationLoading, setDonationLoading] = useState(false);
  const [donationSuccess, setDonationSuccess] = useState(false);
  const [totalDonation, setTotalDonation] = useState(0);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const eventId = parseInt(address);
        const result = await eventTracker.methods.getEvent(eventId).call();
        const event = {
          id: result[0],
          eventType: result[1],
          description: result[2],
          timestamp: result[3],
          location: result[4],
          status: result[5],
        };
        setEvent(event);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    if (address) {
      fetchEvent();
    }
  }, [address]);

  useEffect(() => {
    const fetchTotalDonation = async () => {
      if (event) {
        const eventId = parseInt(address);
        const totalDonation = await eventTracker.methods.getEventTotalDonation(eventId).call();
        setTotalDonation(totalDonation);
      }
    };

    fetchTotalDonation();
  }, [event, address, donationSuccess]);

  const handleDonation = async () => {
    setDonationError(null);
    setDonationLoading(true);
    setDonationSuccess(false);

    try {
      if (!web3) {
        throw new Error('Web3 is not initialized');
      }

      const donationAmountWei = web3.utils.toWei(donationAmount, 'ether');
      const accounts = await web3.eth.getAccounts();
      const fromAddress = accounts[0];
      const eventId = parseInt(address);

      await eventTracker.methods.addDonation(eventId, donationAmountWei).send({ from: fromAddress, value: donationAmountWei });
      // Donation successful, you can add any additional logic here
      console.log('Donation successful');
      setDonationSuccess(true);
    } catch (error) {
      console.error(error);
      setDonationError('Failed to make a donation. Please try again.');
    } finally {
      setDonationLoading(false);
    }
  };

  return (
    <div>
      <h1>Disaster Report</h1>
      {loading ? (
        <Loader active inline="centered">
          Loading...
        </Loader>
      ) : (
        event && (
          <>
            <Card>
              <Card.Content>
                <Card.Header>{event.eventType}</Card.Header>
                <Card.Meta>ID: {event.id}</Card.Meta>
                <Card.Description>{event.description}</Card.Description>
              </Card.Content>
              <Card.Content extra>
                <strong>Location: </strong>
                {event.location}
              </Card.Content>
              <Card.Content extra>
                <strong>Status: </strong>
                {event.status}
              </Card.Content>
            </Card>
            <Card>
              <Card.Content>
                <Card.Header>Make a Donation</Card.Header>
              </Card.Content>
              <Card.Content>
                <Form>
                  <Form.Input
                    label="Donation Amount (ETH)"
                    placeholder="Enter donation amount"
                    value={donationAmount}
                    onChange={(e) => setDonationAmount(e.target.value)}
                  />
                  {donationError && <p style={{ color: 'red' }}>{donationError}</p>}
                  {donationSuccess && <p style={{ color: 'green' }}>Donation successful!</p>}
                  {donationLoading ? (
                    <Button primary loading>
                      Loading
                    </Button>
                  ) : (
                    <Button primary onClick={handleDonation}>
                      Donate
                    </Button>
                  )}
                </Form>
              </Card.Content>
            </Card>
            <Card>
              <Card.Content>
                <Card.Header>Total Donations</Card.Header>
              </Card.Content>
              <Card.Content>
                <p>{web3.utils.fromWei(totalDonation.toString(), 'ether')} ETH</p>
              </Card.Content>
            </Card>
          </>
        )
      )}
    </div>
  );
};

export default DisasterReport;
