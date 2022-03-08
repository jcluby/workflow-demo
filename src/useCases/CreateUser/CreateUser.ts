import { User } from '@domain/entities/User'
import { UserRespositoryDynamoose } from '@infra/repositories/dynamoose/UserRepositoryDynamoose'
import { ICreateUsertDTO } from './CreateUserDTO'

export class CreateUserUseCase {
  constructor(private createUserRespository: UserRespositoryDynamoose) {}

  async execute(data: ICreateUsertDTO) {
    const user = new User(data)

    await this.createUserRespository.create(user)

    return user.userId
  }
}
