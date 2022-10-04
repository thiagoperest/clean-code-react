import { Authentication } from '@/domain/usecases'
import { mockAccountModel } from '@/domain/test/mock-account'

export class AuthenticationSpy implements Authentication {
  account = mockAccountModel()
  params: Authentication.Params
  callsCount = 0

  async auth (params: Authentication.Params): Promise<Authentication.Model> {
    this.params = params
    this.callsCount++
    return this.account
  }
}
