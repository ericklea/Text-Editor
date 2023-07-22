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

// logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
console.log('put request sent to the database');
// create a connection to the database
const connectDb = await openDB('jate', 1);

// create a new transaction
const tx = connectDb.transaction('jate', 'readwrite');

// open object store
const store = tx.objectStore('jate');

// add content to the object store
const request = store.put({ id: 1, value: content});

// confirmation that the content was added
const result = await request;
console.log('data saved to the database', result);
};


//logic for a method that gets all the content from the database
export const getDb = async () => {
console.error('get all from the database');

// create a connection to the database
const connectDb = await openDB('jate', 1);

// create a new transaction
const tx = connectDb.transaction('jate', 'readonly');

// open object store
const store = tx.objectStore('jate');

// get all content from the object store
const request = store.getAll();

// confirmation that the content was added
const result = await request;
console.log('data retrieved from the database', result);
}

initdb();
