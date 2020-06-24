const user = {
    name: "Olivia",
    transactions: [],
    balance: 0
}

function createTransaction(transaction) {
    user.transactions.push(transaction)
    if (transaction.type == "credit"){
        user.balance += transaction.value
    } else {
        user.balance -= transaction.value
    }
}

function getHigherTransactionByType(transactionType) {
    let higher = 0.0 // não existe transação de 0,0
    for (let transaction of user.transactions) {
        if (transaction.type == transactionType && transaction.value > higher){
            higher = transaction
        }
    }
    return higher
}

function getAverageTransactionValue() {
    let sum = 0.0
    for (let transaction of user.transactions) {
        sum += transaction.value
    }
    return sum / user.transactions.length
}

function getTransactionsCount(){
    let count = {
        credit: 0,
        debit: 0
    }
    for (let transaction of user.transactions) {
        if (transaction.type == "credit"){
            count.credit += 1
        } else {
            count.debit +=1
        }
    }

    return count
}

createTransaction({ type: "credit", value: 50 });
createTransaction({ type: "credit", value: 120 });
createTransaction({ type: "debit", value: 80 });
createTransaction({ type: "debit", value: 30 });
createTransaction({ type: "debit", value: 20 });

console.log(getHigherTransactionByType("credit"));
console.log(getHigherTransactionByType("debit"));
console.log(getAverageTransactionValue());
console.log(getTransactionsCount());