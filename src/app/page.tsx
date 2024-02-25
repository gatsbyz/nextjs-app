'use client';

import React, { useCallback, useEffect, useState } from 'react';
import type { InferGetServerSidePropsType } from 'next'
 

import Button from '@/components/buttons/Button';
import { addLog, fetchLogs } from '@/lib/visitor-logs';

type VisitorLog = {
  id: number;
  ip: string;
  visitedAt: string;
  message: string;
};

export default function HomePage() {
  const [logs, setLogs] = useState<VisitorLog[]>([]);
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const fetch = useCallback(async () => {
    setIsLoading(true);
    try {
      const data = await fetchLogs();
      setLogs(data as unknown as VisitorLog[]);
    } catch (error) {
      console.error('Failed to fetch logs', error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetch();
  }, [fetch]);

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await addLog(message);
      setMessage('');
      await fetch();
    } catch (error) {
      console.error('Failed to submit log', error);
    } finally {
      setIsLoading(false);
    }
  }, [message, fetchLogs]);
  
  return (
    <div>
      <h1>Jesse&apos;s Visitor Log</h1>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder='Enter your message'
          required
        />
        <Button type='submit' variant='dark' className='mt-4'>
          Submit Log
        </Button>
      </form>
      <h3>Log History</h3>
      <ul>
        {logs.map((log) => (
          <li key={log.id}>
            {new Date(log.visitedAt).toLocaleString()}: {log.message} (IP:{' '}
            {log.ip})
          </li>
        ))}
      </ul>
    </div>
  );
};