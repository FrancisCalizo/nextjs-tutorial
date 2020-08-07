const sqlite = require('sqlite');

async function setup() {
  const db = await sqlite.open('./mydb.sqlite');
  await db.migrate({ force: 'last' });

  const owners = await db.all('SELECT * FROM owner');
  console.log('ALL OWNERS', JSON.stringify(owners, null, 2));

  const pets = await db.all('SELECT * FROM pet');
  console.log('ALL PETS', JSON.stringify(pets, null, 2));
}

setup();
