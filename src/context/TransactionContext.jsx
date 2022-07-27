/** @format */

import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import { contractAbi, contractAdress, adressTo } from "../utils/const";

export const TransactionContext = React.createContext();
const { ethereum } = window;
const getEthereumContract = () => {
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  const transactionContract = new ethers.Contract(
    contractAdress,
    contractAbi,
    signer
  );
  // console.log({
  //     provider,
  //     signer,
  //     transactionContract
  // })
  return transactionContract;
};
export const TransactionProvider = ({ children }) => {
  const [current, setCurrent] = useState("");
  const [formData, setFormData] = useState({
    adressTo: "",
    amount: "",
    keyword: "testtest",
    message: "testtest",
  });
  const [isloading, setIsloading] = useState(false);
  const [transactionCount, setTransactionCount] = useState(0);
  const [done, setDone] = useState(false);
  const checkWallet = async () => {
    try {
      if (!ethereum) {
        return alert("install metamask");
      }
      const accounts = await ethereum.request({ method: "eth_accounts" });
      if (accounts.length) {
        setCurrent(accounts[0]);
      } else {
        console.log("no account find");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const connectWallet = async () => {
    try {
      if (!ethereum) {
        return alert("install metamask");
      }
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      setCurrent(accounts[0]);
    } catch (error) {
      console.log(error);
    }
  };
  const sendTransaction = async () => {
    try {
      if (!ethereum) {
        return alert("install metamask");
      }
      const { adressTo, amount, keyword, message } = formData;
      const transactionContract = getEthereumContract();
      console.log(transactionContract.getTransactionCount());
      const parseAmount = ethers.utils.parseEther(amount);
      await ethereum.request({
        method: "eth_sendTransaction",
        params: [
          {
            from: current,
            to: adressTo,
            gas: "0x5208",
            value: parseAmount._hex,
          },
        ],
      });
      const transactionHash = await transactionContract.addToBlockchain(
        adressTo,
        parseAmount,
        message,
        keyword
      );
      setIsloading(true);
      console.log(`loading...${transactionHash.hash}`);
      transactionHash.wait();
      setIsloading(false);
      console.log(`success...${transactionHash.hash}`);
      //   const Count = await transactionContract.getTransactionCount();
      //   setTransactionCount(Count);
    } catch (error) {
      console.log(error);
      throw new Error("no ethereum object");
    }
  };
  const disconnectWallet = async () => {
    try {
      if (!ethereum) {
        return alert("install metamask");
      }
      await ethereum.on("disconnect", () => {
        console.log("disconnected");
      });
      setCurrent("");
    } catch (error) {
      console.log(error);
    }
  };
  const checkTransaction = async () => {
    const transactionContract = getEthereumContract();
    // const count = await transactionContract.getTransactionCount();
    // console.log(count);
  };
  useEffect(() => {
    checkWallet();
    checkTransaction();
  }, []);

  return (
    <TransactionContext.Provider
      value={{
        connectWallet,
        current,
        formData,
        setFormData,
        sendTransaction,
        disconnectWallet,
        done,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};
