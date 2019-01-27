import React from 'react';
import QuoteGrid from './components/quotes/QuoteGrid';
import { fromJS } from 'immutable';
import MenuBar from './components/menu/MenuBar';

const testQuotes = fromJS([
  {
    user: "Tom Blue",
    text: "I'm blue",
  },
  {
    user: "Thom Yorke",
    text: "My head is a radio",
  }
])

export default function App() {
  return (
    <>
      <MenuBar/>
      <QuoteGrid quotes={testQuotes}/>
    </>
  )
}