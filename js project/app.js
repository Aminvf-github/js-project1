var userList = [
    { user: "username", age: 21, gender: "male" },
    { user: "username", age: 18, gender: "male" },
    { user: "username", age: 31, gender: "male" },
    { user: "username", age: 17, gender: "female" },
    { user: "username", age: 38, gender: "male" },
    { user: "username", age: 35, gender: "male" },
    { user: "username", age: 22, gender: "female" },
    { user: "username", age: 43, gender: "male" },
    { user: "username", age: 64, gender: "female" },
    { user: "username", age: 31, gender: "male" },
    { user: "username", age: 28, gender: "male" },
    { user: "username", age: 21, gender: "female" },
    { user: "username", age: 27, gender: "male" },
    { user: "username", age: 22, gender: "female" },
    { user: "username", age: 43, gender: "female" },
    { user: "username", age: 32, gender: "female" },
    { user: "username", age: 25, gender: "female" },
    { user: "username", age: 13, gender: "male" },
    { user: "username", age: 53, gender: "male" },
    { user: "username", age: 32, gender: "female" },
  ];
  function list(list) {
    var maleLength = 0;
    var femaleLength =0;
for (var index = 0; index < list.length; index++) {
    if (userList[index].gender === "male") {
        maleLength++;
    }else if(userList[index].gender === "female"){
        femaleLength++;
    }
}
return{
    maleLength : maleLength,
    femaleLength :femaleLength,
}
}
var result = list(userList);
console.log(result);