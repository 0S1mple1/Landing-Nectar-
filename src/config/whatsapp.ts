const configuredNumber = import.meta.env.VITE_WHATSAPP_NUMBER

export const whatsappNumber =
  /^\d+$/.test(configuredNumber) ? configuredNumber : undefined
