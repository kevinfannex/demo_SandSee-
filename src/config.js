// ===== CLIENT DETAILS: replace before going live =====
export const SITE = {
  name: 'S and See Salon',
  // Digits only with country code, e.g. '919XXXXXXXXX'. Left empty: the button opens WhatsApp with a pre-filled message and no recipient.
  whatsappNumber: '',
  phoneDisplay: '[Phone number to be confirmed]',
  email: '[Email to be confirmed]',
  address: '[Salon address, Chennai, to be confirmed]',
  instagramUrl: '', // e.g. 'https://instagram.com/yourhandle'
  mapEmbedUrl: '',  // Google Maps > Share > Embed a map > copy the src URL
  hours: [['Monday – Saturday', '[Opening hours to be confirmed]'], ['Sunday', '[To be confirmed]']],
}

// Put licensed photos in /public/images and set paths here (e.g. '/images/hero.jpg'). null shows an elegant placeholder.
export const IMAGES = {
  hero: null,
  about: null,
  gallery: [
    { src: null, alt: 'Stylist finishing a haircut', label: 'Haircuts' },
    { src: null, alt: 'Hair colour in warm tones', label: 'Colour' },
    { src: null, alt: 'Salon interior with styling stations', label: 'The Salon' },
    { src: null, alt: 'Bridal makeup application', label: 'Bridal' },
    { src: null, alt: 'Facial treatment in progress', label: 'Skin Care' },
    { src: null, alt: 'Grooming and beard styling', label: 'Grooming' },
  ],
}

export const SERVICES = [
  ['Haircuts & Styling', 'Precision cuts and finishing for every hair type, tailored to your face, lifestyle and routine.'],
  ['Hair Colouring', 'From subtle tones to bold transformations, with colour planned around your hair and skin tone.'],
  ['Hair Spa & Treatments', 'Nourishing treatments to restore softness, shine and scalp comfort.'],
  ['Bridal & Party Makeup', 'Polished looks for weddings and celebrations, discussed and planned with you in advance.'],
  ['Facial & Skin Care', 'Relaxing facials and skin care sessions chosen to suit your skin.'],
  ['Grooming Services', 'Clean, considered grooming for men and women, from shaping to finishing touches.'],
]
