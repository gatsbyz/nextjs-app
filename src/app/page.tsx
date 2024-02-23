'use client'

import React, { useState, useEffect } from 'react';
import Button from '@/components/buttons/Button';

type VisitorLog = {
  id: number;
  ip: string;
  visitedAt: string;
  message: string;
};

const BASE_URL = `http://${process.env.NEXT_PUBLIC_BACKEND_HOST}:${process.env.NEXT_PUBLIC_BACKEND_PORT}`

const HomePage: React.FC = () => {
  const [logs, setLogs] = useState<VisitorLog[]>([]);
  const [message, setMessage] = useState('');
  const [clientIp, setClientIp] = useState('');

  const fetchClientIp = async () => {
    try {
      const res = await fetch('https://api.ipify.org?format=json');
      const data = await res.json();
      setClientIp(data.ip ?? 'unknown');
    } catch (error) {
      console.error('Failed to fetch client IP', error);
    }
  };

  const fetchLogs = async () => {
    const res = await fetch(`${BASE_URL}/api/v1/visitor-log`);
    const data = await res.json();
    setLogs(data);
  };

  useEffect(() => {
    fetchClientIp();
    fetchLogs();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch(`${BASE_URL}/api/v1/visitor-log?ip=${clientIp}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message, ip: clientIp }),
    });
    setMessage('');
    fetchLogs();
  };

  return (
    <div>
      <h1>Jesse&apos;s Visitor Log</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Enter your message"
          required
        />
        <Button type="submit" variant='dark' className='mt-4'>
          Submit Log
        </Button>
      </form>
      <h3>Log History</h3>
      <ul>
        {logs.map((log) => (
          <li key={log.id}>
            {new Date(log.visitedAt).toLocaleString()}: {log.message} (IP: {log.ip})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
