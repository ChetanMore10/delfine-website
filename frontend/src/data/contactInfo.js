const OFFICE_ADDRESS_LINES = [
  'Office No-105, 1st Floor, Krishnai Plaza,',
  "above Domino's Pizza, near Kakde City,",
  'Karvenagar, Pune, Maharashtra 411052, India.',
]
const OFFICE_ADDRESS = OFFICE_ADDRESS_LINES.join(' ')
const PHONE_NUMBER = '080075 59401'
const PHONE_LINK = 'tel:08007559401'
const EMAIL_ADDRESS = 'contact@delfineindiatech.com'
const EMAIL_LINK = `mailto:${EMAIL_ADDRESS}`
const MAPS_DIRECTIONS_URL = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(OFFICE_ADDRESS)}`

const BUSINESS_HOURS = [
  ['Monday', '9:00 AM – 8:00 PM'],
  ['Tuesday', '9:00 AM – 8:00 PM'],
  ['Wednesday', '9:00 AM – 8:00 PM'],
  ['Thursday', '9:00 AM – 8:00 PM'],
  ['Friday', '9:00 AM – 8:00 PM'],
  ['Saturday', 'Closed'],
  ['Sunday', 'Closed'],
]

export {
  BUSINESS_HOURS,
  EMAIL_ADDRESS,
  EMAIL_LINK,
  MAPS_DIRECTIONS_URL,
  OFFICE_ADDRESS,
  OFFICE_ADDRESS_LINES,
  PHONE_LINK,
  PHONE_NUMBER,
}
