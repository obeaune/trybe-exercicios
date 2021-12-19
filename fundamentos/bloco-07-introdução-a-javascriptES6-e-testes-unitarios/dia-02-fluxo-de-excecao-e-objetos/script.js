const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

// Complete a função customerInfo() para que seu retorno seja similar a "Olá Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, R. Rua das Flores, Nº: 389, AP: 701". 
const customerInfo = (order) => {
  const delPerson = order['order']['delivery']['deliveryPerson'];
  const ordererPerson = order['name'];
  const phone = order['phoneNumber'];
  const street = order['address']['street'];
  const numberHouse = order['address']['number'];
  const aptNumber = order['address']['apartment'];
  return (`Olá ${delPerson}, entrega para: ${ordererPerson}, Telefone: ${phone}, R. ${street}, Nº: ${numberHouse}, AP: ${aptNumber}`);
}

customerInfo(order);

// Complete a função orderModifier() para que seu retorno seja similar a "Olá Luiz Silva, o total do seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ 50,00." 

const orderModifier = (order) => {
  const newOrder = Object.assign({}, order);
  newOrder['name'] = 'Luiz Silva';
  const ordererPerson = newOrder['name'];
  newOrder['payment']['total'] = '50';
  const paymentValue = newOrder['payment']['total'];
  const pizzaFlav = (Object.keys(newOrder['order']['pizza']));
  const drinkFlav = (Object.values(newOrder['order']['drinks']['coke']));
  return (`Olá ${ordererPerson}, o total do seu pedido de ${pizzaFlav[0]}, ${pizzaFlav[1]} e ${drinkFlav[0]} é R$ ${paymentValue},00.`)
}

orderModifier(order);
