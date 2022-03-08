import { v4 as uuidv4 } from 'uuid'

export class User {
  public readonly userId: string
  public login: string
  public accountId: string
  public name: string

  constructor(props: Omit<User, 'userId'>, userId?: string) {
    Object.assign(this, props)
    if (!userId) {
      this.userId = uuidv4()
    }
  }
}
