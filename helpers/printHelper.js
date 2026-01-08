export function printAge(age) {
    console.log(age)
}

// export class CustomerDetails {

//     printFirstName(printFirstName){
//     console.log(printFirstName)
//     }

//     printLastName(printLastName){
//         console.log(printLastName)
//         }
// }

class CustomerDetails {

    printFirstName(printFirstName){
    console.log(printFirstName)
    }
/** 
 * description to method can go here
 * this method will print the last name 
 * @param {string} lastName
 */
    printLastName(printLastName){
        console.log(printLastName)
        }
}
export const customerDetails = new CustomerDetails()