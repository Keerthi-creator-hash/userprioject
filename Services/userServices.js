let users = [{ id: 1, name: 'Alice',email: 'alice123@gamil.com' }, { id: 2, name: 'Bob' ,email:'bob45@gmail.com'}];

const getAllUsers = ( req,res) => {
    res.status(200).json(users);
};

 const createUsers = (req, res) => {
    const { name, email } = req.body;

    if (!name || !email) {
        return res.status(400).json({ message: "Name and email are required" });
    }

    const newUser = { id: users.length + 1, name,email};
    users.push(newUser);

    res.status(201).json({ message: "User created successfully", user: newUser });
};

 const updateUsers = (req, res) => {
    user = users.find(u => u.id === parseInt(req.params.id));
    Object.assign(user, req.body);
    res.status(200).json({ message: "User updated successfully", user });
};

 const getUsersById = (req, res) => {
    user = users.find(u => u.id === Number(req.params.id));
    res.status(200).json({message: "get user by an Id" ,user});
};
 const deleteUser = (req, res) => {
    users = users.filter(u => u.id !== parseInt(req.params.id));
    res.status(204).json({ message: `delete user for ${users}` });
};


export {getAllUsers,createUsers,updateUsers,getUsersById,deleteUser}