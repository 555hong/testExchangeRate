import { Request, Response } from "express";
import * as exchangeService from '../services/exchange.service'

export const fetchRate = async (req: Request , res: Response) => {
    const rate1 = req.query.curr1 as string | undefined;
    const rate2 = req.query.curr2 as string | undefined;

    // Validation: Check if curr1 or curr2 is missing or empty
    if (!rate1 || !rate2) {
        return res.status(400).json({
            error: "curr1 and curr2 are required parameters"
        });
    }
    console.log(rate1)
    console.log(rate2)
    const exchangeRate = await exchangeService.getExchangeRate(rate1,rate2)
    let returnObject = {
        currency_head:rate1,
        currency_tail:rate2,
        rate: exchangeRate.conversion_rate
    }
    res.json(returnObject);
};

export const fetchRateWithAmount = async (req: Request , res: Response) => {
    const rate1 = req.query.curr1 as string | undefined;
    const rate2 = req.query.curr2 as string | undefined;
    const amount = req.query.amount as string | undefined;

    // Validation: Check if curr1 or curr2 is missing or empty
    if (!rate1 || !rate2 || !amount) {
        return res.status(400).json({
            error: "curr1 ,curr2, amount are required parameters"
        });
    }
    console.log(rate1)
    console.log(rate2)
    console.log(amount)

    const exchangeRate = await exchangeService.getExchangeRateSpecifyAmount(rate1,rate2,amount)
    let returnObject = {
        currency_head:rate1,
        currency_tail:rate2,
        rate: exchangeRate.conversion_result
    }
    res.json(returnObject);
};