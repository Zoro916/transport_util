import post from '../utils/request';

export function getAddressList() {
  return post('/getdata/address_list');
}

export function getAddressOptions() {
  return post('/getdata/address_options');
}

export function createRecord(body) {
  return post('/record/create', body);
}

export function createOilPay(body) {
  return post('/oil/create', body);
}

export function getDaily(body) {
  return post('/getdata/daily', body);
}

export function getLogList(body) {
  return post('/getdata/list', body);
}
