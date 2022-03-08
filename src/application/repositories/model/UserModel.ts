export interface InputUserModel {
  userId: string
  login: string
  accountId: string
  name: string
}

export class OutputUserModel {
  userId: string
  login: string
  accountId: string
  name: string

  static mapper(entity: OutputUserModel): OutputUserModel {
    return {
      userId: entity.userId,
      login: entity.login,
      accountId: entity.accountId,
      name: entity.name,
    }
  }
}
