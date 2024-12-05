<template>
  <div>
    <HeaderBarHomePage />
    <div class="tw-flex tw-flex-col">
      <section id="introduction" class="custom-background tw-h-[1000px] tw-w-full">
        <div class="tw-flex tw-flex-col tw-max-w-[625px] tw-mt-[80px] tw-ml-[160px]">
          <header class="tw-flex tw-flex-col tw-w-full">
            <h1 class="tw-text-4xl tw-font-bold tw-tracking-wider tw-leading-10 tw-text-slate-900">
              Triển lãm cá Koi toàn quốc lần thứ 7 (2024)
            </h1>
            <p class="tw-mt-5 tw-text-lg tw-leading-8 tw-text-blue-600">
              Tiếp nối sự thành công tại cuộc thi lần thứ 6 vừa rồi (2023), tại triển lãm lần này có
              700 slot đăng ký cá koi dành cho nhiều trại cá, hồ và câu lạc bộ cá koi nổi tiếng
              trong và ngoài nước cùng tham gia dự thi.
            </p>
          </header>
          <button
            class="tw-gap-2.5 tw-self-stretch tw-py-1.5 tw-mt-10 tw-max-w-full tw-text-base tw-font-bold tw-leading-loose tw-text-center tw-text-white tw-bg-red-600 tw-w-[189px]"
            @click="handleRegistration"
          >
            Đăng ký cá Koi đi thi
          </button>
        </div>
      </section>

      <section class="tw-px-5 tw-md:tw-px-30 tw-mt-12 tw-flex tw-flex-col tw-items-center">
        <div class="tw-text-2xl tw-md:tw-text-4xl tw-mb-8 tw-text-center">
          Kết quả chung cuộc giải đấu A
        </div>
        
        <!-- Carousel container -->
        <div class="tw-w-[1200px] tw-relative">
          <carousel :items-to-show="3" :wrapAround="true" :transition="500" :snap-align="'start'">
            <slide v-for="koi in koiList" :key="koi.id">
              <!-- Card -->
              <div class="tw-bg-white tw-rounded-lg tw-shadow-lg tw-overflow-hidden tw-w-[300px] tw-mx-auto">
                <img 
                  :src="koi.image" 
                  :alt="koi.name"
                  class="tw-w-full tw-h-[350px] tw-object-cover hover:tw-scale-105 tw-transition-transform"
                />
                <div class="tw-p-4 tw-text-center">
                  <div class="tw-text-gray-500 tw-text-sm tw-uppercase">CÁ KOI</div>
                  <div class="tw-text-blue-600 tw-text-lg tw-font-medium tw-mt-1">{{ koi.name }}</div>
                  <div class="tw-flex tw-justify-center tw-mt-2">
                    <span v-for="star in 5" :key="star" class="tw-text-2xl tw-text-blue-400">★</span>
                  </div>
                </div>
              </div>
            </slide>

            <template #addons>
              <navigation />
            </template>
          </carousel>
        </div>
      </section>

      <section class="tw-flex tw-gap-8 tw-px-[120px] tw-mb-24">
        <div class="tw-w-3/4">
          <h2 class="tw-text-4xl tw-font-bold tw-mb-12 tw-text-center">Giải thưởng chung cuộc</h2>
          
          <div class="tw-flex tw-justify-center tw-gap-8">
            <!-- Giải nhì -->
            <div class="tw-w-[300px] tw-text-center">
              <img 
                src="../assets/images/silver-medal.png"
                alt="Huy chương bạc"
                class="tw-w-24 tw-h-24 tw-mx-auto tw-mb-4"
              />
              <div class="tw-relative">
                <img 
                  :src="KoiSecond" 
                  alt="Giải nhì"
                  class="tw-w-full tw-h-[350px] tw-object-cover tw-rounded-xl tw-shadow-lg"
                />
                <div class="tw-mt-4">
                  <div class="tw-font-bold tw-text-xl">Giải nh��</div>
                  <div class="tw-text-red-600 tw-font-bold">50.000.000 VND</div>
                </div>
              </div>
            </div>

            <!-- Giải nhất -->
            <div class="tw-w-[300px] tw-text-center">
              <img 
                src="../assets/images/gold-medal.png"
                alt="Huy chương vàng"
                class="tw-w-24 tw-h-24 tw-mx-auto tw-mb-4"
              />
              <div class="tw-relative">
                <img 
                  :src="KoiFirst" 
                  alt="Giải nhất"
                  class="tw-w-full tw-h-[350px] tw-object-cover tw-rounded-xl tw-shadow-lg"
                />
                <div class="tw-mt-4">
                  <div class="tw-font-bold tw-text-xl">Giải nhất</div>
                  <div class="tw-text-red-600 tw-font-bold">100.000.000 VND</div>
                </div>
              </div>
            </div>

            <!-- Giải ba -->
            <div class="tw-w-[300px] tw-text-center">
              <img 
                src="../assets/images/bronze-medal.png"
                alt="Huy chương đồng"
                class="tw-w-24 tw-h-24 tw-mx-auto tw-mb-4"
              />
              <div class="tw-relative">
                <img 
                  :src="KoiThird" 
                  alt="Giải ba"
                  class="tw-w-full tw-h-[350px] tw-object-cover tw-rounded-xl tw-shadow-lg"
                />
                <div class="tw-mt-4">
                  <div class="tw-font-bold tw-text-xl">Giải ba</div>
                  <div class="tw-text-red-600 tw-font-bold">30.000.000 VND</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="tw-w-1/4">
          <h2 class="tw-text-2xl tw-font-bold tw-mb-6">Tóm tắt bài đánh giá</h2>
          
          <!-- Rating Summary -->
          <div class="tw-bg-white tw-rounded-lg tw-p-6 tw-mb-8">
            <div class="tw-flex tw-justify-between tw-items-center tw-mb-4">
              <!-- Rating bars -->
              <div class="tw-flex tw-flex-col tw-gap-2 tw-flex-1 tw-mr-8">
                <!-- 5 stars -->
                <div class="tw-flex tw-items-center">
                  <span class="tw-w-4 tw-mr-2">5</span>
                  <div class="tw-flex-1 tw-bg-gray-200 tw-rounded-full tw-h-2">
                    <div class="tw-bg-blue-500 tw-rounded-full tw-h-2" style="width: 90%"></div>
                  </div>
                </div>
                <!-- 4 stars -->
                <div class="tw-flex tw-items-center">
                  <span class="tw-w-4 tw-mr-2">4</span>
                  <div class="tw-flex-1 tw-bg-gray-200 tw-rounded-full tw-h-2">
                    <div class="tw-bg-blue-500 tw-rounded-full tw-h-2" style="width: 7%"></div>
                  </div>
                </div>
                <!-- 3 stars -->
                <div class="tw-flex tw-items-center">
                  <span class="tw-w-4 tw-mr-2">3</span>
                  <div class="tw-flex-1 tw-bg-gray-200 tw-rounded-full tw-h-2">
                    <div class="tw-bg-blue-500 tw-rounded-full tw-h-2" style="width: 2%"></div>
                  </div>
                </div>
                <!-- 2 stars -->
                <div class="tw-flex tw-items-center">
                  <span class="tw-w-4 tw-mr-2">2</span>
                  <div class="tw-flex-1 tw-bg-gray-200 tw-rounded-full tw-h-2">
                    <div class="tw-bg-blue-500 tw-rounded-full tw-h-2" style="width: 1%"></div>
                  </div>
                </div>
                <!-- 1 star -->
                <div class="tw-flex tw-items-center">
                  <span class="tw-w-4 tw-mr-2">1</span>
                  <div class="tw-flex-1 tw-bg-gray-200 tw-rounded-full tw-h-2">
                    <div class="tw-bg-blue-500 tw-rounded-full tw-h-2" style="width: 0%"></div>
                  </div>
                </div>
              </div>

              <!-- Average rating -->
              <div class="tw-text-center">
                <div class="tw-text-4xl tw-font-bold">5,0</div>
                <div class="tw-flex tw-justify-center tw-text-yellow-400">
                  ★★★★★
                </div>
                <div class="tw-text-sm tw-text-gray-500">132 bài viết</div>
              </div>
            </div>

            <!-- Write review button -->
            <button class="tw-flex tw-items-center tw-justify-center tw-w-full tw-py-2 tw-border tw-border-gray-300 tw-rounded-lg tw-text-gray-600 hover:tw-bg-gray-50">
              <span class="tw-mr-2">✏️</span>
              Viết bài đánh giá
            </button>
          </div>

          <!-- Reviews list -->
          <div>
            <h3 class="tw-text-xl tw-font-bold tw-mb-4">Tất cả các bài đánh giá</h3>
            <div class="tw-flex tw-flex-col tw-gap-4">
              <div v-for="review in reviews" :key="review.id" class="tw-bg-white tw-p-4 tw-rounded-lg">
                <div class="tw-flex tw-justify-between tw-items-start">
                  <div class="tw-flex tw-gap-3">
                    <img :src="review.avatar" alt="" class="tw-w-10 tw-h-10 tw-rounded-full" />
                    <div>
                      <div class="tw-font-medium">{{ review.name }}</div>
                      <div class="tw-text-sm tw-text-gray-500">{{ review.stats }}</div>
                    </div>
                  </div>
                  <button class="tw-text-gray-400">⋮</button>
                </div>
                <div class="tw-flex tw-text-yellow-400 tw-my-2">★★★★★</div>
                <p class="tw-text-gray-600">{{ review.comment }}</p>
                <button class="tw-text-blue-500 tw-text-sm tw-mt-2">...Thêm</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="category" class="tw-bg-gray-50 tw-py-16">
        <div class="tw-flex tw-justify-center tw-w-full tw-px-[10%]">
          <!-- Scoring Criteria Section -->
          <div class="tw-basis-1/2 tw-px-12">
            <div class="tw-flex tw-flex-col tw-items-start">
              <h2 class="tw-text-3xl tw-font-bold tw-mb-8 tw-text-blue-800">Các tiêu chí chấm điểm</h2>
              
              <div class="tw-grid tw-gap-4">
                <!-- Tiêu chí 1 -->
                <div class="tw-flex tw-items-center tw-gap-4 tw-bg-white tw-p-4 tw-rounded-lg tw-shadow-sm hover:tw-shadow-md tw-transition-all">
                  <div class="tw-w-12 tw-h-12 tw-bg-blue-100 tw-rounded-full tw-flex tw-items-center tw-justify-center">
                    <span class="tw-text-blue-600 tw-font-bold">1</span>
                  </div>
                  <div>
                    <h3 class="tw-font-semibold tw-text-xl">Hình dáng</h3>
                    <p class="tw-text-gray-600">Đánh giá tổng thể về form và cấu trúc của cá</p>
                  </div>
                </div>

                <!-- Tiêu chí 2 -->
                <div class="tw-flex tw-items-center tw-gap-4 tw-bg-white tw-p-4 tw-rounded-lg tw-shadow-sm hover:tw-shadow-md tw-transition-all">
                  <div class="tw-w-12 tw-h-12 tw-bg-blue-100 tw-rounded-full tw-flex tw-items-center tw-justify-center">
                    <span class="tw-text-blue-600 tw-font-bold">2</span>
                  </div>
                  <div>
                    <h3 class="tw-font-semibold tw-text-xl">Kích thước</h3>
                    <p class="tw-text-gray-600">Đánh giá về độ lớn và tỷ lệ cơ thể</p>
                  </div>
                </div>

                <!-- Tiêu chí 3 -->
                <div class="tw-flex tw-items-center tw-gap-4 tw-bg-white tw-p-4 tw-rounded-lg tw-shadow-sm hover:tw-shadow-md tw-transition-all">
                  <div class="tw-w-12 tw-h-12 tw-bg-blue-100 tw-rounded-full tw-flex tw-items-center tw-justify-center">
                    <span class="tw-text-blue-600 tw-font-bold">3</span>
                  </div>
                  <div>
                    <h3 class="tw-font-semibold tw-text-xl">Chủng loại</h3>
                    <p class="tw-text-gray-600">Xác định và đánh giá về độ thuần chủng</p>
                  </div>
                </div>

                <!-- Tiêu chí 4 -->
                <div class="tw-flex tw-items-center tw-gap-4 tw-bg-white tw-p-4 tw-rounded-lg tw-shadow-sm hover:tw-shadow-md tw-transition-all">
                  <div class="tw-w-12 tw-h-12 tw-bg-blue-100 tw-rounded-full tw-flex tw-items-center tw-justify-center">
                    <span class="tw-text-blue-600 tw-font-bold">4</span>
                  </div>
                  <div>
                    <h3 class="tw-font-semibold tw-text-xl">Màu sắc</h3>
                    <p class="tw-text-gray-600">Đánh giá về độ sắc nét và sự hài hòa của màu sắc</p>
                  </div>
                </div>

                <!-- Tiêu chí 5 -->
                <div class="tw-flex tw-items-center tw-gap-4 tw-bg-white tw-p-4 tw-rounded-lg tw-shadow-sm hover:tw-shadow-md tw-transition-all">
                  <div class="tw-w-12 tw-h-12 tw-bg-blue-100 tw-rounded-full tw-flex tw-items-center tw-justify-center">
                    <span class="tw-text-blue-600 tw-font-bold">5</span>
                  </div>
                  <div>
                    <h3 class="tw-font-semibold tw-text-xl">Hoa văn trên da</h3>
                    <p class="tw-text-gray-600">Đánh giá về độ tinh xảo của các hoa văn</p>
                  </div>
                </div>

                <!-- Tiêu chí 6 -->
                <div class="tw-flex tw-items-center tw-gap-4 tw-bg-white tw-p-4 tw-rounded-lg tw-shadow-sm hover:tw-shadow-md tw-transition-all">
                  <div class="tw-w-12 tw-h-12 tw-bg-blue-100 tw-rounded-full tw-flex tw-items-center tw-justify-center">
                    <span class="tw-text-blue-600 tw-font-bold">6</span>
                  </div>
                  <div>
                    <h3 class="tw-font-semibold tw-text-xl">Dáng bơi</h3>
                    <p class="tw-text-gray-600">Đánh giá về tư thế và phong cách bơi</p>
                  </div>
                </div>

                <!-- Tiêu chí 7 -->
                <div class="tw-flex tw-items-center tw-gap-4 tw-bg-white tw-p-4 tw-rounded-lg tw-shadow-sm hover:tw-shadow-md tw-transition-all">
                  <div class="tw-w-12 tw-h-12 tw-bg-blue-100 tw-rounded-full tw-flex tw-items-center tw-justify-center">
                    <span class="tw-text-blue-600 tw-font-bold">7</span>
                  </div>
                  <div>
                    <h3 class="tw-font-semibold tw-text-xl">Sức khỏe</h3>
                    <p class="tw-text-gray-600">Đánh giá tình trạng sức khỏe tổng thể</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Registration Fee Explanation Section -->
          <div class="tw-basis-1/2 tw-px-12">
            <div class="tw-bg-white tw-rounded-xl tw-p-8 tw-shadow-lg">
              <h2 class="tw-text-3xl tw-font-bold tw-mb-8 tw-text-blue-800">
                Tại sao cần tốn phí khi đăng kí thi?
              </h2>
              
              <div class="tw-space-y-6">
                <div class="tw-flex tw-gap-4">
                  <div class="tw-w-12 tw-h-12 tw-bg-red-100 tw-rounded-full tw-flex tw-items-center tw-justify-center">
                    <svg class="tw-w-6 tw-h-6 tw-text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 class="tw-font-semibold tw-text-xl tw-mb-2">Đảm bảo chất lượng sự kiện</h3>
                    <p class="tw-text-gray-600">Kinh phí được sử dụng để tổ chức sự kiện chuyên nghiệp, từ cơ sở vật chất đến đội ngũ giám khảo.</p>
                  </div>
                </div>

                <div class="tw-flex tw-gap-4">
                  <div class="tw-w-12 tw-h-12 tw-bg-red-100 tw-rounded-full tw-flex tw-items-center tw-justify-center">
                    <svg class="tw-w-6 tw-h-6 tw-text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </div>
                  <div>
                    <h3 class="tw-font-semibold tw-text-xl tw-mb-2">Tính cạnh tranh công bằng</h3>
                    <p class="tw-text-gray-600">Đảm bảo các đối thủ tham gia với tinh thần nghiêm túc và chuyên nghiệp.</p>
                  </div>
                </div>

                <div class="tw-flex tw-gap-4">
                  <div class="tw-w-12 tw-h-12 tw-bg-red-100 tw-rounded-full tw-flex tw-items-center tw-justify-center">
                    <svg class="tw-w-6 tw-h-6 tw-text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 class="tw-font-semibold tw-text-xl tw-mb-2">Phần thưởng hấp dẫn</h3>
                    <p class="tw-text-gray-600">Góp phần tạo nên quỹ giải thưởng giá trị cho người chiến thắng.</p>
                  </div>
                </div>
              </div>

              <!-- Registration Button -->
              <div class="tw-mt-8 tw-flex tw-justify-center">
                <router-link 
                  to="/guide" 
                  class="tw-bg-red-600 hover:tw-bg-red-700 tw-text-white tw-font-bold tw-py-3 tw-px-8 tw-rounded-full tw-shadow-lg hover:tw-shadow-xl tw-transition-all tw-flex tw-items-center tw-gap-2"
                >
                  <span>Tham gia ngay</span>
                  <svg class="tw-w-5 tw-h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div class="tw-px-[120px] tw-flex tw-flex-col tw-gap-12 tw-mb-12">
          <div class="tw-text-4xl tw-text-center tw-font-bold">“Profile “ Ban giám khảo</div>
          <div class="tw-flex tw-gap-4">
            <div class="tw-flex tw-flex-col tw-items-center tw-gap-4">
              <img width="300" src="@/assets/images/judge1.jpg" />
              <div class="tw-text-2xl">Manoru Komada</div>
              <div class="tw-text-xl tw-text-center">
                Mamoru Kodama là một trong những giám khảo hàng đầu và có uy tín nhất trong cộng
                đồng cá Koi. Ông là người sáng lập Kodama Koi Farm, một trong những trang trại cá
                Koi lớn nhất và nổi tiếng nhất thế giới.Ông Kodama được biết đến với kiến thức sâu
                rộng về các giống cá Koi và kỹ thuật nuôi dưỡng. Ông thường xuyên được mời làm giám
                khảo tại các cuộc thi cá Koi quốc tế và đã xuất bản nhiều sách về cá Koi.
              </div>
            </div>

            <div class="tw-flex tw-flex-col tw-items-center tw-gap-4">
              <img
                width="300"
                class="tw-aspect-square tw-object-cover tw-object-top"
                src="@/assets/images/judge2.jpg"
              />
              <div class="tw-text-2xl">Tosyo Sakai</div>
              <div class="tw-text-xl tw-text-center">
                Toshio Sakai là một giám khảo và nhà lai tạo cá Koi nổi tiếng từ Nhật Bản. Ông là
                chủ sở hữu của trang trại cá Koi nổi tiếng Isawa Nishikigoi Center.Toshio Sakai được
                biết đến với việc phát triển nhiều giống cá Koi đẹp và độc đáo. Ông đã giành nhiều
                giải thưởng lớn tại các cuộc thi cá Koi quốc tế và được coi là một trong những
                chuyên gia hàng đầu trong lĩnh vực này.
              </div>
            </div>

            <div class="tw-flex tw-flex-col tw-items-center tw-gap-4">
              <img
                width="300"
                class="tw-aspect-square tw-object-cover tw-object-top"
                src="@/assets/images/judge3.jpg"
              />
              <div class="tw-text-2xl">Peter Waddington</div>
              <div class="tw-text-xl tw-text-center">
                Peter Waddington là một giám khảo và tác giả nổi tiếng trong cộng đồng cá Koi. Ông
                là người sáng lập Infiltration, một công ty chuyên cung cấp các sản phẩm và dịch vụ
                liên quan đến cá Koi. Peter Waddington đã viết nhiều sách và bài báo về cá Koi, chia
                sẻ kiến thức và kinh nghiệm của mình với cộng đồng. Ông thường xuyên được mời làm
                giám khảo tại các cuộc thi cá Koi trên toàn thế giới.
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <section id="prize">
      <div class="tw-flex tw-flex-col tw-w-full tw-bg-white tw-px-[120px] tw-pb-24">
        <div class="tw-text-center tw-w-full tw-text-4xl tw-font-bold tw-pt-12 tw-pb-12">
          Nhà Tài Trợ
        </div>
        <div class="tw-flex">
          <div class="tw-w-1/3 tw-flex tw-flex-col tw-items-start tw-px-12 tw-gap-6">
            <img :src="KoiFarm" alt="koi-farm" class="tw-w-[260px]" />
            <div class="tw-text-lg tw-leading-relaxed">
              Koilover là chuỗi Hệ thống cung cấp Cá Koi Nhật hàng đầu Việt Nam, nơi bạn có thể tin tưởng nhờ đội ngũ chuyên nghiệp, hạ tầng tiêu chuẩn cùng bộ sản phẩm và dịch vụ tốt nhất dành cho cá koi. Chúng tôi hướng tới việc kinh doanh bền vững dựa trên việc đáp ứng lợi ích lâu dài của khách hàng, Koilover luôn đồng hành cùng đam mê.
            </div>
            <div class="tw-mt-4">
              Giờ làm việc <br />
              Thứ Hai – Thứ Sáu <br />
              7:00 - 17:00 <br />
              Thứ Bảy và Chủ Nhật: 8:00 - 16:00
            </div>
          </div>
          <div class="tw-w-1/3 tw-flex tw-flex-col tw-items-start tw-px-12 tw-gap-6">
            <img :src="KoiPrize" alt="koi-farm" class="tw-w-[260px]" />
            <div class="tw-text-xl tw-text-[#DF0C00]">AWARD-WINNING JAPANESE KOI DEALER</div>
            <div class="tw-text-lg tw-leading-relaxed">
              Kodama Koi Farm là điểm đến hàng đầu cho cá koi Nhật Bản chất lượng để bán. Chúng tôi là nhà nhập khẩu cá Koi lớn nhất ở Bắc Mỹ. Chúng tôi chuyên nuôi cá koi vô địch!
            </div>
          </div>
          <div class="tw-w-1/3 tw-flex tw-flex-col tw-items-start tw-px-12 tw-gap-6">
            <img :src="KoiPrize2" alt="koi-farm" class="tw-w-[260px]" />
            <div class="tw-text-xl tw-text-[#DF0C00]">For Koi Lovers!</div>
            <div class="tw-text-lg tw-leading-relaxed">
              Thật vinh dự khi Koi Việt Minh Xuân Koi Farm cũng được góp mặt tranh tài với các chú Koi Nhật từ các trại trên toàn quốc. Với ấp ủ Nâng tầm giá trị Cá Koi Việt Nam sánh vai cùng Cá Koi Nhật Và…" Minh Xuân Koi Farm – Chúng tôi đã làm được".
            </div>
          </div>
        </div>
      </div>
    </section>
    <FooterHomePage />
  </div>
</template>

<script setup>
import HeaderBarHomePage from '@/components/HeaderBarHomePage.vue'
import FooterHomePage from '@/components/FooterHomePage.vue'
import Review1 from '@/assets/images/reviews/review1.png'
import Review2 from '@/assets/images/reviews/review2.png'
import Review3 from '@/assets/images/reviews/review3.png'
import Review4 from '@/assets/images/reviews/review4.png'
import Review5 from '@/assets/images/reviews/review5.png'
import StarIcon from '@/assets/svg/star.svg'
import UnstartIcon from '@/assets/svg/un-star.svg'
import KoiFarm from '@/assets/images/koi-farm.png'
import KoiPrize from '@/assets/images/koi-prize.png'
import KoiPrize2 from '@/assets/images/koi-prize-2.png'
import PaymentCard from '@/assets/images/payment-card.png'
import KoiInfo from '@/assets/images/koi-info.png'
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
const reviews = [
  {
    id: 1,
    name: 'Nguyễn Văn Hùng',
    avatar: '/path/to/avatar1.jpg',
    stats: '2 bài đánh giá · 5 cá dự thi',
    comment: 'Cuộc thi tổ chức rất chuyên nghiệp, tôi rất hài lòng với quy trình chấm điểm minh bạch. Rất vui khi cá của tôi đạt giải!'
  },
  // ... thêm các review khác
]

const rating = 4

import KoiImage1 from '@/assets/images/koi-a-mature.png'
import KoiImage2 from '@/assets/images/koi-b-adult.png'
import KoiImage3 from '@/assets/images/koi-a-young.png'
import KoiImage4 from '@/assets/images/koi-b-baby.png'

const koiList = [
  {
    id: 1,
    image: KoiImage1,
    name: 'Koi A- Giải nhất -Hạng mature'
  },
  {
    id: 2,
    image: KoiImage2,
    name: 'Koi B- Giải nhất -Hạng adult'
  },
  {
    id: 3,
    image: KoiImage3,
    name: 'Koi A- Giải nhất -Hạng young'
  },
  {
    id: 4,
    image: KoiImage4,
    name: 'Koi A- Giải nhất -Hạng baby'
  }
]

import KoiFirst from '../assets/images/koi-first.jpg'
import KoiSecond from '../assets/images/koi-second.jpg'
import KoiThird from '../assets/images/koi-third.jpg'
</script>

<style scoped>
.content {
  min-height: 60vh;
  padding: 20px;
}

.custom-background {
  position: relative;
  background:
    url('@/assets/images/bg-intro-2.png') right 0px no-repeat,
    url('@/assets/images/bg-intro-1.png') 40px 450px no-repeat;
  background-size: contain;
  margin: 0;
  padding: 0;
  width: 100vw;
}

.tw-shadow-lg {
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

/* Style cho navigation arrows */
:deep(.carousel__prev),
:deep(.carousel__next) {
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  width: 40px;
  height: 40px;
  color: white;
  margin: 0 -50px; /* Di chuyển nút ra ngoài container */
}

/* Ẩn pagination dots */
:deep(.carousel__pagination) {
  display: none;
}

/* Thêm animation cho huy chương nếu muốn */
img[src*="medal"] {
  animation: float 3s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}
</style>
