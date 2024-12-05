<template>
  <HeaderBarHomePage />
  <div class="tw-flex tw-flex-col tw-gap-12 tw-px-[120px] tw-py-24">
    <div class="tw-text-5xl tw-font-bold">Hướng dẫn đăng kí dự thi</div>
    <div class="tw-bg-[#DF0C00] tw-h-2 tw-w-full" />
    <div class="tw-flex tw-w-full tw-justify-between">
      <div class="tw-flex tw-flex-col tw-gap-10 tw-w-2/3">
        <div class="tw-text-3xl tw-font-bold">Bước 1 - Tạo tài khoản mới</div>
        <div class="tw-text-2xl">
          Khách hàng mới, thêm địa chỉ email và biệt hiệu của bạn trên trang đăng nhập để bắt đầu.
        </div>
        <button
          class="tw-text-[#DF0C00] tw-border-[#DF0C00] tw-border-4 tw-text-2xl tw-bg-[#FFFFFF] tw-px-6 tw-py-2 tw-w-fit"
        >
          Đăng kí tài khoản
        </button>
      </div>
      <img :src="Guide1" alt="guide" class="tw-w-[400px]" />
    </div>
    <div class="tw-bg-[#DF0C00] tw-h-2 tw-w-full" />
    <div class="tw-flex tw-w-full tw-justify-between">
      <div class="tw-flex tw-flex-col tw-gap-10 tw-w-2/3">
        <div class="tw-text-3xl tw-font-bold">Bước 2 – Đăng kí cá Koi</div>
        <button
          class="tw-text-[#DF0C00] tw-border-[#DF0C00] tw-border-4 tw-text-2xl tw-bg-[#FFFFFF] tw-px-6 tw-py-2 tw-w-fit"
        >
          Chọn đăng ký ngay bây giờ
        </button>
      </div>
      <img :src="Guide2" alt="guide" class="tw-w-[400px]" />
    </div>
    <div class="tw-bg-[#DF0C00] tw-h-2 tw-w-full" />
    <div class="tw-flex tw-w-full tw-justify-between tw-mb-12">
      <div class="tw-flex tw-flex-col tw-gap-10 tw-w-2/3">
        <div class="tw-text-3xl tw-font-bold">Bước 3 – Chờ ban tổ chức xét duyệt cá Koi</div>
      </div>
    </div>

    <div class="tw-bg-[#DF0C00] tw-h-2 tw-w-full" />
    <div class="tw-flex tw-w-full tw-justify-between tw-mb-12">
      <div class="tw-flex tw-flex-col tw-gap-10 tw-w-2/3">
        <div class="tw-text-3xl tw-font-bold">Bước 4 - Đăng kí cuộc thi cho cá Koi</div>
      </div>
    </div>
    <div class="tw-bg-[#DF0C00] tw-h-2 tw-w-full" />
    <div class="tw-flex tw-w-full tw-justify-between">
      <div class="tw-flex tw-flex-col tw-gap-10 tw-w-2/3">
        <div class="tw-text-3xl tw-font-bold">Bước 5 – Thanh toán</div>
        <div class="tw-text-2xl">Phí 1.000.000 VNĐ qua VNPay.</div>
      </div>
      <img :src="Guide3" alt="guide" class="tw-w-[400px]" />
    </div>
    <div class="tw-bg-[#DF0C00] tw-h-2 tw-w-full" />
    <div class="tw-flex tw-w-full tw-justify-between tw-mb-12">
      <div class="tw-flex tw-flex-col tw-gap-10 tw-w-2/3">
        <div class="tw-text-3xl tw-font-bold">
          Bước 6 - Chờ ban giám khảo xét duyệt đơn đăng kí dự thi
        </div>
        <div class="tw-text-2xl">Nhận thông báo qua gmail, chỉ dùng gmail.</div>
      </div>
    </div>

    <div class="tw-bg-[#DF0C00] tw-h-2 tw-w-full" />
    <div class="tw-flex tw-w-full tw-justify-between tw-mb-12">
      <div class="tw-flex tw-flex-col tw-gap-10 tw-w-2/3">
        <div class="tw-text-3xl tw-font-bold">
          Bước 7 - Theo dõi trạng thái và quá trình thi của cá Koi
        </div>
      </div>
    </div>
  </div>
  <FooterHomePage />
</template>

<script setup>
import HeaderBarHomePage from '@/components/HeaderBarHomePage.vue'
import FooterHomePage from '@/components/FooterHomePage.vue'
import Guide1 from '@/assets/images/guide/guide1.png'
import Guide2 from '@/assets/images/guide/guide2.png'
import Guide3 from '@/assets/images/guide/guide3.png'
import Guide4 from '@/assets/images/guide/guide4.png'
</script>
