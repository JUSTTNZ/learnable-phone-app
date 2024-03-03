class Phone {

    static number = parseFloat(this.number)
    constructor(){
        // this is an empty array used to save the phonenumbers and the observers
        this.Phonenumber = []
        this.observers = []
    }

    // addnumber is used to add new numbers to the phonenumber array
    addNumber(number){

        if(number.length == 11){
        this.Phonenumber.push(number);
        console.log(`${number} is now saved to the list`);

    }else{
        console.log(`${number} is not a valid number,it must be up to 11 digit`);
     };
     return

    };
    // the removeNumber function removes the first number in the array 
    removeNumber(number){
        const index = this.Phonenumber.includes(number);
        if( index !== -1 && number.length == 11){
            this.Phonenumber.splice(index, 1)
            console.log(`The phone number ${number} has been removed from the list`)
        }        
        return

    }
    //the dialNumber helps to dial your desired numbers and if its not found in the array it tells you that is not found
    dialNumber(number){
        if(this.Phonenumber.includes(number)){
            this.notifyObservers(number)

        }else{
            console.log("The number is not found")
        }
    }      
    
    // this adds the observer to the back of the array of the empty observers array
    addObservers(observer){
        this.observers.push(observer)
    }

    // this removes an observer from the observers array
    removeObservers(observer){
        const index = this.observers.indexof(observer)
        if(index !== -1){
            this.observers.splice(index, 1)

        }
    }
    //this is used to notify the particular number in the array of numbers
    notifyObservers(number){
        this.observers.forEach(observer => observer.notify(number));
    }

}

// an object that consoles the number you are calling
class printNumberObserver {
    notify(number){
        console.log("Dialing ",number)
    }
   
}

// a new object that prints the number you dialed
class customObserver {
    notify(number){
        console.log("You dialled ",number)
    }

}

//new instance of the objects class above 
const Telephone = new Phone();
const newprintNumberObserver = new printNumberObserver();
const newcustomObserver = new customObserver();



Telephone.addObservers(newprintNumberObserver)

Telephone.addObservers(newcustomObserver)

Telephone.addNumber("07031352210")
console.log()
Telephone.addNumber("08065703136")
console.log()
console.log()
// Telephone.removeNumber("08065703136")
// Telephone.removeNumber("07031352210")
Telephone.dialNumber("07031352210")

