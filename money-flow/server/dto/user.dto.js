const UserDto = ({_id, email, name, createdAt}) => ({
    id: _id,
    email,
    name,
    createdAt
})

module.exports = {UserDto}