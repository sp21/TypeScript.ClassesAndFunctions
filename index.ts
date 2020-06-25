class Customer{
  //fields
  //each memeber is public by default
  custName:string;
  className:string;
  age:number;
  //constructor
  constructor(custName:string,className:string,age:number){
    this.custName=custName;
    this.className=className;
    this.age=age;
  }
  //function
  hello():Boolean{
  console.log("hello shreyas")
  return true;
}
  
}
var cust1:Customer =new Customer("shreyas","A",21);
console.log(cust1.custName);
console.log(cust1.className);
console.log(cust1.age);
cust1.hello();
//output:
//shreyas
//hello shreyas