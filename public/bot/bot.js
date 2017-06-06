var RegistryABI = [{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"registrars","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_registrarType","type":"uint8"}],"name":"getCost","outputs":[{"name":"cost","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_id","type":"bytes32"},{"name":"_addr","type":"address"},{"name":"_result","type":"string"},{"name":"_message","type":"string"}],"name":"error","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_name","type":"string"},{"name":"_registrarType","type":"uint8"}],"name":"lookupName","outputs":[{"name":"addr","type":"address"},{"name":"proof","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"registrarTypes","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_id","type":"bytes32"},{"name":"_name","type":"string"},{"name":"_addr","type":"address"},{"name":"_proof","type":"string"}],"name":"update","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"foo","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_registrarType","type":"string"},{"name":"_registrar","type":"address"}],"name":"createRegistrar","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_addr","type":"address"},{"name":"_registrarType","type":"uint8"}],"name":"lookupAddr","outputs":[{"name":"name","type":"string"},{"name":"proof","type":"string"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_proof","type":"string"},{"name":"_addr","type":"address"},{"name":"_registrarType","type":"uint8"}],"name":"register","outputs":[{"name":"oracleId","type":"bytes32"}],"payable":true,"type":"function"},{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"type":"function"},{"inputs":[],"payable":false,"type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_registrarType","type":"string"},{"indexed":false,"name":"_registrar","type":"address"}],"name":"RegistrarUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_proof","type":"string"},{"indexed":true,"name":"_addr","type":"address"},{"indexed":false,"name":"_id","type":"bytes32"},{"indexed":false,"name":"_registrarType","type":"uint8"}],"name":"RegistrationSent","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_name","type":"string"},{"indexed":true,"name":"_addr","type":"address"},{"indexed":false,"name":"_proof","type":"string"},{"indexed":false,"name":"_id","type":"bytes32"},{"indexed":false,"name":"_registrarType","type":"uint8"}],"name":"NameAddressProofRegistered","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_addr","type":"address"},{"indexed":false,"name":"_id","type":"bytes32"},{"indexed":false,"name":"_result","type":"string"},{"indexed":false,"name":"_message","type":"string"},{"indexed":false,"name":"_registrarType","type":"uint8"}],"name":"RegistrarError","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_actual","type":"address"},{"indexed":true,"name":"_addr","type":"address"},{"indexed":false,"name":"_registrarType","type":"uint8"}],"name":"AddressMismatch","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_funds","type":"uint256"},{"indexed":false,"name":"_cost","type":"uint256"},{"indexed":true,"name":"_addr","type":"address"},{"indexed":false,"name":"_registrarType","type":"uint8"}],"name":"InsufficientFunds","type":"event"}]
var RegistryAddress = "0xe903a2a01e7a7fcf2f92d4fbc16116dd7cef3374";
var RegistryContract = web3.eth.contract(RegistryABI);
var Registry = RegistryContract.at(RegistryAddress);

// var RegistryABI = [{"constant":false,"inputs":[{"name":"_proof","type":"string"},{"name":"_addr","type":"address"}],"name":"register","outputs":[{"name":"oracleId","type":"bytes32"}],"payable":true,"type":"function"},{"constant":true,"inputs":[{"name":"_addr","type":"address"}],"name":"lookupAddr","outputs":[{"name":"name","type":"string"},{"name":"proof","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_name","type":"string"}],"name":"lookupName","outputs":[{"name":"addr","type":"address"},{"name":"proof","type":"string"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_name","type":"string"},{"name":"_addr","type":"address"},{"name":"_proof","type":"string"}],"name":"update","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_id","type":"bytes32"},{"name":"_addr","type":"address"},{"name":"_result","type":"string"},{"name":"_message","type":"string"}],"name":"error","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"getCost","outputs":[{"name":"cost","type":"uint256"}],"payable":true,"type":"function"},{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"type":"function"},{"inputs":[],"payable":false,"type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_proof","type":"string"},{"indexed":false,"name":"_addr","type":"address"},{"indexed":false,"name":"_id","type":"bytes32"}],"name":"RegistrationSent","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_name","type":"string"},{"indexed":false,"name":"_addr","type":"address"},{"indexed":false,"name":"_proof","type":"string"}],"name":"NameAddressProofRegistered","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_addr","type":"address"},{"indexed":false,"name":"_id","type":"bytes32"},{"indexed":false,"name":"_result","type":"string"},{"indexed":false,"name":"_message","type":"string"}],"name":"RegistrarError","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_actual","type":"address"},{"indexed":false,"name":"_addr","type":"address"}],"name":"AddressMismatch","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_funds","type":"uint256"},{"indexed":false,"name":"_cost","type":"uint256"},{"indexed":false,"name":"_addr","type":"address"}],"name":"InsufficientFunds","type":"event"}];
// var RegistryAddress = "0x293442b5a058A80B2cD5BA6627f7b64695FBD9cb";
// var RegistryContract = web3.eth.contract(RegistryABI);
// var Registry = RegistryContract.at(RegistryAddress);

function nameToAddr(params) {
  try {
    var result = Registry.lookupName.call(params.name, 0);
    // var result = retval? retval[0]: 0;
    if (result[0] == 0) {
      return {"text-message": params.name + " is not registered"};
    }
  } catch (err) {
    return {"text-message": "Error: " + err.message};
  }
  return {"text-message": params.name + " is " + result[0]};
}

var nameToAddr = {
  name: "nameToAddr",
  icon: "money_white",
  color: "#5fc48d",
  title: "Check Name",
  description: "Find Ethereum Address For Twitter Handle",
  sequentialParams: true,
  params: [{
    name: "name",
    type: status.types.TEXT
  }],
  handler: nameToAddr
};

status.command(nameToAddr);

function addrToName(params) {
  try {
    var result = Registry.lookupAddr.call(params.addr, 0);
    if (result[0] == 0) {
      return {"text-message": params.addr + " is not registered"};
    }
  } catch (err) {
    return {"text-message": "Error: " + err.message};
  }
  return {"text-message": params.addr + " is " + result[0]};
}

var addrToName = {
  name: "addrToName",
  icon: "money_white",
  color: "#5fc48d",
  title: "Check Address",
  description: "Find Twitter Handle For Ethereum Address",
  sequentialParams: true,
  params: [{
    name: "addr",
    type: status.types.TEXT
  }],
  handler: addrToName
};

status.command(addrToName);

function register(params) {
  console.log("test");
  try {
    var gasCost = Registry.getCost.call(0);
    var result = Registry.register.sendTransaction(params.proof, web3.eth.accounts[0], 0, {from: web3.eth.accounts[0], value: gasCost});
    return {"text-message": params.proof + " sent for validation via Oracle"};
  } catch (err) {
    return {"text-message": "Error: " + JSON.stringify(context.from)};
  }
}

var register = {
  name: "register",
  icon: "money_white",
  color: "#5fc48d",
  title: "Register Name",
  description: "Link Ethereum Account To Reddit Handle",
  sequentialParams: true,
  params: [{
    name: "proof",
    type: status.types.TEXT
  }],
  handler: register
};
status.command(register);
  // preview: function (params, context) {
  //     var addressStyle = {
  //       fontSize: 36,
  //       color: "#000000",
  //       height: 40
  //     };
  //     var (err, retval) = Registry.lookupName.call(params.name, 0);
  //     var address = status.components.view(
  //       {
  //         flexDirection: "column",
  //         alignItems: "flex-end",
  //       },
  //       [status.components.text(
  //         {
  //           style: addressStyle,
  //           font: "light"
  //         },
  //         retval
  //     )]);
  //     return {
  //       markup: status.components.view(
  //         {
  //           style: {
  //             flexDirection: "row",
  //             justifyContent: "space-between",
  //             marginTop: 8,
  //             marginBottom: 8
  //           }
  //         },
  //         [address]
  //       )
  //     };
  //     }
  //   }
    // preview: function (params, context) {
    //     var amountStyle = {
    //         fontSize: 36,
    //         color: "#000000",
    //         height: 40
    //     };
    //
    //     var amount = status.components.view(
    //         {
    //             flexDirection: "column",
    //             alignItems: "flex-end",
    //         },
    //         [status.components.text(
    //             {
    //                 style: amountStyle,
    //                 font: "light"
    //             },
    //             status.localizeNumber(params.amount, context.delimiter, context.separator)
    //         )]);
    //
    //     var currency = status.components.view(
    //         {
    //             style: {
    //                 flexDirection: "column",
    //                 justifyContent: "flex-end",
    //                 paddingBottom: 0
    //             }
    //         },
    //         [status.components.text(
    //             {
    //                 style: {
    //                     color: "#9199a0",
    //                     fontSize: 16,
    //                     lineHeight: 18,
    //                     marginLeft: 7.5
    //                 }
    //             },
    //             "ETH"
    //         )]
    //     );
    //
    //     return {
    //         markup: status.components.view(
    //             {
    //                 style: {
    //                     flexDirection: "row",
    //                     justifyContent: "space-between",
    //                     marginTop: 8,
    //                     marginBottom: 8
    //                 }
    //             },
    //             [amount, currency]
    //         )
    //     };
    // },
    // shortPreview: function (params, context) {
    //     return {
    //         markup: status.components.text(
    //             {},
    //             I18n.t('send_title') + ": "
    //             + status.localizeNumber(params.amount, context.delimiter, context.separator)
    //             + " ETH"
    //         )
    //     };
    // },
    // handler: nameToAddr
    // validator: validateSend
    //
    // preview: function (params) {
    //   return {
    //       markup: status.components.text(
    //           {},
    //           "Who is " + params.name + " is " + result[0]
    //       )
    //   };
    //   try {
    //     var result = Registry.lookupName.call(params.name, 0);
    //     // var result = retval? retval[0]: 0;
    //     if (result[0] == 0) {
    //       return {
    //           markup: status.components.text(
    //               {},
    //               params.name + " is not registered"
    //           )
    //       };
    //     }
    //   } catch (err) {
    //     return {
    //         markup: status.components.text(
    //             {},
    //             "Error: " + err.message
    //         )
    //     };
    //   }
    //   return {
    //       markup: status.components.text(
    //           {},
    //           params.name + " is " + result[0]
    //       )
    //   };
    // },

    // preview: function (params) {
    //   try {
    //     var result = Registry.lookupAddr.call(params.addr, 0);
    //     if (result[0] == '') {
    //       return {
    //           markup: status.components.text(
    //               {},
    //               params.addr + " is not registered"
    //           )
    //       };
    //     }
    //   } catch (err) {
    //     return {
    //         markup: status.components.text(
    //             {},
    //             "Error: "+ err.message
    //         )
    //     };
    //   }
    //   return {
    //       markup: status.components.text(
    //           {},
    //           params.addr + " is " + result[0]
    //       )
    //   };
    // }
