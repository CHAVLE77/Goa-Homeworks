class Statistic {
    static academies = [
        { name: "Academy A", students: 1000 },
        { name: "Academy B", students: 1200 },
        { name: "Academy C", students: 2250 }
    ];

    static studentCount(){
        const totalStudents = Statistic.academies.reduce((sum, academy) => sum + academy.students, 0);
        return totalStudents;
    }

    static percentage(){
        const totalStudents = Statistic.studentCount()
        Statistic.academies.forEach(academy => {
            academy.percentage = ((academy.students / totalStudents) * 100).toFixed(2) + '%'
        })
    }

    static display(){
        const totalStudents = Statistic.studentCount()
        console.log('totalStudent:' + totalStudents)
        Statistic.academies.forEach(academy => {
            console.log(`${academy.name}: ${academy.percentage}`)
        })
    }
}

    Statistic.percentage()
    Statistic.display()

