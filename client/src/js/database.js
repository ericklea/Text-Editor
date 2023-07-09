import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
console.error('putDb not implemented');

// create a connection to the database
const connectDb = await openDB('jate', 1);

// create a new transaction
const tx = connectDb.transaction('jate', 'readwrite');

// open object store
const store = tx.objectStore('jate');

// add content to the object store
const request = store.add({ content: 'Hello!' });

// confirmation that the content was added
const result = await request;
console.log('data added to the database', result);
};


// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
console.error('getDb not implemented');

// create a connection to the database
const connectDb = await openDB('jate', 1);

// create a new transaction
const tx = connectDb.transaction('jate', 'readwrite');

// open object store
const store = tx.objectStore('jate');

// get all content from the object store
const request = store.getAll();

// confirmation that the content was added
const result = await request;
console.log('data retrieved from the database', result);
};

initdb();
