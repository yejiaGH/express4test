'use strict';

let db = require('../db');
db.add({'name':'express4'});
console.log(db.list);