import chalk from 'chalk';
import { logobject } from './logging.mjs';
console.log(`${chalk.blue.bold('First Name: ')} Divyansh`);
console.log(`${chalk.green.bold('Last Name: ')} Sinha`);


const employee={
    "id":2,
    "email":"sumit_kumarsinha@yahoo.com",
    "firstname":"sumit",
    "lastname":"sinha",
    "age":50
};

logobject(employee);

