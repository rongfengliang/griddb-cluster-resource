require("dotenv").config();
const row_size = 1024 * process.env.ROW_DATA_SIZE
const registered_rows = process.env.TOTOLROWS
let result = row_size * registered_rows / 0.75 + 8 * registered_rows * (process.env.INDEX_COUNNTS + 2) / 0.66
let memory = result / 1024 / 1024 / 1024
console.log("memory", memory)
let nodes = (memory * process.env.COLLECTIONS / process.env.NODE_MEMORY) * 2
console.log("nodes", nodes)