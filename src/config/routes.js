import router from '../routes/index';

export default (server) => {
  server.use('/', router);
};
