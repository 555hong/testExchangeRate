import express, { Application } from "express";
import exchangeRoute from "./exchange.route";

function initialRoutes(app: Application) {
    app.use('/exchange', exchangeRoute);
}
  
export default {
    initialRoutes,
};