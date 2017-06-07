var RegistryABI = [{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"registrars","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_registrarType","type":"uint8"}],"name":"getDetail","outputs":[{"name":"detail","type":"string"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_registrarType","type":"string"},{"name":"_registrarDetail","type":"string"},{"name":"_registrar","type":"address"}],"name":"createRegistrar","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_registrarType","type":"uint8"}],"name":"getCost","outputs":[{"name":"cost","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"registrarDetails","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_id","type":"bytes32"},{"name":"_addr","type":"address"},{"name":"_result","type":"string"},{"name":"_message","type":"string"}],"name":"error","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_name","type":"string"},{"name":"_registrarType","type":"uint8"}],"name":"lookupName","outputs":[{"name":"addr","type":"address"},{"name":"proof","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"registrarTypes","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_id","type":"bytes32"},{"name":"_name","type":"string"},{"name":"_addr","type":"address"},{"name":"_proof","type":"string"}],"name":"update","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_addr","type":"address"},{"name":"_registrarType","type":"uint8"}],"name":"lookupAddr","outputs":[{"name":"name","type":"string"},{"name":"proof","type":"string"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_proof","type":"string"},{"name":"_addr","type":"address"},{"name":"_registrarType","type":"uint8"}],"name":"register","outputs":[{"name":"oracleId","type":"bytes32"}],"payable":true,"type":"function"},{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_addr","type":"address"},{"indexed":false,"name":"_registrarType","type":"string"},{"indexed":false,"name":"_registrar","type":"address"}],"name":"RegistrarUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_addr","type":"address"},{"indexed":false,"name":"_proof","type":"string"},{"indexed":false,"name":"_id","type":"bytes32"},{"indexed":false,"name":"_registrarType","type":"uint8"}],"name":"RegistrationSent","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_addr","type":"address"},{"indexed":false,"name":"_name","type":"string"},{"indexed":false,"name":"_proof","type":"string"},{"indexed":false,"name":"_id","type":"bytes32"},{"indexed":false,"name":"_registrarType","type":"uint8"}],"name":"NameAddressProofRegistered","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_addr","type":"address"},{"indexed":false,"name":"_id","type":"bytes32"},{"indexed":false,"name":"_result","type":"string"},{"indexed":false,"name":"_message","type":"string"},{"indexed":false,"name":"_registrarType","type":"uint8"}],"name":"RegistrarError","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_addr","type":"address"},{"indexed":false,"name":"_mismatchedAddr","type":"address"},{"indexed":false,"name":"_registrarType","type":"uint8"}],"name":"AddressMismatch","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_addr","type":"address"},{"indexed":false,"name":"_funds","type":"uint256"},{"indexed":false,"name":"_cost","type":"uint256"},{"indexed":false,"name":"_registrarType","type":"uint8"}],"name":"InsufficientFunds","type":"event"}]
var RegistryAddress = "0xd51cd6b2dc70cefec5f5840b4181211e9ce128e7";
var RegistryContract = web3.eth.contract(RegistryABI);
var Registry = RegistryContract.at(RegistryAddress);

function suggestionsContainerStyle(suggestionsCount) {
    return {
        marginVertical: 1,
        marginHorizontal: 0,
        keyboardShouldPersistTaps: "always",
        height: Math.min(150, (56 * suggestionsCount)),
        backgroundColor: "white",
        borderRadius: 5,
        flexGrow: 1
    };
}

var suggestionContainerStyle = {
    paddingLeft: 16,
    backgroundColor: "white"
};

var suggestionSubContainerStyle = {
    height: 56,
    borderBottomWidth: 1,
    borderBottomColor: "#0000001f"
};

var valueStyle = {
    marginTop: 9,
    fontSize: 14,
    fontFamily: "font",
    color: "#000000de"
};

var registrars = [
    {
        name: "Reddit",
        enum: "0"
    },
    {
        name: "Github",
        enum: "1"
    },
    {
        name: "Twitter",
        enum: "2"
    }
];

function registrarSuggestions(params) {
    var suggestions = registrars.map(function (entry) {
        return status.components.touchable(
            {onPress: status.components.dispatch([status.events.SET_COMMAND_ARGUMENT, [0, entry.name]])},
            status.components.view(
                suggestionContainerStyle,
                [status.components.view(
                    suggestionSubContainerStyle,
                    [
                        status.components.text(
                            {style: valueStyle},
                            entry.name
                        )
                    ]
                )]
            )
        );
    });

    var view = status.components.scrollView(
        suggestionsContainerStyle(registrars.length),
        suggestions
    );

    return {markup: view};
}

function registrarEnum(registrarName) {
  var noRegistrars = registrars.length;
  for (var i = 0; i <  noRegistrars; i++) {
    if (registrarName == registrars[i].name) {
      return registrars[i].enum;
    }
  }
  return -1;
}

function validateParams(params, context) {
  if (params.hasOwnProperty("registrar")) {
    if (registrarEnum(params.registrar) < 0) {
      return {
        markup: status.components.validationMessage(
          "Unrecognised Registrar",
          "Please select from suggestions"
        )
      };
    }
  }
  if (params.hasOwnProperty("addr")) {
    if (!web3.isAddress(params.addr)) {
      return {
        markup: status.components.validationMessage(
          "Unrecognised Address",
          "Please enter valid address"
        )
      };
    }
  }
}

function nameToAddress(params) {
  try {
    var result = Registry.lookupName.call(params.name, registrarEnum(params.registrar));
    if (result[0] == 0) {
      return {"text-message": params.name + " is not registered"};
    }
  } catch (err) {
    return {"text-message": "Error: " + err.message};
  }
  return {"text-message": params.name + " was registered as:\n" + result[0] + "\n\nProof was:\n" + result[1]};
}

var nameToAddress = {
  name: "nameToAddress",
  icon: "money_white",
  color: "#5fc48d",
  title: "Get Address from Name",
  description: "Find Ethereum Address For Username",
  sequentialParams: true,
  params: [
    {
      name: "registrar",
      type: status.types.TEXT,
      suggestions: registrarSuggestions,
      placeholder: "Select Registrar then hit Send"
    },{
      name: "name",
      type: status.types.TEXT,
      placeholder: "Enter Name then hit Send"
    }
  ],
  preview: function (params) {
    return {
        markup: status.components.text(
            {},
            params.registrar + ": Who is " + params.name + "?"
        )
    };
  },
  handler: nameToAddress,
  validator: validateParams
};

status.command(nameToAddress);

function addressToName(params) {
  try {
    var result = Registry.lookupAddr.call(params.addr, registrarEnum(params.registrar));
    if (result[0] == '') {
      return {"text-message": params.addr + " is not registered"};
    }
  } catch (err) {
    return {"text-message": "Error: " + err.message};
  }
  return {"text-message": params.addr + " was registered as:\n" + result[0] + "\n\nProof was:\n" + result[1]};
}

var addressToName = {
  name: "addressToName",
  icon: "money_white",
  color: "#5fc48d",
  title: "Get Name from Address",
  description: "Find Username For Ethereum Address",
  sequentialParams: true,
  params: [
    {
      name: "registrar",
      type: status.types.TEXT,
      suggestions: registrarSuggestions,
      placeholder: "Select Registrar then hit Send"
    },{
      name: "addr",
      type: status.types.NUMBER,
      placeholder: "Enter Address then hit Send"
    }
  ],
  preview: function (params) {
    return {
        markup: status.components.text(
            {},
            params.registrar + ": Who is " + params.addr + "?"
        )
    };
  },
  handler: addressToName,
  validator: validateParams
};

status.command(addressToName);

function register(params) {
  try {
    var gasCost = Registry.getCost.call(registrarEnum(params.registrar));
    var result = Registry.register.sendTransaction(params.proof, web3.eth.accounts[0], registrarEnum(params.registrar), {from: web3.eth.accounts[0], value: gasCost});
    // var events = Registry.RegistrationSent({_addr: web3.eth.accounts[0]}, {fromBlock: 0});
    // events.get(
    //   function(error, result) {
    //     try {
    //       status.sendMessage(JSON.stringify(error));
    //       status.sendMessage(JSON.stringify(result));
    //     } catch (err) {
    //       status.sendMessage("Error: " + err.message);
    //     }
    //   }
    // );
    // web3.eth.getAccounts(function(error, account) {status.sendMessage("Got something!" + account);});
    return {"text-message": params.proof + " sent for validation with " + params.registrar + " oracle. Please be patient, this may take several minutes!"};
  } catch (err) {
    return {"text-message": "Error: " + err.message};
  }
}

var register = {
  name: "register",
  icon: "money_white",
  color: "#5fc48d",
  title: "Register Name",
  description: "Link Ethereum Account To Reddit Handle",
  sequentialParams: true,
  params: [
    {
      name: "registrar",
      type: status.types.TEXT,
      suggestions: registrarSuggestions,
      placeholder: "Select Registrar then hit Send"
    },{
      name: "proof",
      type: status.types.TEXT,
      placeholder: "Enter Proof then hit Send"
    }
  ],
  preview: function (params) {
    return {
        markup: status.components.text(
            {},
            "Register me at " + params.registrar + " with proof " + params.proof
        )
    };
  },
  handler: register,
  validator: validateParams
};
status.command(register);

function whoAmI(params) {
  try {
    var events = Registry.allEvents(function(error, event){
      if (!error) {
        console.log(event);
      } else {
        console.log(error);
      }
    });

    var result = Registry.lookupAddr.call(web3.eth.accounts[0], registrarEnum(params.registrar));
    if (result[0] == 0) {
      return {"text-message": "You're not registered"};
    }
  } catch (err) {
    return {"text-message": "Error: " + err.message};
  }
  return {"text-message": "You are " + result[0] + "!"};
}

var whoAmI = {
  name: "whoAmI",
  icon: "money_white",
  color: "#5fc48d",
  title: "Who Am I",
  description: "Look in the mirror...",
  params: [
    {
      name: "registrar",
      type: status.types.TEXT,
      suggestions: registrarSuggestions,
      placeholder: "Select Registrar then hit Send"
    }
  ],
  preview: function (params) {
    return {
        markup: status.components.text(
            {},
            "Who am I at " + params.registrar + "?"
        )
    };
  },
  validator: validateParams,
  handler: whoAmI
};

status.command(whoAmI);

function details(params) {
  try {
    var result = Registry.getDetail.call(registrarEnum(params.registrar));
  } catch (err) {
    return {"text-message": "Error: " + err.message};
  }
  return {"text-message": "Details for " + params.registrar + ":\n" + result};
}

var details = {
  name: "details",
  icon: "money_white",
  color: "#5fc48d",
  title: "Registrar Details",
  description: "Get Registrar Details",
  params: [
    {
      name: "registrar",
      type: status.types.TEXT,
      suggestions: registrarSuggestions,
      placeholder: "Select Registrar then hit Send"
    }
  ],
  preview: function (params) {
    return {
        markup: status.components.text(
            {},
            "How do I register at " + params.registrar + "?"
        )
    };
  },
  validator: validateParams,
  handler: details
};

status.command(details);

function getStatus(params) {
  try {
    var events = Registry.allEvents({fromBlock: web3.eth.blockNumber - 10000});
    var allEvents = events.get();
    var noEvents = true;
    for (var i = 0; i < allEvents.length; i++) {
      if (allEvents[i].args['_addr'] == web3.eth.accounts[0]) {
        var latestEvent = allEvents[i];
        noEvents = false;
      }
    }
    if (noEvents) {
      return {"text-message": "No recent registration status"};
    }
    return {"text-message": latestEvent.event + ": " + JSON.stringify(latestEvent.args)};
  } catch (err) {
    return {"text-message": "Error: " + err.message};
  }
}

var getStatus = {
  name: "status",
  icon: "money_white",
  color: "#5fc48d",
  title: "Registration Status",
  description: "Get Registration Status",
  preview: function (params) {
    return {
        markup: status.components.text(
            {},
            "What's the latest update on my registration?"
        )
    };
  },
  handler: getStatus
};

status.command(getStatus);
