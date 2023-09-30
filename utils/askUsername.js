import readline from "readline-sync"
import chalk from "chalk"
import getDetails from "./getDetails.js"

export default function question(){
    let inputuserName=readline.question(`${chalk.blueBright("Enter your username:")}`)

    getDetails(inputuserName)

}