import UserController from '../controllers/UserController';
import auth from '../middleware/auth.middleware';

export default (router) => {
    router.post(`/api/user`, UserController.addUser);
    router.get(`/api/user`, auth, UserController.getAll);
    router.get(`/api/user/:id`, auth, UserController.get);
    router.put(`/api/user/:id`, auth, UserController.update);
    router.delete(`/api/user/:id`, auth, UserController.delete);
    router.post(`/api/login`, UserController.login);
    router.post(`/api/change-password/:id`, auth, UserController.changePassword);

};
