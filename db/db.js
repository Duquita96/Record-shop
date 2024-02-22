//DB ----------------------------------
/** SETTING UP LOWDB */
//lowdb
import { JSONFilePreset } from "lowdb/node";

// Read or create db.json
const defaultData = { records: [], users: [], orders: [] };
const db = await JSONFilePreset("db/db.json", defaultData);
db.data ||= { records: [], users: [], orders: [] };
//console.log(db.data);
//
//--------------------------------------

export default db;
