let employees = [
    { id: 535, name: "Raj", department: "IT" },
    { id: 245, name: "Mohan", department: "HR" },
    { id: 349, name: "Karan", department: "IT" },
    { id: 401, name: "Angel", department: "Finance" },
    { id: 101, name: "Riya", department: "HR" }
];
let result = employees.reduce((acc, emp) => {
    if (!acc[emp.department]) {
        acc[emp.department] = []; }
    acc[emp.department].push(emp);
    return acc;
}, {});
console.log(result);