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

const printTableHeader = (columns: string[], widthArr: number[]) => {
  let str = "|";
  for (const clidx in columns) {
    if (columns[clidx].length < widthArr[clidx]) {
      const maxRowWidth = widthArr[clidx];
      const emptyLength = maxRowWidth - columns[clidx].length + 2;
      let preEmptyLen = 0;
      let postEmptyLen = 0;
      if (emptyLength % 2 === 0) {
        preEmptyLen = postEmptyLen = emptyLength / 2;
      } else {
        preEmptyLen = emptyLength / 2 + 1;
        postEmptyLen = emptyLength / 2;
      }

      str += `${" ".repeat(preEmptyLen)}${columns[clidx]}${" ".repeat(
        postEmptyLen
      )}|`;
    } else {
      str += ` ${columns[clidx]} |`;
    }
  }

  const ret = `${"_".repeat(str.length)}\n${str}\n${"=".repeat(str.length)}`;

  console.log(ret);
};

const printRow = (arr: string[], widthArr: number[]): void => {
  let str = "|";
  const dataArr = arr.map((v) => String(v));
  for (const idx in dataArr) {
    if (dataArr[idx].length < widthArr[idx]) {
      const maxRowWidth = widthArr[idx];
      const emptyLength = maxRowWidth - dataArr[idx].length + 2;
      let preEmptyLen = 0;
      let postEmptyLen = 0;
      if (emptyLength % 2 === 0) {
        preEmptyLen = postEmptyLen = emptyLength / 2;
      } else {
        preEmptyLen = emptyLength / 2 + 1;
        postEmptyLen = emptyLength / 2;
      }

      str += `${" ".repeat(preEmptyLen)}${dataArr[idx]}${" ".repeat(
        postEmptyLen
      )}|`;
    } else {
      str += ` ${dataArr[idx]} |`;
    }
  }

  console.log(str);
};

const extractWidth = (clmns: string[], vals: any[]): number[] => {
  let widthArr = clmns.map((v) => v.length);
  for (const idx in widthArr) {
    for (const val of vals) {
      const v = String(val[idx]);
      if (widthArr[idx] < v.length) {
        widthArr[idx] = v.length;
      }
    }
  }

  return widthArr;
};

const convert = (dataSrc: any) => {
  if (typeof dataSrc !== "object") {
    console.error("input data is not array");
  }

  if (!Array.isArray(dataSrc)) {
    console.error("input data is not array");
  }

  // 列情報
  const clmns = extractColumns(dataSrc);
  // 行情報
  let rows: any[][] = [];
  for (const d of dataSrc) {
    let vals: any[] = [];
    for (const k of clmns) {
      vals.push(d[k] || "");
    }
    rows.push(vals);
  }
  // 列の幅情報を取得する
  const widthArr = extractWidth(clmns, rows);
  printTableHeader(clmns, widthArr);
  for (const r of rows) {
    printRow(r, widthArr);
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
