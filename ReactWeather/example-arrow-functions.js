var names = ['Juan', 'JC', 'John'];

names.forEach(function(name){
  console.log('forEach', name);
});

//multiple lines
names.forEach((name) => {
  console.log('arrowFunc', name);
});

//single line
names.forEach((name) => console.log(name));

var returnMe = (name) => name + '!';
console.log(returnMe('JuanC'));

var person = {
  name: 'John',
  greet: function(){
    names.forEach((name) => {
      console.log(this.name  + ' say hi to ' + name);
    });
  }
}

person.greet();

//Challenge Area
function add(a,b){
  return a+b;
}

var addExpression = (a,b) => a+b;
var addStatements = (a,b) => {return a + b};

console.log(add(1,4));
console.log(add(5,2));
console.log(addExpression(3,2));
console.log(addStatements(6,2))
