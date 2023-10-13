#!/usr/bin/env node

import inquirer from "inquirer";
import showBanner from "node-banner";
import chalk from "chalk";

(async () => {
    await showBanner ("The Currency Converter", "FOR CURRENCY CONVERSION", "red", "white")
    })()

    let conversion = {
        "PKR": {
            "PKR": 1,
            "USD": 0.0035,
            "GBP": 0.0028    
        },
        "USD": {
            "PKR": 287.22,
            "USD": 1,
            "GBP": 0.82
        },
        "GBP": {
            "PKR": 351.59,
            "USD": 1.22,
            "GBP": 1
        }
    }
    
    async function currencyconverter() {
        let ask: {
            FROM: "PKR"|"USD"|"GBP",
            TO: "PKR"|"USD"|"GBP",
            AMOUNTFORCONVERSION: number
        } = await inquirer.prompt([
            {
                name: "FROM",
                type: "list",
                choices: ["PKR","USD","GBP"],
                message: chalk.blue("CONVERT FROM WHICH CURRENCY?")
            },
            {
                name: "TO",
                type: "list",
                choices: ["PKR","USD","GBP"],
                message: chalk.blue("CONVERT TO WHICH CURRENCY?")
            },
            {
                name: "AMOUNTFORCONVERSION",
                type: "number",
                message: chalk.blue("PLEASE ENTER AMOUNT FOR CONVERSION:")
            }
        ]);
        const {FROM, TO, AMOUNTFORCONVERSION} = ask;
        if (FROM && TO && AMOUNTFORCONVERSION) {
            let convertedAmount = Math.floor(conversion[FROM][TO]*AMOUNTFORCONVERSION);
            console.log(chalk.bgGrey`The conversion rate of the entered amount is${convertedAmount}`);
        }
        let re = await inquirer.prompt([
            {
                name: "start",
                type: "list",
                choices: ["Yes","No"],
                message: chalk.red("WOULD YOU LIKE TO USE THE CURRENCY CONVERTER AGAIN?")
            }
        ]);
        const {start} = re;
        if (start)
        start == "Yes"
    ? currencyconverter()
    : process.exit();
    }
    
    setTimeout(() => {
        currencyconverter();
    }, 1000);
    