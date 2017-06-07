var Registry = artifacts.require("./Registry.sol");
var RedditRegistrarComputation = artifacts.require("./RedditRegistrarComputation.sol");
var GithubRegistrarComputation = artifacts.require("./GithubRegistrarComputation.sol");
var TwitterRegistrarComputation = artifacts.require("./TwitterRegistrarComputation.sol");

var redditDetail = '\
1) Post your ethereum address from your Reddit username to /r/ethereumproofs.\n\
2) Take the hash from the URL of your post:\n\
   e.g. for: "https://www.reddit.com/r/ethereumproofs/comments/6fsght/0x9a9d8ff9854a2722a76a99de6c1bb71d93898ef5/"\n\
   the hash would be 6fsght\n\
3) Send this hash as your proof when you register.\n';

var githubDetail = '\
1) Post your ethereum address to a gist as its content.\n\
2) Take the hash from the URL of your post:\n\
   e.g. for: "https://gist.github.com/adamdossa/57510394e27511c71eb7de9690b02bc8"\n\
   the hash would be 57510394e27511c71eb7de9690b02bc8\n\
3) Send this hash as your proof when you register.';

var twitterDetail = '\
1) Tweet your ethereum address.\n\
2) Send your Twitter handle as your proof when you register.\n';

module.exports = function(deployer) {
  var registry;
  deployer.deploy(Registry).then(function() {
    return deployer.deploy(RedditRegistrarComputation, Registry.address);
  }).then(function() {
    return deployer.deploy(GithubRegistrarComputation, Registry.address);
  }).then(function() {
    return deployer.deploy(TwitterRegistrarComputation, Registry.address);
  }).then(function() {
    return Registry.deployed();
  }).then(function(instance) {
    registry = instance;
    return registry.createRegistrar("Reddit", redditDetail, RedditRegistrarComputation.address);
  }).then(function(txId) {
    return registry.createRegistrar("Github", githubDetail, GithubRegistrarComputation.address);
  }).then(function(txId) {
    return registry.createRegistrar("Twitter", twitterDetail, TwitterRegistrarComputation.address);
  });
};



// var OraclizeAPI = artifacts.require("./OraclizeAPI.sol");
//
// module.exports = function(deployer) {
//   deployer.deploy(OraclizeAPI);
// };
