import Service from './Service';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

class UserService extends Service {
  constructor(model) {
    super(model);
  }

  //login user
  async login(item) {
    try {
      let user = await this.model.findOne({ "email": item.email })
      console.log(user)
      if (user) {
        let results = await bcrypt.compareSync(item.password, user.password);
        console.log(results)
        if (results) {
          const token = jwt.sign({ id: user._id, email: user.email }, process.env.JWT_SECRET_KEY, { expiresIn: '7d' })
          console.log(token)
          return {
            error: false,
            message: 'login successfully',
            statusCode: 200,
            token: token,
            data: user
          };
        } else {
          return {
            error: 'You entered the wrong email or password',
            statusCode: 401,
            data: null
          };
        }
      } else {
        return {
          error: 'You entered the wrong email or password',
          statusCode: 401,
          data: null
        };
      }
    } catch (error) {
      return {
        error: error.message,
        statusCode: 400,
        data: null,
      };
    }
  }


  //change password with current password
  async changePassword(item, id) {
    try {
      let user = await this.model.findOne({ "_id": id })
      if (user) {
        let results = await bcrypt.compareSync(item.currentPassword, user.password);
        if (results) {
          let hash = await bcrypt.hashSync(item.password, 10);
          let update = await this.model.findByIdAndUpdate(user._id, { password: hash })
          return {
            error: false,
            message: 'password changed successfully',
            statusCode: 200,
            data: update
          };
        } else {
          return {
            error: 'You entered wrong currant password',
            statusCode: 400,
            data: null
          };
        }
      } else {
        return {
          error: 'You entered wrong currant password',
          statusCode: 400,
          data: null
        };
      }
    } catch (error) {
      return {
        error: error.message,
        statusCode: 400,
        data: null,
      };
    }
  }


}

export default UserService;
