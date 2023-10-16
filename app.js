const numberlist = []
const students = [{
        firstname: "Gabriel Isaac",
        Lastname: "Liberov",
        Haircolor: "\"Ginger\"",
        Brownhair:  false, 
        number: [57,43]
    },
    {
        firstname: "Noah",
        lastname: "Rozin",
        Haircolor: "black",
        Brownhair: false,
        number: [17,96,52]
    },
    {
        firstname: "Rylan",
        lastname: "Geykhman",
        Haircolor: "Brown",
        Brownhair: true,
        number: [23]
    },
    {
        firstname: "Izzy",
        lastname: "Zoltan",
        Haircolor: "Brown-ER",
        Brownhair: true,
        number: [89,69,42,100]
    }
]

students.forEach((students)=> console.log(students.firstname))
students.forEach((students)=> console.log(students))
students.forEach((students)=> {
    function numberchecker(number){
            return number.filter(number>50);
          }
      
    students.number.forEach((number)=> {
    const numbers = students.number.filter(numberchecker(students.number));
    numberlist.push(numbers)
})})
console.log(numberlist)
