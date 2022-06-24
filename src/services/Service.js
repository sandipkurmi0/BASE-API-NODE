import mongoose from 'mongoose';

class Service {
  constructor(model) {
    this.model = model;
    this.getAll = this.getAll.bind(this);
    this.insert = this.insert.bind(this);
    this.update = this.update.bind(this);
    this.delete = this.delete.bind(this);
    this.get = this.get.bind(this);
  }

  async getAll(query) {

    let { skip, limit } = query;
    skip = skip ? Number(skip) : 1;
    limit = limit ? Number(limit) : 10;
    skip = (skip - 1) * limit;

    delete query.skip;
    delete query.limit;

    let id = query._id;
    if (id) {
      try {
        // eslint-disable-next-line no-underscore-dangle
        id = new mongoose.mongo.ObjectId(id);
      } catch (error) {
        // console.log('not able to generate mongoose id with content', id);
      }
    }

    try {
      const items = await this.model
        .find(query)
        .select(['-password'])
        .skip(skip)
        .limit(limit);
      const total = await this.model.countDocuments();

      return {
        error: false,
        message: 'request successfullly',
        statusCode: 200,
        total,
        data: items
      };
    } catch (error) {
      return {
        error: error.message,
        statusCode: 400,
        data: null,
      };
    }
  }


  async get(id) {
    try {
      const items = await this.model.findById(id).select(['-password']);
      return {
        error: false,
        message: 'request successfullly',
        statusCode: 200,
        data: items,
      };
    } catch (error) {
      return {
        error: error.message,
        statusCode: 400,
        data: null,
      };
    }
  }

  async insert(item) {
    try {
      const data = await this.model.create(item);
      return {
        error: false,
        message: 'successfully inserted',
        statusCode: 201,
        data: data,
      };
    } catch (error) {
      return {
        error: error.message,
        statusCode: 400,
        data: null,
      };
    }
  }

  async update(id, item) {
    try {
      const data = await this.model.findByIdAndUpdate(id, item, { new: true });
      return {
        error: false,
        message: 'successfully updated',
        statusCode: 200,
        data: data,
      };
    } catch (error) {
      return {
        error: error.message,
        statusCode: 400,
        data: null,
      };
    }
  }

  async delete(id) {
    try {
      const item = await this.model.findByIdAndDelete(id);
      if (!item)
        return {
          error: true,
          message: 'item not found',
          statusCode: 404,
          data: null,
        };

      return {
        error: false,
        message: 'record delete successfullly!',
        statusCode: 200,
        data: item,
      };
    } catch (error) {
      return {
        error: error.message,
        statusCode: 400,
        data: null,
      };
    }
  }

}

export default Service;
