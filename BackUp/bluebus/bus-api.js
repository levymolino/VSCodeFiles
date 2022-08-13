const express = require("express");
const cors = require("cors");

const app = express();
const port = 1300;

let availablebus = [
  {
    id: 1,
    location: "Manila City",
    destination: "Vigan City",
    date: "2022-07-27T01:03:25Z",
    fare: 109.95,
    departure: "2:15 A.M",
    image: "https://us.123rf.com/450wm/sodesignby/sodesignby1609/sodesignby160900016/64134480-travel-bus-illustration-on-light-background.jpg?ver=6",
    rating: {
      rate: 3.9,
      count: 120,
    },
  },
  {
    id: 2,
    location: "Makati City",
    destination: "Iloilo City",
    date: "2022-08-02T01:03:25Z",
    fare: 22.3,
    departure: "2:15 A.M",
    image:
    "https://us.123rf.com/450wm/sodesignby/sodesignby1609/sodesignby160900016/64134480-travel-bus-illustration-on-light-background.jpg?ver=6",
    rating: {
      rate: 4.1,
      count: 259,
    },
  },
  {
    id: 3,
    location: "Pasig City",
    destination: "Dumaguete City",
    date: "2022-08-2T01:03:25Z",
    fare: 55.99,
    departure: "2:15 A.M",
    image: "https://us.123rf.com/450wm/sodesignby/sodesignby1609/sodesignby160900016/64134480-travel-bus-illustration-on-light-background.jpg?ver=6",
    rating: {
      rate: 4.7,
      count: 500,
    },
  },
  {
    id: 4,
    location: "Quezon City",
    destination: "Dapitan City",
    date: "2022-07-30T01:03:25Z",
    fare: 15.99,
    departure: "2:15 A.M",
    image: "https://us.123rf.com/450wm/sodesignby/sodesignby1609/sodesignby160900016/64134480-travel-bus-illustration-on-light-background.jpg?ver=6",
    rating: {
      rate: 2.1,
      count: 430,
    },
  },
  {
    id: 5,
    location: "Malabon City",
    destination: "Butuan City",
    date: "2022-07-28T01:03:25Z",
    fare: 695,
    departure: "2:15 A.M",
    image: "https://us.123rf.com/450wm/sodesignby/sodesignby1609/sodesignby160900016/64134480-travel-bus-illustration-on-light-background.jpg?ver=6",
    rating: {
      rate: 4.6,
      count: 400,
    },
  },
  {
    id: 6,
    location: "Las Pinas City",
    destination: "Iligan City",
    date: "2022-07-28T01:03:25Z",
    fare: 168,
    departure: "2:15 A.M",
    image: "https://us.123rf.com/450wm/sodesignby/sodesignby1609/sodesignby160900016/64134480-travel-bus-illustration-on-light-background.jpg?ver=6",
    rating: {
      rate: 3.9,
      count: 70,
    },
  },
  {
    id: 7,
    location: "San Juan City",
    destination: "Digos City",
    date: "2022-07-29T01:03:25Z",
    fare: 9.99,
    departure: "2:15 A.M",
    image: "https://us.123rf.com/450wm/sodesignby/sodesignby1609/sodesignby160900016/64134480-travel-bus-illustration-on-light-background.jpg?ver=6",
    rating: {
      rate: 3,
      count: 400,
    },
  },
  {
    id: 8,
    location: "Navotas City",
    destination: "Antipolo City",
    date: "2022-07-30T01:03:25Z",
    fare: 10.99,
    departure: "2:15 A.M",
    image: "https://us.123rf.com/450wm/sodesignby/sodesignby1609/sodesignby160900016/64134480-travel-bus-illustration-on-light-background.jpg?ver=6",
    rating: {
      rate: 1.9,
      count: 100,
    },
  },
  {
    id: 9,
    location: "Pasay City ",
    destination: "Calamba City",
    date: "2022-07-27T01:03:25Z",
    fare: 64,
    departure: "2:15 A.M",
    image: "https://us.123rf.com/450wm/sodesignby/sodesignby1609/sodesignby160900016/64134480-travel-bus-illustration-on-light-background.jpg?ver=6",
    rating: {
      rate: 3.3,
      count: 203,
    },
  },
  {
    id: 10,
    location: "Paranaque City",
    destination: "Tarlac City",
    date: "2022-07-27T01:03:25Z",
    fare: 109,
    departure: "2:15 A.M",
    image: "https://us.123rf.com/450wm/sodesignby/sodesignby1609/sodesignby160900016/64134480-travel-bus-illustration-on-light-background.jpg?ver=6",
    rating: {
      rate: 2.9,
      count: 470,
    },
  },
  {
    id: 11,
    location: "Mandaluyong City",
    destination: "Vigan City",
    date: "2022-08-01T01:03:25Z",
    fare: 109,
    departure: "2:15 A.M",
    image: "https://us.123rf.com/450wm/sodesignby/sodesignby1609/sodesignby160900016/64134480-travel-bus-illustration-on-light-background.jpg?ver=6",
    rating: {
      rate: 4.8,
      count: 319,
    },
  },
  {
    id: 12,
    location: "Valenzuela City",
    destination: "Alaminos City",
    date: "2022-07-29T01:03:25Z",
    fare: 114,
    departure: "2:15 A.M",
    image: "https://us.123rf.com/450wm/sodesignby/sodesignby1609/sodesignby160900016/64134480-travel-bus-illustration-on-light-background.jpg?ver=6",
    rating: {
      rate: 4.8,
      count: 400,
    },
  },
  {
    id: 13,
    location: "Muntinlupa City",
    destination: "Vigan City",
    date: "2022-07-29T01:03:25Z",
    fare: 599,
    departure: "2:15 A.M",
    image: "https://us.123rf.com/450wm/sodesignby/sodesignby1609/sodesignby160900016/64134480-travel-bus-illustration-on-light-background.jpg?ver=6",
    rating: {
      rate: 2.9,
      count: 250,
    },
  },
  {
    id: 14,
    location: "Caloocan City",
    destination: "San Fernando City",
    date: "2022-07-28T01:03:25Z",
    fare: 999.99,
    departure: "2:15 A.M",
    image: "https://us.123rf.com/450wm/sodesignby/sodesignby1609/sodesignby160900016/64134480-travel-bus-illustration-on-light-background.jpg?ver=6",
    rating: {
      rate: 2.2,
      count: 140,
    },
  },
  {
    id: 15,
    location: "Marikina City",
    destination: "Tagum City",
    date: "2022-07-29T01:03:25Z",
    fare: 56.99,
    departure: "2:15 A.M",
    image: "https://us.123rf.com/450wm/sodesignby/sodesignby1609/sodesignby160900016/64134480-travel-bus-illustration-on-light-background.jpg?ver=6",
    rating: {
      rate: 2.6,
      count: 235,
    },
  },
  {
    id: 16,
    location: "Pateros City",
    destination: "Malolos City",
    date: "2022-07-30T01:03:25Z",
    fare: 29.95,
    departure: "2:15 A.M",
    image: "https://us.123rf.com/450wm/sodesignby/sodesignby1609/sodesignby160900016/64134480-travel-bus-illustration-on-light-background.jpg?ver=6",
    rating: {
      rate: 2.9,
      count: 340,
    },
  },
  {
    id: 17,
    location: "Taguig City",
    destination: "Quezon City",
    date: "2022-08-02T01:03:25Z",
    fare: 39.99,
    departure: "2:15 A.M",
    image: "https://us.123rf.com/450wm/sodesignby/sodesignby1609/sodesignby160900016/64134480-travel-bus-illustration-on-light-background.jpg?ver=6",
    rating: {
      rate: 3.8,
      count: 679,
    },
  },
  {
    id: 18,
    location: "Malolos City",
    destination: "Manila City",
    date: "2022-08-03T01:03:25Z",
    fare: 9.85,
    departure: "2:15 A.M",
    image: "https://us.123rf.com/450wm/sodesignby/sodesignby1609/sodesignby160900016/64134480-travel-bus-illustration-on-light-background.jpg?ver=6",
    rating: {
      rate: 4.7,
      count: 130,
    },
  },
  {
    id: 19,
    location: "Cebu City",
    destination: "Dumaguete City",
    date: "2022-08-02T01:03:25Z",
    fare: 7.95,
    departure: "2:15 A.M",
    image: "https://us.123rf.com/450wm/sodesignby/sodesignby1609/sodesignby160900016/64134480-travel-bus-illustration-on-light-background.jpg?ver=6",
    rating: {
      rate: 4.5,
      count: 146,
    },
  },
  {
    id: 20,
    location: "Cavite City",
    destination: "Calamba City",
    date: "2022-08-02T01:03:25Z",
    fare: 12.99,
    departure: "2:15 A.M",
    image: "https://us.123rf.com/450wm/sodesignby/sodesignby1609/sodesignby160900016/64134480-travel-bus-illustration-on-light-background.jpg?ver=6",
    rating: {
      rate: 3.6,
      count: 145,
    },
  },
];

var allowCrossDomain = function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-COntrol-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
};

app.use(cors());

app.use(allowCrossDomain);

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/bus", (req, res) => {
  res.json(availablebus);
});

app.listen(port, () => console.log(`bus API app listening on port ${port}!`));

app.get("/bus/:busId", (req, res) => {
  // reading isbn from the URL
  const busId = req.params.busId;

  // searching books for the isbn
  for (let bus of availablebus) {
    if (bus.busId === busId) {
      res.json(bus);
      return;
    }
  }

  // sending 404 when not found something is a good practice
  res.status(404).send("bus not found");
});

app.post("/bus", (req, res) => {
  const bus = req.body;
  availablebus.push(bus);
  res.send("bus is added to the database");
});

app.put("/bus/:isbn", (req, res) => {
  // reading isbn from the URL
  const busId = req.params.busId;
  const newbus = req.body;

  // remove item from the books array
  for (let i = 0; i < availablebus.length; i++) {
    let bus = availablebus[i];

    if (bus.busId === busId) {
      availablebus[i] = newbus;
    }
  }

  // sending 404 when not found something is a good practice
  res.send("bus is edited");
});

app.delete("/bus/:busId", (req, res) => {
  // reading isbn from the URL
  const busId = req.params.busId;
  const newbus = req.body;

  // remove item from the books array
  for (let i = 0; i < availablebus.length; i++) {
    let bus = availablebus[i];

    if (bus.busId === busId) {
      availablebus[i] = newbus;
    }
  }

  // sending 404 when not found something is a good practice
  res.send("bus is deleted");
});

app.delete("/bus/:isdn", (req, res) => {
  const busId = req.params.busId;

  bus = availablebus.filter((i) => {
    if (i.busId !== busId) {
      return true;
    }

    return false;
  });
  res.send("bus is deleted");
});
