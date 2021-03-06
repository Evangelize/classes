import models from '../../models';
import Promise from 'bluebird';

export default {
  all(entityId, lastUpdate) {
    const where = (lastUpdate) ? {
      updatedAt: {
        $gte: lastUpdate,
      },
    } : {};
    if (entityId) {
      where.entityId = entityId;
    }
    return models.MemberSettings.findAll({
      where,
      order: [
        ['updatedAt', 'DESC'],
      ],
    });
  },
  allPerson(personId, lastUpdate) {
    const where = (lastUpdate) ? {
      updatedAt: {
        $gte: lastUpdate,
      },
    } : {};
    if (personId) {
      where.personId = personId;
    }
    return models.MemberSettings.findAll({
      where,
      order: [
        ['updatedAt', 'DESC'],
      ],
    });
  },
  get(id, entityId) {
    const where = {
      id: new Buffer(id, 'hex'),
    };
    if (entityId) {
      where.entityId = new Buffer(entityId, 'hex');
    }
    return models.MemberSettings.findOne({ where });
  },
  insert(record) {
    const newrecord = Object.assign(
      {},
      record,
      {
        id: new Buffer(record.id, 'hex'),
        entityId: (record.entityId) ? new Buffer(record.entityId, 'hex') : null,
        personId: (record.personId) ? new Buffer(record.personId, 'hex') : null,
      }
    );

    return models.MemberSettings.create(
      newrecord
    );
  },
  update(record) {
    const newrecord = Object.assign(
      {},
      record,
      {
        id: new Buffer(record.id, 'hex'),
        entityId: (record.entityId) ? new Buffer(record.entityId, 'hex') : null,
        personId: (record.personId) ? new Buffer(record.personId, 'hex') : null,
      }
    );
    return models.MemberSettings.update(
      newrecord,
      {
        where: {
          id: newrecord.id,
        },
      }
    ).then(
      () => models.MemberSettings.findOne({
        where: {
          id: newrecord.id,
        },
      })
    );
  },
  delete(record) {
    return models.MemberSettings.destroy({
      where: {
        id: new Buffer(record.id, 'hex'),
      },
    });
  },
};
