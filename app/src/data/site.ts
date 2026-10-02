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

// Header menu. Home is added on phones only, in MobileMenu.
export const mainNav: NavItem[] = [
  { label: 'Recipes', to: '/recipes' },
  { label: 'Custom cakes', to: '/custom-cakes' },
  { label: 'Catering', to: '/catering' },
  { label: 'About me', to: '/about-me' },
  { label: 'Contact', to: '/contact' },
]

export const footerNav: NavItem[] = [
  ...mainNav,
  { label: 'Privacy notice', to: '/privacy' },
]

export const socialLinks: SocialLink[] = [
  { label: 'Instagram', href: 'https://www.instagram.com/dhemmynfood/' },
  { label: 'TikTok', href: 'https://www.tiktok.com/@dhemmynfood' },
  { label: 'YouTube', href: 'https://www.youtube.com/@dhemmynfood' },
  { label: 'Threads', href: 'https://www.threads.com/@dhemmynfood' },
]

export const instagramUrl = socialLinks[0].href

// The same handle on all four platforms (SOCIAL.md).
export const handle = '@dhemmynfood'
