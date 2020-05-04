import React from 'react';
import { useUserStore } from '../store/userStore';

export default function Home() {
  const { username } = useUserStore();
  return <h1>{username}</h1>;
}
