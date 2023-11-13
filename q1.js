class bankAcount{ 
    constructor (acountNo, initblance) {
    this.acountNo = acountNo;
    this.balance = initblance;
    }
    vaildDeposit(amount){
        return typeof amount>0 && amount === "number"
    }
    diposite(amount){
        this.balance = amount+ this.balance
        if (this.vaildDeposit) {
            console.log(`your deposit amount ${amount} and new balance is ${this.balance}`);
        } else {
            console.log("invailid amount please enter vailid amount");
        }
    }
    checkBlance(){ 
        console.log("your account blance is " + this.balance);
    }
}


const myAcount = new bankAcount("mithun10",1000)

myAcount.checkBlance()
myAcount.diposite(500)
myAcount.diposite(400)
myAcount.checkBlance()
