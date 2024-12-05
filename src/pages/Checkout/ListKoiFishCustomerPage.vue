<template>
  <div>
    <HeaderCustomer />
    <div class="content">
      <div class="row align-items-center">
        <div class="col-auto">
          <h1 class="title">DANH SÁCH CÁ KOI</h1>
        </div>
        <div class="col-auto">
          <button class="search-button" @click="showSearchModal">Tìm kiếm</button>
        </div>
      </div>
      <div class="data-table">
        <div class="row">
          <div class="col-3" v-for="(koi, index) in koiList" :key="index">
            <div class="koi-card" @click="showModal(koi)">
              <img :src="koi.image" alt="Koi Fish" class="koi-image">
              <div class="koi-details">
                <div><strong>Tên:</strong> {{ koi.name }}</div>
                <div><strong>Ngày đăng kí:</strong> {{ koi.registrationDate }}</div>
                <div><strong>Trạng thái:</strong> {{ koi.status }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterCustomer />
      <InfoKoiFish :isVisible="isModalVisible" :koi="selectedKoi" @close="closeModal" />
      <SearchListKoiFish :isVisible="isSearchModalVisible" @close="closeSearchModal" @search="performSearch" />
    </div>
  </div>
</template>

<script>
import { axiosPrivate } from '@/api/axios.js';
import HeaderCustomer from '@/components/HeaderCustomer.vue';
import FooterCustomer from '@/components/FooterCustomer.vue';
import InfoKoiFish from '@/modal/InfoKoiFish.vue';
import SearchListKoiFish from '@/modal/SearchListkoiFish.vue';
import koi1 from '@/assets/images/koi1.png';

export default {
  name: 'HomePage',
  components: {
    HeaderCustomer,
    FooterCustomer,
    InfoKoiFish,
    SearchListKoiFish
  },
  data() {
    return {
      koiList: [],
      isModalVisible: false,
      isSearchModalVisible: false,
      selectedKoi: {}
    };
  },
  mounted() {
    this.fetchKoiList();
  },
  methods: {
    async fetchKoiList() {
      try {
        const response = await axiosPrivate.get('/api/koifish', {
          params: {
            pageNumber: 1,
            pageSize: 10
          }
        });
        this.koiList = response.data.items.map(koi => ({
          ...koi,
          image: koi1, 
          registrationDate: koi.createdTime,
          status: koi.isVerified === true ? 'Đã duyệt' : 'Chưa duyệt'
        }));
      } catch (error) {
        console.error('Error fetching koi list:', error);
      }
    },
    async showModal(koi) {
    try {
      const response = await axiosPrivate.get(`/api/koifish/${koi.id}`);
      this.selectedKoi = {
        ...response.data,
        image: koi1 
      };
      this.isModalVisible = true;
    } catch (error) {
      console.error('Error fetching koi details:', error);
    }
  },
    closeModal() {
      this.isModalVisible = false;
    },
    showSearchModal() {
      this.isSearchModalVisible = true;
    },
    closeSearchModal() {
      this.isSearchModalVisible = false;
    },
    performSearch(searchData) {
      this.closeSearchModal();
    }
  }
};
</script>

<style scoped>
.content {
  min-height: 60vh;
  padding: 20px;
}

.title {
  font-size: 30px;
  font-weight: bold;
}

.search-button {
  margin-top: 25%;
  background-color: #8B0000; 
  border-radius: 10px;
  color: white;
  padding: 0.5% 3%; 
  border: none;
  font-size: 150%;
  transition: background-color 0.3s;
  margin-right: 50px;
  width: 100%;
  height: 3rem; 
}


.data-table {
  border-radius: 5px;
  margin-top: 20px;
  padding: 10px;
}

.koi-card {
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 20px;
  text-align: left;
  cursor: pointer;
}

.koi-image {
  width: 100%;
  height: auto;
  border-radius: 5px;
}

.koi-details {
  margin-top: 10px;
}

.koi-details div {
  margin-bottom: 5px;
}
</style>
