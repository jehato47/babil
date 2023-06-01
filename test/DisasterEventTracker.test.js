const assert = require("assert");
const ganache = require("ganache-cli");
const Web3 = require("web3");

const web3 = new Web3(ganache.provider());

const compiledContract = require("../ethereum/build/DisasterEventTracker.json");

let accounts;
let tracker;

beforeEach(async () => {
  accounts = await web3.eth.getAccounts();

  tracker = await new web3.eth.Contract(JSON.parse(compiledContract.interface))
    .deploy({ data: compiledContract.bytecode })
    .send({ from: accounts[0], gas: "1000000" });
});

describe("DisasterEventTracker", () => {
  it("deploys a contract", () => {
    assert.ok(tracker.options.address);
  });

  it("marks the deployer as the contract owner", async () => {
    const owner = await tracker.methods.owner().call();
    assert.equal(owner, accounts[0]);
  });

  it("creates a new event", async () => {
    const eventType = "Flood";
    const description = "Heavy rain causing flooding";
    const location = "City A";

    await tracker.methods.createEvent(eventType, description, location).send({
      from: accounts[0],
      gas: "1000000",
    });

    const event = await tracker.methods.getEvent(1).call();

    assert.equal(event[0], "1");
    assert.equal(event[1], eventType);
    assert.equal(event[2], description);
    assert.ok(event[3] > 0);
    assert.equal(event[4], location);
    assert.equal(event[5], "pending");
  });
});
