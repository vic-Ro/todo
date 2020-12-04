import '../sass/main.scss';

console.log(process.env.NODE_ENV);

const foo = (name) => {
  console.log(`Hello ${name}`);
};

foo('Pepe');
