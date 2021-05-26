const path = require('path');
const router = require('express').Router();
// ROUTING

// module.exports = (router) => {
//   // => HTML GET Requests
//   // Below code handles when users "visit" a page.
//   // In each of the below cases the user is shown an HTML page of content

//   router.get('/tables', (req, res) => {
//     res.sendFile(path.join(__dirname, '../public/tables.html'));
//   });

//   router.get('/reserve', (req, res) => {
//     res.sendFile(path.join(__dirname, '../public/reserve.html'));
//   });

//   // If no matching route is found default to home
//   router.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, '../public/home.html'));
//   });
// };

router.get('/notes', (req, res) => {
    console.log('route hit');
    // respond with the notes html
    res.sendFile(path.join(__dirname, '../public/notes.html'));
});

router.get('*', (req, res) => {
    console.log('route hit');
    // respond with index.html
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

module.exports = router;
