import React from 'react';

const page = () => {
  return (
    <div className='container p-10 grid grid-cols-2 md:grid-cols-4 gap-4'> {/* py-10 */}
      <div className='flex flex-col gap-4'>
        <div>
          <img className='h-auto max-w-full rounded-lg hover:scale-90 transition-all' src="/images_gallery/badroom.jpg" alt="gallery" />
        </div>
        <div>
          <img className='h-auto max-w-full rounded-lg hover:scale-90 transition-all' src="/images_gallery/gallery2.jpg" alt="gallery" />
        </div>
        <div>
          <img className='h-auto max-w-full rounded-lg hover:scale-90 transition-all' src="/images_gallery/gallery.jpg" alt="gallery" />
        </div>
      </div>

      <div className='flex flex-col gap-4'>
        <div>
          <img className='h-auto max-w-full rounded-lg hover:scale-90 transition-all' src="/images_gallery/swiper1.jpg" alt="gallery" />
        </div>
        <div>
          <img className='h-auto max-w-full rounded-lg hover:scale-90 transition-all' src="/images_gallery/gallery11.jpg" alt="gallery" />
        </div>
        <div>
          <img className='h-auto max-w-full rounded-lg hover:scale-90 transition-all' src="/images_gallery/livingroom.jpg" alt="gallery" />
        </div>
      </div>

      <div className='flex flex-col gap-4'>
        <div>
          <img className='h-auto max-w-full rounded-lg hover:scale-90 transition-all' src="/images_gallery/gallery14.jpg" alt="gallery" />
        </div>
        <div>
          <img className='h-auto max-w-full rounded-lg hover:scale-90 transition-all' src="/images_gallery/gallery15.jpg" alt="gallery" />
        </div>
        <div>
          <img className='h-auto max-w-full rounded-lg hover:scale-90 transition-all' src="/images_gallery/gallery12.jpg" alt="gallery" />
        </div>
      </div>

      <div className='flex flex-col gap-4'>
        <div>
          <img className='h-auto max-w-full rounded-lg hover:scale-90 transition-all' src="/images_gallery/gallery7.jpg" alt="gallery" />
        </div>
        <div>
          <img className='h-auto max-w-full rounded-lg hover:scale-90 transition-all' src="/images_gallery/gallery11.jpg" alt="gallery" />
        </div>
        <div>
          <img className='h-auto max-w-full rounded-lg hover:scale-90 transition-all' src="/images_gallery/gallery3.jpg" alt="gallery" />
        </div>
      </div>

    </div>
  )
};

export default page;