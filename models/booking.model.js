const mongoose = require('mongoose')
const Schema = mongoose.Schema

const crypto = require('crypto')



const bookingSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: [true, 'Introduce tu nombre'],
    },
    email: {
      type: String,
      trim: true,
      required: [true, 'Introduce tu email'],
      validate: {
        validator: function (emailInput) {
          return /^([\w-\.\+]+@([\w-]+\.)+[\w-]{2,4})?$/gi.test(emailInput)
        },
        message: (props) => `${props.value} is not a valid email`,
      },
    },
    phoneNumber: {
      type: String,
      trim: true,
    },
    groupCode: {
      type: String,
      trim: true,
    },

  
    arrival: {
      date: {
        type: Date,
        required: [true, 'Debes especificar una fecha de llegada'],
      },
    },

    departure: {
      date: {
        type: Date,
        required: [true, 'Debes especificar una fecha de salida'],
      },
    },

    firstTime: {
      type: Boolean,
      default: true,
      required: true,
    },

    price: {
      type: Number,
      min: 0,
    },

    status: {
      type: String,
      enum: ['pending', 'accepted', 'cancelled'],
      default: 'pending',
    },


  },
  {
    timestamps: true,
  }
)

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


const Booking = mongoose.model('Booking', bookingSchema)
module.exports = Booking
