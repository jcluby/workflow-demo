import { IUserRepository } from '@application/repositories/IUserRepository'
import { InputUserModel } from '@application/repositories/model/UserModel'
import { UserModel } from './model/UserModel'
import * as dynamoose from 'dynamoose'

enum KeyPrefixes {
  ACCOUNT_ID = 'ACCOUNT#',
  USER = 'USER#',
  PROFILE = 'PROFILE#',
}

export class UserRespositoryDynamoose implements IUserRepository {
  async create(user: InputUserModel): Promise<void> {
    return UserModel.create({
      pk: `${KeyPrefixes.USER}${user.accountId}`,
      sk: `${KeyPrefixes.PROFILE}${user.login}`,
      ...user,
    })
  }

  async findByLogin(login: string, accountId: string): Promise<boolean> {
    const query = new dynamoose.Condition().where('pk').eq(`${KeyPrefixes.ACCOUNT_ID}${accountId}`)
    query.and().where('sk').eq(`${KeyPrefixes.USER}${login}`)
    const [data] = await UserModel.query(query).all().exec()
    return !!data
  }
}
