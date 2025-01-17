// Product Schema
export const product={
    name: 'product',
    type: 'document',
    fields: [
      { name: 'name', type: 'string', title: 'Product Name' },
      { name: 'price', type: 'number', title: 'Price' },
      { name: 'stock', type: 'number', title: 'Stock Level' },
      { name: 'imageUrl', type: 'url', title: 'Image URL' },
      { name: 'category', type: 'reference', to: [{ type: 'category' }], title: 'Category' },
      { name: 'description', type: 'text', title: 'Description' }
    ]
  };


// Customer Schema
  export const customer = {
    name: 'customer',
    type: 'document',
    fields: [
      { name: 'name', type: 'string', title: 'Customer Name' },
      { name: 'email', type: 'string', title: 'Email' },
      { name: 'phone', type: 'string', title: 'Phone Number' },
      { name: 'address', type: 'string', title: 'Address' }
    ]
  };


// Order Schema

export const order = {
    name: 'order',
    type: 'document',
    fields: [
      { name: 'customerId', type: 'reference', to: [{ type: 'customer' }], title: 'Customer' },
      { name: 'items', type: 'array', of: [{ type: 'reference', to: [{ type: 'product' }] }], title: 'Order Items' },
      { name: 'status', type: 'string', title: 'Order Status' },
      { name: 'totalAmount', type: 'number', title: 'Total Amount' }
    ]
  };



// Shipment Schema

export const shipment = {
    name: 'shipment',
    type: 'document',
    fields: [
      { name: 'orderId', type: 'reference', to: [{ type: 'order' }], title: 'Order' },
      { name: 'status', type: 'string', title: 'Shipment Status' },
      { name: 'currentLocation', type: 'string', title: 'Current Location' },
      { name: 'eta', type: 'string', title: 'Estimated Time of Arrival' }
    ]
  };



// Category Schema 
export default {
    name: 'category',
    type: 'document',
    fields: [
      { name: 'name', type: 'string', title: 'Category Name' },
      { name: 'description', type: 'text', title: 'Description' }
    ]
  };