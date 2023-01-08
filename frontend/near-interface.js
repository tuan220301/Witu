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
  async addUser(first_name, last_name, wallet, number_phone, instagram, facebook, birthday, avatar) {
    return await this.wallet.callMethod({
      contractId: this.contractId,
      method: 'add_user',
      args: {
        first_name, last_name, wallet, number_phone, instagram, facebook, birthday, avatar
      }
    })
  }
  async get_user() {
    return await this.wallet.viewMethod({
      contractId: this.contractId,
      method: "get_user"
    })
  }
  async update_user(id, first_name, last_name, wallet, number_phone, instagram, facebook, birthday, avatar) {
    return await this.wallet.callMethod({
      contractId: this.contractId,
      method: 'update_user',
      args: {
        id, first_name, last_name, wallet, number_phone, instagram, facebook, birthday, avatar
      }
    })
  }
  async addBlog(content, date, id_user, img_blog) {
    return await this.wallet.callMethod({
      contractId: this.contractId,
      method: 'add_blog',
      args: {
        content, date, id_user, img_blog
      }
    })
  }
  async getBlog() {
    return await this.wallet.viewMethod({
      contractId: this.contractId,
      method: "get_blog"
    })
  }
  async updateBllog(id, content, date, id_user, img_blog) {
    return await this.wallet.callMethod({
      contractId: this.contractId,
      method: 'update_blog',
      args: { id, content, date, id_user, img_blog }
    })
  }
  async deleteBlog(id) {
    return await this.wallet.callMethod({
      contractId: this.contractId,
      method: 'delete_blog',
      args: { id }
    })
  }
  async addComment(content, date, id_blog, id_user) {
    return await this.wallet.callMethod({
      contractId: this.contractId,
      method: 'add_comment',
      args: {
        content, date, id_blog, id_user
      }
    })
  }
  async getComment() {
    return await this.wallet.viewMethod({
      contractId: this.contractId,
      method: "get_cmt"
    })
  }
  async updateComment(id, content, date, id_blog) {
    return await this.wallet.callMethod({
      contractId: this.contractId,
      method: 'update_cmt',
      args: { id, content, date, id_blog }
    })
  }
  async deleteComment(id) {
    return await this.wallet.callMethod({
      contractId: this.contractId,
      method: 'delete_cmt',
      args: id
    })
  }
}
