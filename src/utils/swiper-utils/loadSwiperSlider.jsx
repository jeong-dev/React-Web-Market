import { SwiperSlide } from 'swiper/react';

export default function loadSwiperSlider(contentsArray, SwiperContentElem) {
  let sliders = [];
  if (contentsArray) {
    /* todo --------------------------------------------------------------------- */
    // contentsArray 내용으로 sliders 채워야함
    contentsArray.forEach((content) => {
      sliders.push(
        <SwiperSlide key={content.key}>
          <SwiperContentElem content={content} />
        </SwiperSlide>
      );
    });
    //
  } else {
    // warning about empty arr
  }

  return sliders;
}
