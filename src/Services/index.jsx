import axios from "axios";

const sp = "SP_UI_VIUXDA_ClientLoc";
const paramNames = [
  "p0",
  "p1",
  "p2",
  "p3",
  "p4",
  "p5",
  "p6",
  "p7",
  "p8",
  "p9",
  "p10",
  "p11",
  "p12",
  "p13",
  "p14",
  "p15",
  "p16",
  "p17",
];

async function getData(payload) {
  let data = {
    sp,
    paramNames,
    paramValues: payload,
  };
  return axios.post(
    "https://j0je57sf25.execute-api.us-west-1.amazonaws.com/dev/sppublic",
    data
  );
}

async function updateData(payload) {
  let data = {
    sp,
    paramNames,
    paramValues: payload,
  };
  return axios.post(
    "https://j0je57sf25.execute-api.us-west-1.amazonaws.com/dev/sppublic",
    data
  );
}

async function createData(payload) {
  let data = {
    sp,
    paramNames,
    paramValues: payload,
  };
  return axios.post(
    "https://j0je57sf25.execute-api.us-west-1.amazonaws.com/dev/sppublic",
    data
  );
}

export default { getData, updateData, createData };
