const BASE_URL = `${process.env.NEXT_PUBLIC_BACKEND_HOST}:${process.env.NEXT_PUBLIC_BACKEND_PORT}`;

async function fetchLogs() {
    console.log(`${BASE_URL}/api/v1/visitor-log`)
    const response = await fetch(`${BASE_URL}/api/v1/visitor-log`);
    if (!response.ok) {
        throw new Error('Failed to fetch logs');
    }
    return await response.json();
}

async function createLog(logData: { message: string, ip: string }) {
    const response = await fetch(`${BASE_URL}/api/v1/visitor-log`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(logData),
    });
    if (!response.ok) {
        throw new Error('Failed to create log');
    }
    return await response.json();
}

export { fetchLogs, createLog };
