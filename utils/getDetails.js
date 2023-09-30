import askUsername from "./askUsername.js"
import showtable from "./showTable.js"

import axios from "axios"
import chalk from "chalk"
import ora from "ora"

export default async function getDetails(username){
    let spinner=ora(`${chalk.bold.dim ("Fetching User Details...")}`).start();
    const url=`https://api.github.com/users/${username}`
    try{
        let {data}=await axios.get(url);
        spinner.succeed(`${chalk.greenBright(`Details of "${username}"`)}`);
        showtable(data)
     
        
    }catch(error){
        spinner.fail(
            `${chalk.redBright("Invalid Username...")}`
        )
        console.log("api error");
        
        return askUsername;
        
    }
}