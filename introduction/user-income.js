const users = [
    {
        name: 'Salvio',
        revenue: [115.3, 48.7, 98.3, 14.5],
        expenses: [85.3, 13.5, 19.9]
    },

    {
        name: 'Marcio',
        revenue: [24.6, 214.3, 45.3],
        expenses: [185.3, 12.1, 120.0]
    },

    {
        name: 'Lucia',
        revenue: [9.8, 120.3, 340.2, 45.3],
        expenses: [450.2, 29.9]
    }
]

function sumNumbers(vector) {
    let sumVector = 0;
    for (let i = 0; i < vector.length; i++) {
        sumVector += vector[i];
    }

    return sumVector;
}

function calculateIncome(rev, exp) {
    let sumRevenue = sumNumbers(rev);
    let sumExpenses = sumNumbers(exp);

    return (sumRevenue - sumExpenses);
}

function income(s) {
    if (s < 0) return 'NEGATIVO';

    return 'POSITIVO';
}

for (let i = 0; i < users.length; i++) {
    let sale = calculateIncome(users[i].revenue, users[i].expenses);
    console.log(`${users[i].name} possui saldo ${income(sale)} de ${sale.toFixed(2)}.`);
}