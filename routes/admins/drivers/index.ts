import {Router} from "express";
import {DriversService} from "../../../services/admins/drivers/driversService";
import {sendError, sendResponse} from "../../../utils/response";
import {reqAsAny} from "../../../utils/utils";
const app = Router();

app.get('/', (req, res, next) => {
    new DriversService().getDrivers(reqAsAny(req).query.type).then(result => {
        sendResponse(res, 200, result);
    }).catch(err => {
        sendError(err, next);
    });
})

app.get('/:id', (req, res, next) => {
    new DriversService().getDriver(req.params.id).then(result => {
        sendResponse(res, 200, result);
    }).catch(err => {
        sendError(err, next);
    });
})

app.post('/:id/disable', (req, res, next) => {
    new DriversService().disableDriver(req.params.id, req.body).then(result => {
        sendResponse(res, 200, result);
    }).catch(err => {
        sendError(err, next);
    });
})

app.post('/:id/enable', (req, res, next) => {
    new DriversService().enableDriver(req.params.id).then(result => {
        sendResponse(res, 200, result);
    }).catch(err => {
        sendError(err, next);
    });
})

app.post('/:id/message', (req, res, next) => {
    new DriversService().messageDriver(req.params.id, req.body).then(result => {
        sendResponse(res, 200, result);
    }).catch(err => {
        sendError(err, next);
    });
})

app.post('/:id/disburse_earnings', (req, res, next) => {
    new DriversService().disburseUnPaidEarnings(req.params.id).then(result => {
        sendResponse(res, 200, result);
    }).catch(err => {
        sendError(err, next);
    });
})

module.exports = app
