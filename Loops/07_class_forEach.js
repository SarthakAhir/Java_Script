const coding = ['JavaScript', 'Python', 'Java', 'C#', 'Ruby'];

coding.forEach( (value) => {
    // console.log(value);
});

let myCodeing = [
    {
        name: 'JavaScript',
        FileType: 'js'
    },
    {
        name: 'Python',
        FileType: 'py'
    },
    {
        name: 'Java',
        FileType: 'java'
    }
    
];

myCodeing.forEach( (value) => {
    console.log(value.name);
});