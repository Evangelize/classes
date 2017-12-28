//import Promise from 'bluebird';
import axios from 'axios';
import _ from 'lodash';

const prefix = '/api/family';
const TIMEOUT = 100;

export default {
  get(key, filter) {
    return axios.get(`${prefix}/search/${key}/${filter}`)
    .then((response) => {
      //console.log(response);
      return Promise.resolve({
        key: key,
        filter: filter,
        data: response.data
      });
    })
    .catch((response) => {
      return Promise.resolve({
        key: key,
        filter: filter,
        data: response.data
      });
    });
  },
  set(id, index, key, value) {
    if (value) {
      return axios.post(
        '/api/'+key+'s',
        {
          peopleId: id
        }
      )
      .then((response) => {
        return Promise.resolve({
          id: id,
          index: index,
          key: key,
          value: value,
          data: response.data
        });
      })
      .catch((response) => {
        return Promise.resolve({
          key: key,
          filter: filter,
          data: response.data
        });
      });
    } else {
      return axios.delete(
        '/api/'+key+'s/'+id
      )
      .then((response) => {
        return Promise.resolve({
          id: id,
          index: index,
          key: key,
          value: value,
          data: response.data
        });
      })
      .catch((response) => {
        return Promise.resolve({
          key: key,
          filter: filter,
          data: response.data
        });
      });
    }
  },
  uploadAvatar(id, type, file, fileName, mimeType, entityId) {
    return axios.post(
      `${prefix}/${id}/avatar`,
      {
        file,
        type,
        fileName,
        mimeType,
        entityId,
      }
    );
  },
}