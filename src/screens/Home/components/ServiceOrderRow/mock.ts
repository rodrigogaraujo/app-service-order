export const user = {
  id: 1,
  name: 'Snow',
  email: 'Jon',
  phone: '35',
  active: 1,
  _id: '123',
  type: 1,
  password: '123',
}
export const serviceOrder = {
  customer: { ...user, phone_number: '', document: '', address: {
    street: 'Av Maria Concebida Costa'
  } },
  customer_id: user._id,
  user,
  user_id: user._id,
  description: 'Sem internet',
  priority: 2,
  status: 2,
}
