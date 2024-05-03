import chalk from 'chalk';
export const logobject=(obj)=>{
    Object.entries(obj).forEach(entry=>{
        console.log(`${chalk.blue(entry[0])}: ${chalk.red.bold(entry[1])}`);
    });
}

