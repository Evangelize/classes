import fs from 'fs';
import api from '../src/lib/server';
import utils from '../src/lib/utils';
import upload from '../src/lib/upload';
const prefix = '/api/utils/';

module.exports = [
  {
    method: 'POST',
    path: `${prefix}upload/{id}/avatar`,
    handler(request, reply) {
      const func = (request.payload.type === 'person') ? api.people : api.families;
      const update = (object) => func.update(object);
      let url;
      let res;

      return func.get(request.params.id)
      .then(
        (results) => {
          res = results;
          const img = Buffer.from(request.payload.file.split(',')[1], 'base64');
          url = `https://minio-eu1.evangelize.io/${request.payload.entityId}/${request.payload.fileName}`;
          return upload.file(
            request.payload.entityId,
            request.payload.fileName,
            request.payload.mimeType,
            img,
          );
        }
      ).then(
        () => {
          const object = res.get();
          object.photoUrl = url;
          return update(object);
        }
      );
    },
  },
  {
    method: 'POST',
    path: `${prefix}getAllTables`,
    handler(request, h) {
      const entityId = request.auth.artifacts.user.entityId;
      const personId = request.auth.artifacts.user.peopleId;
      return utils.getAllTables(entityId, personId, request.payload.lastUpdate);
    },
  },
];
