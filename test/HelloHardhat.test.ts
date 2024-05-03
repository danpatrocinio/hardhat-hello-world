import { loadFixture } from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { expect } from "chai";
import hre from "hardhat";

describe("HelloHardHat", function () {
 
  async function deployFixture() {

    // Contracts are deployed using the first signer/account by default
    const [owner, otherAccount] = await hre.ethers.getSigners();

    const helloHardhat = await hre.ethers.getContractFactory("HelloHardhat");
    const contract = await helloHardhat.deploy();

    return { contract, owner, otherAccount };
  }

  it("Should get Hello World", async function () {
    const { contract } = await loadFixture(deployFixture);

    expect(await contract.getMessage()).to.equal("Hello World");
  });

  it("Should set new message", async function () {
    const { contract } = await loadFixture(deployFixture);
    const newMessage = "New Message";
    await contract.setMessage(newMessage);
    expect(await contract.getMessage()).to.equal(newMessage);
  });

  it("Should clear actual message", async function () {
    const { contract } = await loadFixture(deployFixture);
    await contract.clearMessage();
    expect(await contract.getMessage()).to.equal("");
  });
});
