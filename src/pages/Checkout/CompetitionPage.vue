<template>
  <HeaderBarHomePage />
  <div class="tw-flex tw-flex-col tw-gap-12 tw-px-[120px] tw-py-24">
    <div class="tw-text-5xl tw-font-bold">Giải đấu B</div>
    <div class="tw-grid tw-grid-cols-3 tw-gap-24">
      <div
        v-for="competitor in competitors"
        :key="competitor.id"
        class="tw-bg-[#EFE9D9] tw-p-8 tw-flex tw-flex-col tw-gap-6 tw-rounded-sm"
      >
        <img :src="competitor.image" :alt="competitor.name" class="tw-w-full tw-rounded-sm" />
        <div class="tw-text-2xl tw-font-bold">{{ competitor.name }}</div>
        <div class="tw-text-lg tw-text-[#C4C4C4]">Thứ hạng hiện tại: {{ competitor.position }}</div>
        <div class="tw-flex tw-flex-col tw-gap-2 tw-text-xl">
          <div>Sex: {{ competitor.sex }}</div>
          <div>Born in: {{ competitor.born }}</div>
          <div>Size: {{ competitor.size }}</div>
          <div>Variety: {{ competitor.variety }}</div>
        </div>
        <button
          class="tw-bg-[#4A9C80] tw-text-[#FFFFFF] tw-w-fit tw-px-6 tw-py-2 tw-font-bold tw-rounded-3xl"
        >
          Xem thêm
        </button>
      </div>
    </div>
    <div class="tw-bg-[#DF0C00] tw-h-2 tw-w-full"></div>
    <div class="tw-flex tw-justify-between tw-text-2xl">
      <div>< Trang trước</div>
      <div class="tw-flex tw-gap-4 tw-underline">
        <span class="tw-font-bold">1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
        <span>5</span>
      </div>
      <div>Trang tiếp ></div>
    </div>
  </div>
  <FooterHomePage />
</template>

<script setup>
import HeaderBarHomePage from '@/components/HeaderBarHomePage.vue'
import FooterHomePage from '@/components/FooterHomePage.vue'
import Koi1 from '@/assets/images/competition/koi1.png'
import Koi2 from '@/assets/images/competition/koi2.png'
import Koi3 from '@/assets/images/competition/koi3.png'
import Koi4 from '@/assets/images/competition/koi4.png'
import Koi5 from '@/assets/images/competition/koi5.png'
import Koi6 from '@/assets/images/competition/koi6.png'

const competitors = [
  {
    id: 1,
    name: 'Showa – koi',
    position: 6,
    sex: 'Female',
    born: 2021,
    size: '26.00 inch / 67 cm',
    variety: 'Showa',
    image: Koi1
  },
  {
    id: 2,
    name: 'Taisho Sanke – koi',
    position: 5,
    sex: 'Female',
    born: 2021,
    size: '26.00 inch / 67 cm',
    variety: 'Kohaku',
    image: Koi2
  },
  {
    id: 3,
    name: 'Showaki – koi',
    position: 9,
    sex: 'Female',
    born: 2021,
    size: '26.00 inch / 67 cm',
    variety: 'Showa',
    image: Koi3
  },
  {
    id: 4,
    name: 'Showanika – koi',
    position: 17,
    sex: 'Female',
    born: 2021,
    size: '26.00 inch / 67 cm',
    variety: 'Kohaku',
    image: Koi4
  },
  {
    id: 5,
    name: 'Howa – koi',
    position: 65,
    sex: 'Female',
    born: 2021,
    size: '26.00 inch / 67 cm',
    variety: 'Muji',
    image: Koi5
  },
  {
    id: 6,
    name: 'Kawa – koi',
    position: 66,
    sex: 'Female',
    born: 2021,
    size: '26.00 inch / 67 cm',
    variety: 'Kohaku',
    image: Koi6
  }
]
</script>
