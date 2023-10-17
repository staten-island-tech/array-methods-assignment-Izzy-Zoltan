const students = [{
        firstname: "Gabriel Isaac",
        Lastname: "Liberov",
        Haircolor: "\"Ginger\"",
        Brownhair:  false, 
        num: [1,437],
    },
    {
        firstname: "Noah",
        lastname: "Rozin",
        Haircolor: "black",
        Brownhair: false,
        num: [5],
    },
    {
        firstname: "Rylan",
        lastname: "Geykhman",
        Haircolor: "Brown",
        Brownhair: true,
        num: [3,69,78],
    },
    {
        firstname: "Izzy",
        lastname: "Zoltan",
        Haircolor: "Brown-ER",
        Brownhair: true,
        num:[8,42,36,12],
    } 
];

students.forEach((student)=> console.log(student));

students.forEach((student)=> 
student.num.forEach((numbi)=> console.log(numbi)));

const browntrue = students.filter((student)=> student.Brownhair);
browntrue.forEach((brownhaired)=> console.log(brownhaired.firstname + ' has brown hair'));


