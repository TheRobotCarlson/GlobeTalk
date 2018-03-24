var apiKey = "46086632";
var sessionId = "1_MX40NjA4NjYzMn5-MTUyMTkxNDk0MTM4OX5EWU03bmFEMnFWSTJ0NVZpNElKbjBaOUx-UH4";
// var token = "T1==cGFydG5lcl9pZD00NjA4NjYzMiZzaWc9ZTgxMWQ0N2EyOTc2MGU4NmQwMzUyNDI4ZTJjYjEzYWVlOTk1OGEyNTpzZXNzaW9uX2lkPTFfTVg0ME5qQTROall6TW41LU1UVXlNVGt4TkRrME1UTTRPWDVFV1UwM2JtRkVNbkZXU1RKME5WWnBORWxLYmpCYU9VeC1VSDQmY3JlYXRlX3RpbWU9MTUyMTkxNTQ4MCZub25jZT0wLjc2OTQzOTI3NzgxNjYyMjYmcm9sZT1wdWJsaXNoZXImZXhwaXJlX3RpbWU9MTUyMjAwMTg3OSZpbml0aWFsX2xheW91dF9jbGFzc19saXN0PQ==";


// (optional) add server code here


// Handling all of our errors here by alerting them
function handleError(error) {
  if (error) {
    alert(error.message);
  }
}

function initializeSession(token) {
  var session = OT.initSession(apiKey, sessionId);

  // Subscribe to a newly created stream
  session.on('streamCreated', function(event) {
    session.subscribe(event.stream, 'subscriber', {
      insertMode: 'append',
      width: '100%',
      height: '100%'
    }, handleError);
  });
  // Create a publisher
  var publisher = OT.initPublisher('publisher', {
    insertMode: 'append',
    width: '100%',
    height: '100%'
  }, handleError);

  // Connect to the session
  session.connect(token, function(error) {
    // If the connection is successful, publish to the session
    if (error) {
      handleError(error);
    } else {
      session.publish(publisher, handleError);
    }
  });
}
