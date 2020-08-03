export default (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end(
    JSON.stringify([
      {
        vehicle: 'Car',
        ownerName: 'Bruno Antunes',
        details: "some detail about Bruno's Car",
      },
      {
        vehicle: 'Bike',
        ownerName: 'Bruno Antunes',
        details: "some detail about Bruno's Bike",
      },
      {
        vehicle: 'Bike',
        ownerName: 'John Doe',
        details: 'some detail bike',
      },
      {
        vehicle: 'Airplane',
        ownerName: 'Bill Gates',
        details: 'some detail Bill Gates',
      },
      {
        vehicle: 'SpaceX',
        ownerName: 'Elon Musk',
        details: 'some detail Elon',
      },
    ])
  );
};
