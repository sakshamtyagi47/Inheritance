{/* <h3>que1:: create 2 object - parent and child . attached method to parent and used those method 
in child object using parent prototype</h3> <br>    */}


let parent = {
    property: "1500 sqft",
    villa:"ADA Colony Naini",
 };
 let child={
    address:'Prayagraj Uttar Pradesh',
    Dist:'Prayagraj'
 }
 child._proto_=parent;
 console.log(child._proto_.property);
 
 
 {/* <h3>que2:: write code to explain prototype chaining</h3><br> */}
 
 
    let father = {
    property: "1500 sqft",
    villa:"Prayagaj",
    getDetails:function() {
        console.log( "villa","property")
    }
 
 };
 let child1={
    address:'Prayagraj Uttar Pradesh',
    Dist:'Prayagraj'
 };
 child1._proto_=father;
 console.log(child1._proto_.property)
 father.getDetails();
 
 
 
 {/* <h3>que3:: add a method to calculate sum of all element in array's prototype used that method to calculate sum 
 for all multiple arrays</h3 */}
 
 
    function sum(arr) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    };
    return sum;
 };
 
 let arr = [12, 3, 4, 15];
 let n = arr.length;
 
 console.log(sum(arr));
 
 
 {/* <h3>que4:: write a java script function to retrive all the names of objectes own and inherited properties</h3><br> */}
 
 
    let obj =  {
    property: "1500 sqft",
    villa:"ADA Colony Naini",
    address:'Prayagaj Uttar Pradesh',
    Dist:'Prayagraj'
 };
 let result=Object.keys(obj)
 console.log(result)