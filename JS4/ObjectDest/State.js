let state = {
    product: {
        id: 'p101',
        name: "Ihone 5s",
        price: 45000
    },
    message: "GM"
}
console.log(state.message)
let { message } = state
console.log(message)