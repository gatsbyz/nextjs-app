export const getAllUsers = async () => {
    const response = await fetch(`api/user`);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const data = await response.json();

    return data;
};

export const fetchLogs = async () => {
    const response = await fetch(`api/visitor-log`);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const data = await response.json();

    return data;
};

export const addLog = async (message: string) => {
    // Fetching the IP first
    const ipResponse = await fetch('https://api.ipify.org?format=json');
    if (!ipResponse.ok) {
        throw new Error('Network response was not ok');
    }
    const { ip } = await ipResponse.json();

    // Posting the log
    const response = await fetch(`api/visitor-log`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message, ip }),
    });
    
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }

    // Assuming no need to return data for a POST request
};

// const baseUrl = `http://${process.env.NEXT_PUBLIC_BACKEND_HOST}:${process.env.NEXT_PUBLIC_BACKEND_PORT}`;

// export const getAllUsers = async () => {
//     const {data} = await axios.get(`api/user`)

//   return data
// }

// export const fetchLogs = async () => {
//     const {data} = await axios.get(`api/visitor-log`)

//     return data
// };

// export const addLog = async (message: string) => {
//     const {data} = await axios.get('https://api.ipify.org?format=json')
//     const ip = data.ip

//     await axios.post(`api/visitor-log`, { message, ip }, {
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     })
// }