const mongoose = require('mongoose')
const Schema = mongoose.Schema

const messageSchema = new Schema({

    to: {type: schema.Types.ObjetcId, ref: "User"},
    message: {type: String},
    messageSend: [{type: schema.Types.ObjetcId, ref: "User"}],
    messageRecive: [{type: schema.Types.ObjetcId, ref: "User"}],
    created: {type: Date, default: Date.now()},
  }, {
    timestamps: true,
  })

  const Message = mongoose.model('Message', messageSchema);

module.exports = Message;