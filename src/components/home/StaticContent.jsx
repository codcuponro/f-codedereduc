import Image from 'next/image'
import Link from 'next/link'

export default function StaticContent({ exclusiveCoupon }) {
  if (!exclusiveCoupon) return null;

  return (
    <section className="no-js">
      {exclusiveCoupon?.map((item, idx) => (
        <div key={idx} className="border border-[#DEE2E6] rounded-[20px] overflow-hidden mb-4">
          <Link href={`/magazine/${item?.store?.Slug || "#"}`}>
            <Image
              src={item?.Feature_image?.url}
              alt="Featured Image"
              width={575}
              height={265}
              className="w-full h-auto max-h-[460px] object-cover"
            />
          </Link>
          <div className="p-4">
            <Link href={`/magazine/${item?.store?.Slug || "#"}`} className="font-bold text-[#111928]">
              {item?.store?.Name}
            </Link>
            <p className="text-[#111928] font-medium">{item?.Title}</p>
          </div>
        </div>
      ))}
    </section>
  )
} 