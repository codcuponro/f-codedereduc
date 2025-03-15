import Image from 'next/image'
import React from 'react'
import { useTranslations } from 'next-intl';
import Nav from "./nav"

const Footer = () => {
  const t = useTranslations('data');
  return (
    <footer className='bg-primary pt-[68px] pb-6 md:pb-[91px] relative'>
      {/* subscribe  */}
      <div className='container mx-auto px-4 lg:px-0 flex flex-col md:flex-row md:items-center gap-10 justify-between mb-[116px]'>
        <h5 className='font-semibold text-[28px] flex-1 max-w-[470px] leading-[38px] text-pure'>{t('footer.footer_title')}</h5>
        <div className='flex-1 flex md:justify-end gap-[5px]'>
          <input
            type="text"
            className='py-[14px] px-5 bg-white/10 max-w-[380px] w-full text-[#E5E7EB] rounded-md outline-none'
            placeholder={t('footer.email_placeholder')}
          />
          <button className='bg-pure text-primary py-4 px-10 rounded-md hover:bg-white/10 hover:text-pure border border-white'>{t('footer.subscribe_btn_label')}</button>
        </div>
      </div>
      <Nav t={t} />
      <Image src="/images/footer-shap-1.png" alt='' width={160} height={160} className='absolute right-0 top-10' />
      <Image src="/images/footer-shape-2.png" alt='' width={160} height={160} className='absolute left-0 bottom-0' />
    </footer>
  )
}

export default Footer


