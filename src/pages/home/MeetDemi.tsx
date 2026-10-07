import profilePhoto from '../../assets/photos/profile-chocolate-sponge.jpg'
import ButtonLink from '../../components/ButtonLink'
import { berrySpongePhoto } from './photos'

// The dark feature band of the page, set as a large rounded card inside the page width.
// A tall photo and a square one overlap on one side; gold stars pick up the hero's accents.
export default function MeetDemi() {
  return (
    <section aria-labelledby="demi-heading" className="bg-paper pb-16 md:pb-24">
      <div className="page-width">
        <div className="surface-dark grid items-center gap-10 overflow-hidden rounded-xl bg-ganache px-5 py-10 text-paper md:gap-12 md:p-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-16 lg:p-16">
          <div className="relative mx-auto h-[23rem] w-full max-w-[24rem] md:h-[28rem] lg:max-w-[26rem]">
            <img
              src={berrySpongePhoto.src}
              srcSet={berrySpongePhoto.srcSet}
              sizes="(min-width: 744px) 240px, 56vw"
              alt={berrySpongePhoto.alt}
              width={900}
              height={1600}
              loading="lazy"
              decoding="async"
              className="photo absolute top-0 left-0 aspect-[9/16] w-[56%] rounded-lg object-cover shadow-lift md:w-60"
            />
            <img
              src={profilePhoto}
              alt="A slice of chocolate sponge with white cream and Oreo crumbs on a white plate."
              width={400}
              height={400}
              loading="lazy"
              decoding="async"
              className="photo absolute right-0 bottom-0 aspect-square w-[52%] rounded-full object-cover shadow-lift ring-6 ring-ganache md:w-52"
            />
            <span aria-hidden="true" className="absolute top-4 right-6 font-display text-[2.5rem] leading-none text-gold md:text-[3rem]">
              ✦
            </span>
            <span aria-hidden="true" className="absolute bottom-[46%] left-[60%] text-[1.25rem] leading-none text-gold-soft">
              ✦
            </span>
          </div>

          <div>
            <p aria-hidden="true" className="text-[1.25rem] leading-none text-gold">
              ✦ ✦ ✦
            </p>
            <h2
              id="demi-heading"
              className="mt-5 max-w-[16ch] font-display text-h2 font-extrabold tracking-[-0.015em] font-stretch-[80%] md:text-h2-lg"
            >
              Meet Demi, London's best-kept secret
            </h2>
            <p className="mt-5 max-w-[46ch] text-lead text-paper/85 md:text-lead-lg">
              Demi Yusuf is the baker and cook behind Dhemmyn Food. She has a sharp eye for detail and
              a real feel for flavour, and it shows in every bake. Her cakes leave guests asking who made
              them. Her small chops disappear before the music starts.
            </p>
            <div className="mt-8">
              <ButtonLink to="/about-me" onDark>
                Meet Demi
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
