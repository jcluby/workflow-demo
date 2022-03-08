import { clientError, HttpResponse, ok } from '@infra/http/HttpResponse'
import { CreateUserUseCase } from '.'
import * as errorCreate from './CreateUserError'

type CreateUserRequest = {
  userId?: string
  login: string
  accountId: string
  name: string
}

export class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  async handle(request: CreateUserRequest): Promise<HttpResponse> {
    const { userId, login, accountId, name } = request
    try {
      const id = await this.createUserUseCase.execute({
        userId,
        login,
        accountId,
        name,
      })
      return ok({ userId: id })
    } catch (err) {
      console.log('error', err.message)
      err.message = errorCreate.ERROR_CREATE_USER
      return clientError(err)
    }
  }
}
