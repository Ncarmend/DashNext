"use client";
import React from 'react';
import { useState, useContext } from 'react';
//import { WalletContext } from './WalletProvider';


const handleAddFunds = () => {
    // addFunds(parseFloat(amount));
    //setAmount('');
}
const Wallet = () => {
    
    return (
        <div className="p-4 bg-gray-300 text-center border border-gray-300">
            <h2 className="text-2xl mb-4">Wallet</h2>
            <p className="mb-4">Balance:</p>
            
            <div>
                <button 
                 className="px-4 py-2 bg-green-500 text-white mr-2">
                    Add Funds
                </button>
                <button  
                
                className="px-4 py-2 bg-red-500 text-white">
                    Withdraw Funds
                </button>
            </div>
        </div>
    );
}

export default Wallet;


