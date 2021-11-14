const extractColumns = (dataSrc: any) => {
  const columns: string[] = [];
  for (const row of dataSrc) {
    const properties = Object.keys(row);
    for (const p of properties) {
      if (!columns.includes(p)) {
        columns.push(p);
      }
    }
  }

  return columns;
};

const createTableHeaderString = (columns: string[]): string => {
  let str = "|";
  for (const clmn of columns) {
    str += ` ${clmn} |`;
  }

  const ret = `${"_".repeat(str.length)}\n${str}\n${"=".repeat(str.length)}`;

  return ret;
};

const createRow = (dataArr: string[]) => {
  let str = "| ";
  for (const d of dataArr) {
    str += ` ${d} |`;
  }

  return str;
};

const convert = (dataSrc: any) => {
  if (typeof dataSrc !== "object") {
    console.error("input data is not array");
  }

  if (!Array.isArray(dataSrc)) {
    console.error("input data is not array");
  }

  const clmns = extractColumns(dataSrc);
  console.log(createTableHeaderString(clmns));

  for (const d of dataSrc) {
    let vals: any[] = [];
    for (const k of clmns) {
      vals.push(d[k] || " ");
    }
    console.log(createRow(vals));
  }
};

const run = () => {
  convert([
    {
      hoge: 1,
      fuga: "test",
    },
    {
      hoge: 2,
      fuga: "aaa",
    },
    {
      hoge: 3,
      fuga: "bbb",
      foo: "hogehgoe",
    },
  ]);
};

run();
