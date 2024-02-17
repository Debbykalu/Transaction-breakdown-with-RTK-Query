// Transactions.js
import { GoArrowDown } from 'react-icons/go';
import React, { useState } from 'react';
import { useGetTransactionsQuery } from '../store';
import Skelecton from './Skelecton';
import TransactionList from './TransactionList';

const Transactions = () => {
  const { data, error, isFetching } = useGetTransactionsQuery();

  const [selectedCategory, setSelectedCategory] = useState(null);

   // Function to handle category click
   const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  let content;

  if (isFetching || data === undefined) {
    content = <Skelecton className='h-10 w-full' times={4} />;
  } else if (error) {
    content = <div>Error Loading Data ....</div>;
  } else {
    // Organize transactions by category
    const transactionsByCategory = data.reduce((acc, transaction) => {
      if (!acc[transaction.category]) {
        acc[transaction.category] = [];
      }
      acc[transaction.category].push(transaction);
      return acc;
    }, {});

   

    content = transactionsByCategory;
  }

  return (
    <>
      <h1>Transactions</h1>
      <div >
        {Object.keys(content).map((category) => (
          <div key={category}>
            <div onClick={() => handleCategoryClick(category)} className='m-2 flex flex-row items-center justify-between'>
            <h2 className='text-lg font-bold'>{category}</h2>
            <GoArrowDown  />
            </div>
            {selectedCategory === category && (
              <TransactionList transactions={content[category]} />
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default Transactions;
