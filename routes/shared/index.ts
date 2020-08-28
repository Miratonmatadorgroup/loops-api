import {Router} from "express";
const app = Router();

app.use('/wallets', require('./wallets'));
app.use('/payments', require('./payments'));
app.use('/cards', require('./cards'));
app.use('/geolocation', require('./geolocation'));
app.use('/notifications', require('./notifications'));
app.use('/transactions', require('./transactions'));
app.use('/zones', require('./zones'));
app.use('/parcel_categories', require('./parcelCategories'));

module.exports = app;
