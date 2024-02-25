import axios from 'axios'


// const baseUrl = `http://${process.env.NEXT_PUBLIC_BACKEND_HOST}:${process.env.NEXT_PUBLIC_BACKEND_PORT}`;

export const getAllUsers = async () => {
    const {data} = await axios.get(`api/user`)

  return data
}

export const fetchLogs = async () => {
    const {data} = await axios.get(`api/visitor-log`)

    return data
};

export const addLog = async (message: string) => {
    const {data} = await axios.get('https://api.ipify.org?format=json')
    const ip = data.ip

    await axios.post(`api/visitor-log`, { message, ip }, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
}