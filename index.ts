class Customer{
  custName:string;
  className:string;
  age:number;
  constructor(custName:string,className:string,age:number){
    this.custName=custName;
    className=className;
    this.age=age;
  }
  hello():Boolean{
  console.log("hello shreyas")
  return true;
}
  
}
var cust1:Customer =new Customer("shreyas","A",21);
console.log(cust1.custName);
cust1.hello();
//output:
//shreyas
//hello shreyas