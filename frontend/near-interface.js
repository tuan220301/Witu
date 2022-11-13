/* Talking with a contract often involves transforming data, we recommend you to encapsulate that logic into a class */

export class HelloNEAR {
  constructor({ contractId, walletToUse }) {
    this.contractId = contractId;
    this.wallet = walletToUse;
  }

  // async getGreeting() {
  //   return await this.wallet.viewMethod({ contractId: this.contractId, method: 'get_greeting' });
  // }

  // async setGreeting(greeting) {
  //   return await this.wallet.callMethod({ 
  // contractId: this.contractId, method: 'set_greeting', args: { message: greeting } });
  // }
  async get_user() {
    return await this.wallet.viewMethod({
      contractId: this.contractId,
      method: "get_user"
    })
  }
  async update_user(user_name, wallet, number_phone, instagram, facebook) {
    return await this.wallet.callMethod({
      contractId: this.contractId,
      method: 'add_blog',
      args: {
        user_name, wallet, number_phone, instagram, facebook
      }
    })
  }
  async addBlog(title, content, date, type_blog) {
    return await this.wallet.callMethod({
      contractId: this.contractId,
      method: 'add_blog',
      args: {
        title, content, date, type_blog
      }
    })
  }
  async getBlog() {
    return await this.wallet.viewMethod({
      contractId: this.contractId,
      method: "get_blog"
    })
  }
  async update_blog(id, title, content, date, type_blog) {
    return await this.wallet.callMethod({
      contractId: this.contractId,
      method: 'update_blog',
      args: { id, title, content, date, type_blog }
    })
  }
  async delete_blog(id) {
    return await this.wallet.callMethod({
      contractId: this.contractId,
      args: id
    })
  }
}