
<template>
  <div>
    <HeaderCustomer />
    <div class="content">
      <div class="row align-items-center">
        <div class="col-auto">
          <h1 class="title">DANH SÁCH CUỘC THI</h1>
        </div>
        <div class="col-auto">
          <button class="search-button" @click="showSearchModal">Tìm kiếm</button>
        </div>
      </div>
      <div class="data-table">
        <div class="row">
          <div class="col-3" v-for="(competition, index) in competitionList" :key="index">
            <div class="koi-card">
              <img :src="competition.image" alt="Koi Fish" class="koi-image">
              <div class="koi-details">
                <div><strong>Tên:</strong> {{ competition.name }}</div>
                <div><strong>Ngày đăng kí:</strong> {{ competition.registrationDate }}</div>
                <div><strong>Trạng thái:</strong> {{ competition.status }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterCustomer />
      <SearchListKoiFish :isVisible="isSearchModalVisible" @close="closeSearchModal" @search="performSearch" />
    </div>
  </div>
</template>

<script>
import { axiosPrivate } from '@/api/axios.js';
import HeaderCustomer from '@/components/HeaderCustomer.vue';
import FooterCustomer from '@/components/FooterCustomer.vue';
import SearchListKoiFish from '@/modal/SearchListkoiFish.vue';
import koi1 from '@/assets/images/koi1.png';

export default {
name: 'HomePage',
components: {
  HeaderCustomer,
  FooterCustomer,
  SearchListKoiFish
},
data() {
  return {
    competitionList: [],
    isModalVisible: false,
    isSearchModalVisible: false,
  };
},
mounted() {
  this.fetchCompetitionList();
},
methods: {
  async fetchCompetitionList() {
    try {
      const response = await axiosPrivate.get('/api/register', {
        params: {
          pageNumber: 1,
          pageSize: 10
        }
      });
      this.competitionList = response.data.items.map(competition => ({
        ...competition,
        image: koi1, 
        name: competition.competition.name,
        registrationDate: this.formatDate(competition.createdTime),
        status: this.formatStatus(competition.status)
      }));
    } catch (error) {
      console.error('Error fetching koi list:', error);
    }
  },
  formatDate(dateString) {
    const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
    return new Date(dateString).toLocaleDateString('vi-VN', options);
  },
  formatStatus(status) {
    switch (status) {
      case 0:
        return 'Chưa duyệt';
      case 1:
        return 'Đã duyệt';
      case 3:
        return 'Bị Hủy';
      default:
        return 'Không xác định';
    }
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
