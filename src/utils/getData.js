/*
 * Mocks a data retrieval API request.
 */
export default function getData(isBigData) {
  return new Promise(resolve => {
    isBigData ? resolve(bigMockData) : resolve(mockData);
  });
};

const mockData = {
  data: [
    "John Smith",
    "Emily Davis",
    "Michael Johnson",
    "Sarah Wilson",
    "David Miller",
    "Jessica Brown",
    "William Jones",
    "Olivia Taylor",
    "James Anderson",
    "Emma Harris",
    "Robert White",
    "Sophia Martin",
    "Daniel Clark",
    "Ava Walker",
    "Matthew Moore",
    "Grace Evans",
    "Christopher Davis",
    "Lily Robinson",
    "Andrew Thomas",
    "Chloe Wilson",
  ],
};

const bigMockData = {
  data: new Array(500).fill(mockData.data).flat(),
};
