<template>
  <div>
    <HeaderCustomer />
    <div class="content">
      <h2>Wallet Control</h2>

      <!-- Wallet Balance Info -->
      <div class="wallet-info">
        <p>Current Balance: {{ walletBalance }} VND</p>
      </div>

      <!-- Add Funds Section -->
      <div class="actions">
        <div class="add-funds">
          <h3>Add Funds</h3>
          <input type="number" v-model="addAmount" placeholder="Amount to add" />
          <button class="search-btn" @click="addFunds">Add</button>
        </div>

        <!-- Transfer Funds Section -->
        <div class="transfer-funds">
          <h3>Transfer Funds</h3>
          <input type="number" v-model="transferAmount" placeholder="Amount to transfer" />
          <input type="text" v-model="recipient" placeholder="Recipient ID" />
          <button @click="transferFunds">Transfer</button>
        </div>
      </div>

      <!-- Transaction History Section -->
      <div class="transaction-history">
        <h3>Transaction History</h3>
        <ul v-if="transactions.length > 0">
          <li v-for="transaction in transactions" :key="transaction.id">
            <strong>{{ transaction.type }}</strong> | Amount: {{ transaction.amount }} VND | 
            Date: {{ new Date(transaction.date).toLocaleString() }} | 
            Recipient: {{ transaction.recipient || 'N/A' }}
          </li>
        </ul>
        <p v-else>No transactions yet.</p>
      </div>
    </div>
    <FooterCustomer />
  </div>
</template>

<script>
import HeaderCustomer from '@/components/HeaderCustomer.vue'
import FooterCustomer from '@/components/FooterCustomer.vue'
import { axiosPrivate } from '@/api/axios';  // Assuming apiClient is set up for API requests

export default {
  name: 'WalletControl',
  components: {
    HeaderCustomer,
    FooterCustomer,
  },
  data() {
    return {
      walletBalance: 0, // Initially 0, will load from API
      addAmount: 0,
      transferAmount: 0,
      recipient: '',
      transactions: [] // To store the transaction history
    }
  },
  created() {
    this.loadWalletBalance();
    // this.loadTransactionHistory();
  },
  methods: {
    async loadWalletBalance() {
      try {
        const response = await axiosPrivate.get('/api/wallet/balance');
        this.walletBalance = response.data.data; // Assume response contains balance
      } catch (error) {
        alert('Failed to load wallet balance.');
        console.error(error);
      }
    },
    async loadTransactionHistory() {
      try {
        const response = await axiosPrivate.get('/api/vnpay/create-payment');
        this.transactions = response.data.transactions; // Assume response contains transaction array
      } catch (error) {
        alert('Failed to load transaction history.');
        console.error(error);
      }
    },
    async addFunds() {
      if (this.addAmount > 0) {
        try {
          await axiosPrivate.post('/api/vnpay/create-payment', {
            amount: this.addAmount
          }).then((response) => {
            console.log( response.data)
            var paymentUrl = response.data.data.paymentUrl; // Receive response from .NET backend
            console.log(paymentUrl);

            window.location.href = paymentUrl;
            this.loading = false;
          })
          .catch((error) => {
            console.error("Error while validating payment:", error);
            this.responseCode = '99'; // Handle error case
            this.loading = false;
          });
          // alert('Funds added successfully!');
        } catch (error) {
          // alert('Failed to add funds.');
          console.error(error);
        }
      } else {
        // alert('Please enter a valid amount to add.');
      }
    },
    async transferFunds() {
      if (this.transferAmount > 0 && this.recipient) {
        if (this.transferAmount <= this.walletBalance) {
          try {
            const response = await axiosPrivate.post('/api/wallet/transfer', {
              amount: this.transferAmount,
              recipient: this.recipient
            });
            this.walletBalance -= parseFloat(this.transferAmount); // Update local balance
            this.transactions.push({
              id: response.data.transactionId, // Assume response contains transactionId
              type: 'Transfer Funds',
              amount: this.transferAmount,
              date: new Date(),
              recipient: this.recipient
            });
            this.transferAmount = 0;
            this.recipient = '';
            alert('Funds transferred successfully!');
          } catch (error) {
            alert('Failed to transfer funds.');
            console.error(error);
          }
        } else {
          alert('Insufficient funds for this transfer.');
        }
      } else {
        alert('Please fill out all fields correctly.');
      }
    }
  }
}
</script>

<style scoped>
.content {
    min-height: 60vh; 
    padding: 20px;
    border-radius: 10px;
}

.header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
}

.header h2 {
    font-weight: bold;
    font-size: 40px;
    margin-right: 20px;
    flex-grow: 1;
}

.header .search-btn {
    background-color: #8B0000;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    display: flex;
    align-items: center;
}
.search-btn .fa-search {
    margin-right: 10px;
    color: red;
}

.search-btn:hover {
    background-color: #A52A2A;
}

.competition-list {
    width: 100%;
    border-collapse: collapse;
    border-radius: 10px;
}

.competition-list .title {
    background-color: #d3d3d3;
    font-weight: bold;
    font-size: 1.5em;
    border-radius: 10px;
}

.competition-list th, .competition-list td {
    border: 0;
    padding: 8px;
    text-align: center;
    vertical-align: middle;
    border-radius: 10px;
}

.competition-list tr {
    border-bottom: 1px solid #ddd;
    border-radius: 10px;
}

.icon-wrapper {
    position: relative;
}

.options {
    display: flex;
    flex-direction: column;
    position: absolute;
    background-color: white;
    border: 1px solid #ddd;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    padding: 10px;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    min-width: 150px;
    z-index: 5;
}

.options div {
    padding: 10px;
    cursor: pointer;
    white-space: nowrap;
}

.options div:hover {
    background-color: #f0f0f0;
}
</style>

