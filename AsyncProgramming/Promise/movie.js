let goToMovie = (success, failure) => {
    let amount = 400;
    if (amount > 500) {
        success("Go to Movie! Enjoy")
    }
    else {
        failure("Go to PG! Sleep")
    }
}


goToMovie((msg) => {
    console.log(msg)
}, (err) => {
    console.log(err)
});