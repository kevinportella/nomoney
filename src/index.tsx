import React from 'react';
import ReactDOM from 'react-dom';

import { createServer, Model } from 'miragejs'

import { App } from './App';

createServer({

  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData ({
      transactions: [
        {
          id: 1,
          title: 'Swib paga os menino',
          type: 'deposit',
          category: 'China de BDO',
          amount: 6000,
          createdAt: new Date('2021-02-17 9:00:00'),
        },
        {
          id: 2,
          title: 'Pack de fotos da Tinky',
          type: 'withdraw',
          category: 'Fotos indecentes',
          amount: 100,
          createdAt: new Date('2021-06-14 11:00:00'),
        },
      ],
    })
  },

  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transaction')
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)

      return schema.create('transaction', data);
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

