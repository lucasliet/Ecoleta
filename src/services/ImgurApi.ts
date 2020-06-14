import { Client } from '@rmp135/imgur'

const api = new Client({ client_id: process.env.IMGUR_KEY });
export default api; 