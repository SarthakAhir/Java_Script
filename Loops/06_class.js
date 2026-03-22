const myObject ={
    js: "JavaScript",
    py: "Python",
    java: "Java",
    csharp: "C#",
    swift: "Swift"
}

for (const key in myObject){
    console.log(`${key} is a file extionsion for ${myObject[key]}`);
}