# RegisterEthBot (Status Hackathon)

This bot facilitates communication with a collection of Smart Contracts (deployed on the Ropsten Ethereum blockchain).

This collection of Smart Contracts allows users to associate their Ethereum addresses with a number of different social network handles.

Currently implemented are Registrar contracts for Reddit, Github & Twitter - the framework provides straightforward interfaces to allow other new Registrar contracts to be implemented for additional social networks.

## Registration

Registration is generally a two step process:

1. Post your Ethereum address using your social media handle. For the currently implemented registrars this involves:
  - Twitter: tweet out your Ethereum address from your twitter handle.
  - Reddit: post to /r/ethereumproofs a message containing your Ethereum address.
  - Githib: create a public gist with your Ethereum address in the description.
2. Send a transaction from your Ethereum address to the Registry contract, along with a proof which is used by the relevant Registrar contract to validate that 1. above.

## Architecture of Smart Contracts

There is a single Registry contract (implementing the RegistryI interface). This contract is responsible for holding mappings between Ethereum addresses and social media handles (partitioned by social media network, e.g. Reddit, Twitter).

The Registry contract allows Registrar contracts (implementing the RegistrarI interface) to register with it. A Registrar contract is specific to a given social media network, and is responsible for implementing behaviour necessary to prove that a given social media handle owns an Ethereum address. Usually this is done via an Oracle service (using Oraclize) to check the evidence provided in 1. above. 

When a user wishes to register a new social media handle, they would call the Registry contract specifying their proof (used by the Registrar contract to check 1. above).

The Registry contract can then be used to query your handles, and the handles / Ethereum addresses of other users.

## Status Bot

It is possible to issue the following commands:

/details - shows the details of how to generate the proof from 1. above for each of the Registrars (currently Reddit, Github & Twitter).

/whoAmI - shows your social media handle (if registered previously).

/status - shows the most recent event issued by the Registry contract that relates to your address. Can be used to track the status of your registration request(s).

/register - allows you to register your Ethereum address with any of the provided registrars.

/nameToAddress - shows the Ethereum address associated with a provided social media handle.

/addressToName - shows the social media handle associated with a provided Ethereum address.

## Deployment - Smart Contracts

1. We need to deploy our smart contracts - this is done via the truffle framework:
  - `truffle compile` - this will check our smart contracts compile and generate associated .json files.
  - `truffle migrate` - this will deploy our contracts onto whichever Ethereum network is configured in truffle.js
  - `truffle test` - this will execute tests against the contracts. Note - this needs to be run on testrpc.
  
NB - for the purpose of the Status Hackathon, we need to deploy our contracts to the Ropsten network as bots can only communicate with contracts on this network (i.e. they can't use testrpc).

## Deployment - RegisterEthBot

This assumes you are using an Genymotion as your Android emulator:

1. Start Genymotion and Android emulator (following instructions as per Status documentation).
1. Open the Status app (if you've downloaded the latest nightly build .apk file, this can be dragged onto the Android emulator within Genymotion).
1. Log in / create a new user within Status, and in the Console app (in Status) execute /debug On.
1. In a terminal run `status-dev-cli scan`. You should see a couple of IP addresses - ignore the one which has "56" in it, and use the other below in place of <IPADDRESS>.
1. In a terminal run `IP=<IPADDRESS> npm run start`. This will execute a `status-dev-cli add` and a `status-dev-cli watch` on the relevant bot.js file (in public/bots/ directory). It should also start the RegisterEthBot chat screen on your Android emulator.
