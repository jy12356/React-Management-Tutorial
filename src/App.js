import logo from './logo.svg';
import React, { Component } from 'react';
import { render } from '@testing-library/react';
import './App.css';
import Customer from './components/Customer'

const customers=[
  {
    'id': 1,
    'image' :'https://placeimg.com/64/64/1', 
    'name' : '서지연',
    'birthday' : '930728',
    'gender' : '여자',
    'job' : '취준생',

  },
  {
    'id': 2,
    'image' :'https://placeimg.com/64/64/2', 
    'name' : '홍길동s',
    'birthday' : '961112',
    'gender' : '남자',
    'job' : '대학생',

  },
  {
    'id': 3,
    'image' :'https://placeimg.com/64/64/3', 
    'name' : '백승무',
    'birthday' : '940312',
    'gender' : '남자',
    'job' : '취준생',

  }
]
function App(){ 
    return (
      <div>
        {customers.map(c =>{ return( <Customer key={c.id} id={c.id} image={c.image} name={c.name} gender={c.gender} job={c.job} /> ) })}
      </div>
    );
 
}

export default App;
