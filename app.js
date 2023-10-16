const students = [{
        firstname: "Gabriel Isaac",
        Lastname: "Liberov",
        Haircolor: "\"Ginger\"",
        Brownhair:  false, 
    },
    {
        firstname: "Noah",
        lastname: "Rozin",
        Haircolor: "black",
        Brownhair: false,
    },
    {
        firstname: "Rylan",
        lastname: "Geykhman",
        Haircolor: "Brown",
        Brownhair: true,
    },
    {
        firstname: "Izzy",
        lastname: "Zoltan",
        Haircolor: "Brown-ER",
        Brownhair: true,
    }
]

students.forEach((student)=> console.log(student.firstname));
students.forEach((student)=> console.log(student)) ;
const browntrue = students.filter((student)=> student.Brownhair);
browntrue.forEach((brownhaired)=> console.log(brownhaired.firstname))


