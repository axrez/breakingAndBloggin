---
title: ES6 object destructuring
date: 2019-11-01
featured_image: object-destructuring.png
tags: javascript, es6+
---

So destructuring is an amazing feature introduced in es6, but what are destructuring anyways. In short destructuring is a way of grabbing an item/object out of an object or array. Today we'll focus on object destruturing. Let's say we have a web app that gets the following data back from an api:

```js
const mockData = {
  costumers: [{
    name: 'Jon Doe',
    age: 43,
  },
  {
    name: 'Jane Smith',
    age: 49,
  }]
}
```

We want to use the array of customers in our function called logFirstCostumer:
```js
const logFirstCostumer = (data) => {
  console.log(data.costumers[0])
}
```

We will then call logFirstCostumer with mockData:
```js
logFirstCostumer(mockData)
// OUTPUT: { name: 'Jon Doe', age: 43 }
```

This is perfectly readable and nice javascript, but let's say we want to log the two first customers:
```js
const logFirstAndSecondCostumer = (data) => {
  console.log(data.costumers[0])
  console.log(data.costumers[1])
}

logFirstAndSecondCostumer(mockData)
// OUTPUT: { name: 'Jon Doe', age: 43 }
// OUTPUT: { name: 'Jane Smith', age: 49 }
```

We now written data.costumers two times even though we are really only interested in the costumers array. This might not be a huge issue right know, but once the object grows in complexity the amount of repetetion increases e.g:
```js
const SomeReactComponent = (props) => {
  console.log(this.props.mockData.costumers[0])
  console.log(this.props.mockData.costumers[1])
}
```

We can destructure the object to get the costumers array out of the object so it's no longer behind data. The destructuring syntax is as follows:
```js{2}
const logFirstAndSecondCostumer = (data) => {
  const { costumers } = data
  console.log(costumers[0])
  console.log(costumers[1])
}
```

What exactly happened here? The curly brackets tells javascript we want to create a new (const) variable called costumers and its value should be equal to data.costumers. The above code is the equivalent of:
```js{2}
const logFirstAndSecondCostumer = (data) => {
  const costumers = data.costumers
  console.log(costumers[0])
  console.log(costumers[1])
}
```

This is pretty cool in it of itself, but gets really powerful when used to destructure function arguments:
```js{1}
const logFirstAndSecondCostumer = ({ costumers }) => {
  console.log(costumers[0])
  console.log(costumers[1])
}
```

Now we directly destructure costumers out of the data object passed to the function which means the code evaluates to:
```js
logFirstAndSecondCostumer(mockData)
// OUTPUT: { name: 'Jon Doe', age: 43 }
// OUTPUT: { name: 'Jane Smith', age: 49 }
```

But what if we want to destructure customers but already have a variable named costumers? The destrutured variable can easily be renamed like so:
```js{4}
const logFirstAndSecondCostumer = (data) => {
  const costumers = 'some data'

  const { costumers: destructuredCostumers } = data

  console.log(costumers[0])
  console.log(costumers[1])
}
```

Here we rename costumers to destructuredCosutmers to avoid naming conflicts with the other variable. These ways of destructuring enables some pretty nice react patterns, but that's the topic for another day. Cheers!
