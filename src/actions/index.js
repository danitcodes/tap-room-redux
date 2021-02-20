export const addKeg = (keg) => {
  const { name, brand, priceByKeg, alcoholContent, pintsLeft, id } = keg;
  return {
    type: 'ADD_KEG',
    name,
    brand,
    priceByKeg,
    alcoholContent,
    pintsLeft,
    id
  }
}

export const toggleForm = () => ({
  type: 'TOGGLE_FORM'
});

export const deleteKeg = id => ({
  type: 'DELETE_KEG',
  id
});