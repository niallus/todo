// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, client) => {
    if (error) {return console.log('Cannie connect');}
    console.log('Connected to DB');

    const db = client.db('TodoApp')

    await db.collection('Users').find().count()
        .then((count) => {
            console.log(`Users count: ${count}`);
        }, err => {console.log(err)})

    // db.collection('Todos').insertOne(
    //     { text: 'Something to do', completed: false },
    //     (err, result) => {
    //         if (err) {return console.log('failed to insert todo', err);}
    //         console.log(result.ops);
    //     }
    // );
    // db.collection('Users').insertOne(
    //     { name: 'Niall Carroll', age: 25, location: 'liexlip' },
    //     (err, result) => {
    //         if (err) {return console.log('failed to insert user', err);}
    //         console.log(result.ops);
    //     }
    // ); 

    //client.close();
});