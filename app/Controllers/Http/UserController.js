'use strict'

const User = use('App/Models/User')

class UserController {
    async store ({ request }) {
        const data = request.only(['username', 'email', 'password'])

        const user = await User.create(data)

        return user
    }

    async index ({ request }) {
        const { page } = request.get()
        const users = await User.query().fetch()
        
        return users
      }
}

module.exports = UserController
