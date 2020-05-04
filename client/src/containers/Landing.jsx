import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../components/Button';
import { useUserDispatch } from '../store/userStore';

export default function Landing({ history }) {
  const [username, setUsername] = useState('');
  const dispatch = useUserDispatch();

  function handleSubmit() {
    dispatch({ type: 'UPDATE', username });
    history.push('/');
  }

  return (
    <CenteredDiv>
      <Card>
        <Text>Enter your username</Text>
        <Input onChange={(e) => setUsername(e.target.value)} />
        <div>
          <Button primary onClick={() => handleSubmit()}>Start</Button>
        </div>
      </Card>
    </CenteredDiv>
  );
}

const CenteredDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #718093;
  height: 100vh;
`;

const Card = styled.div`
  background: white;
  border-radius: 5px;
  padding: 1rem;
  height: 250px;
  text-align: center;
`;

const Input = styled.input`
  height: 2rem;
  border: 1px solid #718093;
  width: 400px;
  border-radius: 5px;
`;

const Text = styled.p`
  font-size: 1.5rem;
`;
