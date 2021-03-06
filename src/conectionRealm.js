import Realm from 'realm';
// Returns the shared instance of the Realm app.
export function getRealmApp() {
  //MONGO COMPASS
   //const appId = 'mongodb+srv://luis_henrique:estrelinha@cluster0.cov6a.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'; // Set Realm app ID here.


  //REALM
   //const appId = 'mongodb+srv://pitcho:pitcho@cluster0.cov6a.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'; // Set Realm app ID here.
   const appConfig = {
     id: appId,
     timeout: 10000,
   };
  return new Realm.App(appConfig);
}