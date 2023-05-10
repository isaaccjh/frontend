const checkPassword = (password) => {
    const regex = new RegExp("^([@#](?=[^aeiou]{7,13}$)(?=[[:alnum:]]{7,13}$)(?=.*[A-Z]{1,}.*$).+)$");
    if (regex.test(password)) {
        return true;
    } else {
        return false;
    }
}

module.exports = {
    checkPassword
}