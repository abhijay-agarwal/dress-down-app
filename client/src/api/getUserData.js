import axios from 'axios';

const newUser = async (email, first, last, password) => {
    const data = {
        id: email,
        firstName: first,
        lastName: last,
        password: password,
        circles: []
    }
    const url = 'http://localhost:8000/users';
    const response = await axios.post(url, data);
    return response.data;
}

export { newUser };
