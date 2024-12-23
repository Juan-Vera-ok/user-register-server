import User from "../models/User.js";

const addUser = async (req, res) => {
    const { username, password } = req.body;
    const user = new User({ username, password });
    await user.save();
    res.status(201).json(user);
}


const getUsers = async (req, res) => {
    const users = await User.find();
    res.json(users);
}

export { addUser,getUsers };