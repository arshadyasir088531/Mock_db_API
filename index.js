const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;


const customers = [
  {
    cust_id: "CUST001",
    customer_name: "Ajay",
    phone_number: "+1234567890",
    loan_amt: 100000,
    due_date: "2026-07-15",
    loan_amt_left: 35000,
    curr_emi: 5000
  },
  {
    cust_id: "CUST002",
    customer_name: "Rahul",
    phone_number: "+2345678911",
    loan_amt: 75000,
    due_date: "2026-06-28",
    loan_amt_left: 22000,
    curr_emi: 4200
  },
  {
    cust_id: "CUST003",
    customer_name: "Atul",
    phone_number: "+3456789012",
    loan_amt: 15000,
    due_date: "2026-06-20",
    loan_amt_left: 8000,
    curr_emi: 1500
  },
  {
    cust_id: "CUST004",
    customer_name: "Risha",
    phone_number: "+4567890123",
    loan_amt: 120000,
    due_date: "2026-07-05",
    loan_amt_left: 67000,
    curr_emi: 7800
  },
  {
    cust_id: "CUST005",
    customer_name: "Arshad",
    phone_number: "+5678901234",
    loan_amt: 45000,
    due_date: "2026-06-25",
    loan_amt_left: 12000,
    curr_emi: 3200
  },
  {
    cust_id: "CUST006",
    customer_name: "Manika",
    phone_number: "+6789012345",
    loan_amt: 90000,
    due_date: "2026-07-10",
    loan_amt_left: 48000,
    curr_emi: 5600
  }
];
app.use(express.json());

// Sample loan data endpoint
app.get('/loan', (req, res) => {
    res.json(customers);
});

app.get('/loan/:cust_id', (req, res) => {
    const cust_id = req.params.cust_id;
    const customer = customers.find(c => c.cust_id === cust_id);
    if (customer) {
        res.json(customer);
    }
    else {
        res.status(404).json({ error: 'Customer not found' });
    }
});

app.post("/customer", (req, res) => {
  const { phone_numbers } = req.body;

  const customer = customers.find(c => c.phone_number === phone_numbers);

  if (customer) {
    res.json(customer);
  } else {
    res.status(404).json({ error: 'Customer not found' });
  }
});

// Health check
app.get('/', (req, res) => {
  res.json({ status: 'ok', message: 'Loan API is running' });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
