/**
 * Created by SHENJO on 9/18/2017.
 */

/**
 * base hash table
 * @type {Symbol}
 */
const generateHashCode = Symbol('hashCode');
const table = Symbol('table');

class hashTable {
  constructor () {
    this[table] = [];
  }

  [generateHashCode] (key) {
    return [...key].reduce((sum, val) => {
        return sum + val.charCodeAt(0);
      }, 0) % 37;
  }

  put (key, value) {
    this[table][this[generateHashCode](key)] = value;
  }

  get (key) {
    return this[table][this[generateHashCode](key)];
  }
}

let testTable = new hashTable();
testTable.put('joey', 'joey.shen@cargosmart.com');
testTable.put('avril', 'avril.li@cargosmart.com');
console.log(testTable.get('avril'));
console.log(testTable);

/**
 * handling conflicts
 */
/**
 * method one: use link list
 */

const singleList = require('./LINK_LIST');
const linkedHashTable = Symbol('linked hash linkedHashTable');
class linkHashTable {
  constructor () {
    this[linkedHashTable] = [];
  }

  [generateHashCode] (key) {
    return [...key].reduce((sum, val) => {
        return sum + val.charCodeAt(0);
      }, 0) % 37;
  }

  put (key, value) {
    let hashVal = this[generateHashCode](key);
    if (!this[linkedHashTable][hashVal]) {
      this[linkedHashTable][hashVal] = new singleList();
    }
    this[linkedHashTable][hashVal].append({ key, value });
  }

  remove (key) {
    let hashVal = this[generateHashCode](key);
    if (this[linkedHashTable][hashVal]) {
      let current = this[linkedHashTable][hashVal], pos = -1, find = false;
      while (current && !find) {
        pos++;
        if (current.data.key === key) {
          find = true;
        }
      }
      this[linkedHashTable][hashVal].remove(pos);
      console.log('removed.')
    }
    console.log('cannot find this key..')
  }

  get (key) {
    let hashVal = this[generateHashCode](key);
    if (this[linkedHashTable][hashVal]) {
      let current = this[linkedHashTable][hashVal];
      while (current) {
        if (current.data.key === key) {
          console.log(`value = ${current.data.value}`);
          return current.data.value;
        }

      }
      console.log('cannot find this key..')
    }
  }
}

let testLinkTable = new linkHashTable();
testLinkTable.put('joey', 'joey.shen@cargosmart.com');
testLinkTable.put('avril', 'avril.li@cargosmart.com');
testLinkTable.put('ac', 'a.c@cargosmart.com');
testLinkTable.put('bb', 'b.b@cargosmart.com');

testLinkTable.get('bb');

