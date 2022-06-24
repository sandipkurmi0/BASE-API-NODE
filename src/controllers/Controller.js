class Controller {
  constructor(service) {
    this.service = service;
    this.insert = this.insert.bind(this);
    this.getAll = this.getAll.bind(this);
    this.get = this.get.bind(this);
    this.update = this.update.bind(this);
    this.delete = this.delete.bind(this);
  }

  async insert(req, res) {
    const response = await this.service.insert(req.body);
    return res.status(201).send(response);
  }

  async getAll(req, res) {
    const response = await this.service.getAll(req.query);
    return res.status(response.statusCode).send(response);
  }

  async get(req, res) {
    const { id } = req.params;
    const response = await this.service.get(id);
    return res.status(response.statusCode).send(response);
  }

  async update(req, res) {
    const { id } = req.params;
    const response = await this.service.update(id, req.body);
    return res.status(response.statusCode).send(response);
  }

  async delete(req, res) {
    const { id } = req.params;
    const response = await this.service.delete(id);
    return res.status(response.statusCode).send(response);
  }


}

export default Controller;
