const mongoose = require('mongoose')
const Schema = mongoose.Schema

const crypto = require('crypto')



const bookingSchema = new Schema(
  {
    name: {type: String, trim: true, required: true},
    email: {type: String, trim: true, required: true},
    phoneNumber: {type: String, trim: true},  
    arrival: {type: Date, required: true},
    departure: {type: Date, required: true},
    price: {type: Number, min: 0,},
    status: {type: String, enum: ['pending', 'accepted', 'cancelled'], default: 'pending'},
  },
  {
    timestamps: true,
  }
)


const Booking = mongoose.model('Booking', bookingSchema)
module.exports = Booking








// bookingSchema.pre('validate', function (next) {
//   if (this.arrival.date > this.departure.date) {
//     next(new Error('La fecha de salida debe ser mayor que la de llegada'))
//   } else if (this.arrival.date < new Date()) {
//     next(new Error('La fecha de llegada debe ser mayor que la actual'))
//   } else if (this.accommodation === 'none' && this.surfLevel === 'noClass') {
//     next(new Error('Invalid booking data: You must select either accommodation or classes'))
//   } else {
//     next()
//   }
// })

// bookingSchema.pre('save', async function () {
//   if (this.accommodation == 'none') {
//     this.status = 'accepted'
//   }
//   this.price = await calculateRate(
//     this.accommodation,
//     this.departure.date,
//     this.arrival.date,
//     this.surfLevel,
//     this.discountCode
//   )
// })



