const config = {
  apiKey: "AIzaSyBu6oPPZAn8trvU5VO2v7bWHHgubmcaZrc",
  authDomain: "whatsappclone-226a0.firebaseapp.com",
  databaseURL: "https://whatsappclone-226a0.firebaseapp.com/__/auth/handler",
  projectId: "whatsappclone-226a0",
  storageBucket: "whatsappclone-226a0.appspot.com",
  messagingSenderId: "966935256356",
  appId: "1:966935256356:web:048394c83c6227ad8fe7b1"
};

export default () => {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
    'Add your web app\'s configuration object to firebase-config.js')
  } else {
    return config;
  }
}