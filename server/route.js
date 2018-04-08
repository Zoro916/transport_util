module.exports = function(app) {
    app.use('/user', require('./api/user'));
    app.use('/record', require('./api/record'));
    app.use('/oil', require('./api/oil'));
    app.use('/getdata', require('./api/getdata'));
};
