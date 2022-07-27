import React, { Children } from 'react';
import './App.css';
import Home from './component/Home';
import Detail from './component/Detail';
import { TransactionProvider } from './context/TransactionContext'
import { AuthProvider, AuthContext } from './context/AuthContext';
import { Route, Routes, Navigate } from 'react-router-dom'
import Card from './component/Card';
import ContractList from './component/ContractList';


export default function App() {
  const val = true
  const Auth = () => {
    if (val) {
      return <Detail />
    }
    else {
      return <Navigate to='/' replace={true} />
    }
  }
  return (
    <TransactionProvider>
      <AuthProvider>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/card' element={<Card />} />
          <Route path='/contract' element={<ContractList />} />
          <Route exact path='/detail' element={<Auth />} />
        </Routes>
      </AuthProvider>
    </TransactionProvider>
  );
}

