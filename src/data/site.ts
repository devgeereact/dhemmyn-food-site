// Facts used on several pages. Source: 01-PRODUCT/BUSINESS-RULES.md and SOCIAL.md.

export type NavItem = { label: string; to: string }
export type SocialPlatform = 'Instagram' | 'TikTok' | 'YouTube' | 'Threads'
export type SocialLink = { label: SocialPlatform; href: string }

export const businessName = 'Dhemmyn Food'
export const ownerName = 'Demi Yusuf'

export const contact = {
  email: 'info@mimmycare.com',
  phoneDisplay: '07787 561363',
  phoneTel: '+447787561363',
  whatsappHref: 'https://wa.me/447787561363',
}

// Header menu. Home is added on phones only, in MobileMenu. The business comes first (redesign v2,
// 3 October 2026): cakes and small chops lead, recipes follow. "Order now" sits beside the menu.
export const mainNav: NavItem[] = [
  { label: 'Cakes', to: '/custom-cakes' },
  { label: 'Small chops', to: '/catering' },
  { label: 'About Demi', to: '/about-me' },
  { label: 'Recipes', to: '/recipes' },
  { label: 'Contact', to: '/contact' },
]

export const orderPath = '/order'

export const footerNav: NavItem[] = [
  { label: 'Order now', to: orderPath },
  ...mainNav,
  { label: 'Privacy notice', to: '/privacy' },
]

// A WhatsApp chat that opens with a first line already typed, so ordering takes one tap.
export function whatsappOrder(text: string): string {
  return `${contact.whatsappHref}?text=${encodeURIComponent(text)}`
}

export const socialLinks: SocialLink[] = [
  { label: 'Instagram', href: 'https://www.instagram.com/dhemmynfood/' },
  { label: 'TikTok', href: 'https://www.tiktok.com/@dhemmynfood' },
  { label: 'YouTube', href: 'https://www.youtube.com/@dhemmynfood' },
  { label: 'Threads', href: 'https://www.threads.com/@dhemmynfood' },
]

export const instagramUrl = socialLinks[0].href

// The same handle on all four platforms (SOCIAL.md).
export const handle = '@dhemmynfood'
