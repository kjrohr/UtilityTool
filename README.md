#Debug Tracker Tool
##A utility tool for developers to use as an aid for errors that can't always be seen.

###Overview
######Debug Tracker is a logging tool established to make finding hidden errors more easier.

###Installation

```json
npm install debug-tracker
```

###Usage

######When a single app is created in the Database

######to initiate the debug mode and see whats going on inside

######you would input this command into your terminal:

```json
DEBUG=True node src/yourserver.js
```
######to turn off the Debug Mode you would input only this command into your terminal:

```json
node src/yourserver.js
```

######Once initiated, you can go to your database and see if the app has been created


######if you have an error your terminal will output this information:

```json
Err! or Error!
```

######Here is an example of how to ultilize this tool:

```json
// Read All Users
      router.get('/users', (req, res) => {
        // Debug Tracker To Route Tool
        util.debug('Route Hit: GET /users', true);
        user.findAll((err) => {
          res.status(500).json(err);
        }, (data) => {
          // Debug Tracker To Object Data Tool
          util.debug('Model Gave Back: FindAll Users', data);
          res.status(200).json(data);
        });
      });
```
