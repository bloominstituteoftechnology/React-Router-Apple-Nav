const mockChildren = ['Thing One', 'Thing Two', 'Thing Three'];
const mockData = {};
const navItems = ['Mac', 'iPad','iPhone','Watch','TV','Music','Support'];

navItems.forEach((item, i) => {
  mockData[item] = mockChildren.map((child) => `${child} for ${item}`);
})

export default mockData;