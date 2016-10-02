module.exports = function (sequelize, DataTypes) {
  const WorshipServiceJobs = sequelize.define(
    'worshipServiceJobs',
    {
      id: {
        type: DataTypes.BLOB,
        primaryKey: true,
        get() {
          return this.getDataValue('id').toString('hex');
        },
        set(val) {
          this.setDataValue('id', new Buffer(val, 'hex'));
        },
      },
      worshipServiceId: {
        type: DataTypes.BLOB,
        get() {
          return this.getDataValue('worshipServiceId').toString('hex');
        },
        set(val) {
          this.setDataValue('worshipServiceId', new Buffer(val, 'hex'));
        },
      },
      title: {
        type: DataTypes.STRING,
      },
      day: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      active: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
      priority: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      numPeople: {
        type: DataTypes.INTEGER,
        defaultValue: 1,
      },
      createdAt: {
        type: DataTypes.DATE,
        get() {
          const field = 'createdAt';
          let ret = null;
          if (this.getDataValue(field)) {
            ret = this.getDataValue(field).getTime();
          }
          return ret;
        },
      },
      updatedAt: {
        type: DataTypes.DATE,
        get() {
          const field = 'updatedAt';
          let ret = null;
          if (this.getDataValue(field)) {
            ret = this.getDataValue(field).getTime();
          }
          return ret;
        },
      },
      deletedAt: {
        type: DataTypes.DATE,
        get() {
          const field = 'deletedAt';
          let ret = null;
          if (this.getDataValue(field)) {
            ret = this.getDataValue(field).getTime();
          }
          return ret;
        },
      },
      revision: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
    },
    {
      paranoid: true,
    }
  );

  return WorshipServiceJobs;
};
