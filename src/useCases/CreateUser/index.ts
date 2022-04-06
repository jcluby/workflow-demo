import { UserRespositoryDynamoose } from '@infra/repositories/dynamoose/UserRepositoryDynamoose'
import { CreateUserController } from './CreateUserContorller'
import { CreateUserUseCase } from './CreateUser'

const createUserRespository = new UserRespositoryDynamoose()

const createUserUseCase = new CreateUserUseCase(createUserRespository)

const createUserController = new CreateUserController(createUserUseCase)

export { createUserController, CreateUserUseCase }
