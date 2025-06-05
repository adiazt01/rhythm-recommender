import Table from "cli-table3";

export function buildTable(head, rows) {
  const table = new Table({ head });

  for (const row of rows) {
    table.push(Object.values(row));
  }
  
  return table;
}
