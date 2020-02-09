const CLIENT_ID = '335342881984-mbgnfkqp0hkvqi1ccbnjanndu2d642rb.apps.googleusercontent.com';
const DISCOVERY_DOCS = [
  'https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest'
];
const SCOPES = 'https://www.googleapis.com/auth/youtube.readonly';

const btnAuth = document.getElementById('btnAuth');
const btnSignout = document.getElementById('btnSignout');
const inpSearch = document.getElementById('inpSearch');
const btnSearch = document.getElementById('btnSearch');

// Load auth2 library
function handleClientLoad() {
  gapi.load('client:auth2', initClient);
}

// Init API client library and set up sign in listeners
function initClient() {
  gapi.client
    .init({
      discoveryDocs: DISCOVERY_DOCS,
      clientId: CLIENT_ID,
      scope: SCOPES
    })
    .then(() => {
      // Listen for sign in state changes
      gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);
      // Handle initial sign in state
      updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
      btnAuth.onclick = handleAuthClick;
      btnSignout.onclick = handleSignoutClick;
    });
}

// Handle login
function handleAuthClick() {
  gapi.auth2.getAuthInstance().signIn();
}

// Handle logout
function handleSignoutClick() {
  gapi.auth2.getAuthInstance().signOut();
}

// Update sign in status
function updateSigninStatus(_signedIn) {
  if (_signedIn) {
    btnAuth.style.display = 'none';
    btnSignout.style.display = 'block';
  } else {
    btnAuth.style.display = 'block';
    btnSignout.style.display = 'none';
  }
}
