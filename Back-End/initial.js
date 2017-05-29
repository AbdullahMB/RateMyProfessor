module.exports = app => {
    let univ = ['KFUPM', 'KSU', 'KAU'],

    dep = [
        {
            department: 'SWE',
            university: 'KFUPM'
        },
        {
            department: 'ICS',
            university: 'KFUPM'
        },
        {
            department: 'ISE',
            university: 'KSU'
        },
        {
            department: 'COE',
            university: 'KAU'
        },
    ],

    prof = [
        {
            name:'Jameleddine Hassine',
            department: 'SWE',
            university: 'KFUPM'
        },
        {
            name:'Waleed Humayed',
            department: 'ICS',
            university: 'KFUPM'
        },
        {
            name:'Ibrahim Alshaya',
            department: 'ISE',
            university: 'KSU'
        },
        {
            name:'Ahmad Algarni',
            department: 'COE',
            university: 'KAU'
        },
        {
            name:'Abdullah Babaier',
            department: 'SWE',
            university: 'KFUPM'
        },
        {
            name:'Khalid Waleed',
            department: 'SWE',
            university: 'KFUPM'
        },
        {
            name:'Abdulrahman Saeed',
            department: 'ISE',
            university: 'KSU'
        },
        {
            name:'Muhammad Altaieb',
            department: 'COE',
            university: 'KAU'
        }
    ]

    Universities = app.db.models.Universities;
    Departments = app.db.models.Departments;
    Professors = app.db.models.Professors;

    univ.forEach(function (u) {
        Universities.create({
            university: u
        }).then()
            .catch(error => {
                ({msg: error.message});
            })
    });

    dep.forEach(function (d) {
        Departments.create({
            department: d.department,
            university: d.university
        }).then()
            .catch(error => {
                ({msg: error.message});
            })
    });

    prof.forEach(function (p) {
        Professors.create({
            name: p.name,
            department: p.department,
            university: p.university
        }).then()
            .catch(error => {
                ({msg: error.message});
            })
    });

};
