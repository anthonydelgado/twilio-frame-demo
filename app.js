const express = require('express');
const app = express();

// setting
app.set('port', process.env.PORT || 5000);

// server
app.listen(app.get('port'), () => {
    console.log('magic happens on port', app.get('port'))
});
