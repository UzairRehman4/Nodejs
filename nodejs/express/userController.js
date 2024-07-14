const registerUser = (req, res) => {

    const userName = req.body.name;
    const userEmil = req.body.email;
    const userPassword = req.body.password;

    res.json({
        success: true,
        name: userName,
        email: userEmil,
        password: userPassword

    })
}

module.exports = registerUser;