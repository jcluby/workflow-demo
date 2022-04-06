import * as dynamoose from 'dynamoose'
import { SchemaDefinition } from 'dynamoose/dist/Schema'
/**
 * Single table Schema
 */
const schema: SchemaDefinition = {
  pk: {
    type: String,
    hashKey: true,
  },
  sk: {
    type: String,
    rangeKey: true,
  },
  accountId: {
    type: String,
  },
  userId: {
    type: String,
  },
  name: {
    type: String,
  },
  login: {
    type: String,
  },
}

export const UserModel = dynamoose.model<any>(process.env.MS_TABLE, new dynamoose.Schema(schema), {
  create: false,
  update: false,
  waitForActive: true,
})
