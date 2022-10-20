import User from "../models/User.js"
import hashService from "./utils/services/hashService.js"
import jwtService from "./utils/services/jwtService.js"

class UserService {
  async registration({username, password}) {
    const hashPassword = hashService.hash(password)
    const user = await User.create({username, password: hashPassword})
    await user.save()
    return {user, message: 'User created successfully'}
  }

  async login({_id, username}) {
    const token = jwtService.generateAccessToken(_id)
    return {token, username}
  }

  async getUsers() {
    const users = await User.find()
    return users
  }

  async getUser({id}) {
    const user = await User.findById(id)
    const {username, _id} = user
    const token = jwtService.generateAccessToken(_id)
    return {token, username}
  }
}

export default new UserService()