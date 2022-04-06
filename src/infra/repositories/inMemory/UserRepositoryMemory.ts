import { InputUserModel } from '@application/repositories/model/UserModel'
import { IUserRepository } from '@application/repositories/IUserRepository'

export class UserRespositoryMemory implements IUserRepository {
  create(event: InputUserModel): Promise<void> {
    console.log(event)

    return Promise.resolve()
  }
}
