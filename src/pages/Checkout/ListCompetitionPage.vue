<template>
  <div>
    <div class="main-container">
      <SidebarAdmin />
      <div class="header-content-container">
        <HeaderAdmin />
        <div class="content">
          <div class="title-search-container">
            <h1 class="title">DANH SÁCH CUỘC THI</h1>
            <button class="search-button" @click="openSearchModal">Tìm kiếm</button>
            <font-awesome-icon class="add-button" :icon="['fas', 'plus']" @click="openModal" />
          </div>

          <!-- Modal tìm kiếm -->
          <SearchModal 
            v-if="showSearchModal" 
            :isVisible="showSearchModal" 
            @close="closeSearchModal" 
            @search="handleSearch" 
          />

          <div class="table-container">
            <table class="contest-table">
              <thead>
                <tr>
                  <th>Tên cuộc thi</th>
                  <th>Mô tả</th>
                  <th>Ngày bắt đầu/Ngày kết thúc</th>
                  <th>Trạng thái</th>
                  <th>Hạng thi đấu/Vòng thi đấu</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Komada</td>
                  <td>......</td>
                  <td>10-09-2024 / 10-11-2024</td>
                  <td>Đang diễn ra</td>
                  <td>
                    <strong>Vòng thi đấu:</strong>
                    <ul>
                      <li>Sơ khảo</li>
                      <li>Bán kết</li>
                      <li>Chung kết</li>
                      <li>Đặc biệt</li>
                    </ul>
                    <strong>Hạng thi đấu:</strong>
                    <ul>
                      <li>Mature</li>
                      <li>Large</li>
                      <li>Adult</li>
                      <li>Baby</li>
                    </ul>
                  </td>
                </tr>
                <!-- Thêm các dòng dữ liệu khác tại đây -->
              </tbody>
            </table>
          </div>

          <!-- Modal tạo cuộc thi -->
          <CreateCompetition v-if="showModal" @close="closeModal" />
        </div>
      </div>
    </div>
    
    <!-- Modal tìm kiếm -->
    <SearchModal 
      v-if="showSearchModal" 
      :isVisible="showSearchModal" 
      @close="closeSearchModal" 
      @search="handleSearch" 
    />
  </div>
</template>

<script>
import HeaderAdmin from '@/components/HeaderAdmin.vue';
import SidebarAdmin from '@/components/SidebarAdmin.vue';
import CreateCompetition from '@/modal/CreateCompetition.vue';
import SearchModal from '@/modal/SearchListCompetition.vue';

export default {
  name: 'ListCompetitionPage',
  components: {
    HeaderAdmin,
    SidebarAdmin,
    CreateCompetition,
    SearchModal,
  },
  data() {
    return {
      showModal: false,
      showSearchModal: false,
    };
  },
  methods: {
    openModal() {
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    },
    openSearchModal() {
      this.showSearchModal = true;
    },
    closeSearchModal() {
      this.showSearchModal = false;
    },
    handleSearch(searchCriteria) {
      // Thực hiện tìm kiếm với tiêu chí đã cung cấp
      console.log("Tìm kiếm với tiêu chí:", searchCriteria);
      // Thêm logic tìm kiếm ở đây
    },
  },
};
</script>

<style scoped>
.main-container {
  display: flex;
}

.header-content-container {
  flex-grow: 1;
  margin-left: 60px; 
  transition: margin-left 0.3s;
}

.sidebar.expanded + .header-content-container {
  margin-left: 200px; 
}

.content {
  min-height: 60vh;
  padding: 20px;
}

.title-search-container {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.title {
  margin-left: 85px;
  margin-top: 40px;
  margin-right: 50px; 
  font-size: 36px; 
  font-weight: bold; 
}

.search-button {
  margin-top: 2%; /* Nhích xuống theo phần trăm */
  background-color: #8b0000;
  color: white;
  border: none;
  padding: 0.5% 3%; /* Tăng nhẹ padding để tạo sự thoải mái */
  border-radius: 10px;
  cursor: pointer;
  font-size: 150%; /* Tăng kích thước font để dễ đọc hơn */
  line-height: 1.5; /* Tăng line-height để tạo không gian hơn */
  transition: background-color 0.3s;
  margin-right: 50px;
  width: 12%; /* Giữ chiều rộng hợp lý */
}

.search-button:hover {
  background-color: gray; 
}


.add-button {
  margin-top: 25px;
  border: none;
  border-radius: 5px;
  font-size: 50px; 
}

.table-container {
  margin-top: 20px;
  border-radius: 5px;
  overflow: hidden;
}

.contest-table {
  width: 90%;
  margin: 0 auto;
  border-collapse: separate;
  border-spacing: 0px;
  font-size: larger;
}

.contest-table th {
  font-weight: bold;
  text-align: center;
  font-size: x-large;
  width: 200px;
  height: 70px;
  border-bottom: 2px solid #ddd; 
  border-top: none; 
  border-left: none; 
  border-right: none; 
}

.contest-table td {
  padding: 12px 15px;
  border-bottom: 1px solid #ddd; 
  border-top: none; 
  border-left: none; 
  border-right: none; 
  text-align: center;
  font-size: large;
}

.contest-table thead {
  background-color: #b2b4b6; 
  color: #333;
}

.contest-table tbody tr:nth-child(even) {
  background-color: #f9f9f9; 
}

.contest-table tbody tr:hover {
  background-color: #f1f1f1; 
}

.contest-table tbody ul {
  padding-left: 15px;
  text-align: center;
  list-style-type: square; 
  list-style: none;
}
</style>
