export default class Singer {
  constructor({ Fsinger_id, Fsinger_name, Fsinger_mid }) {
    this.id = Fsinger_mid
    this.name = Fsinger_name
    this.avatar = `https://y.gtimg.cn/music/photo_new/T001R300x300M000${Fsinger_mid}.jpg?max_age=2592000`
  }
}
