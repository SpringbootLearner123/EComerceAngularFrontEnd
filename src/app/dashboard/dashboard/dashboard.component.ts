import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

   // Product list (in-memory, for now)
  products = [
    { id: 1, name: 'Apple', price: 1.2, category: 'Fruit' },
    { id: 2, name: 'Milk', price: 0.99, category: 'Dairy' }
  ];

  // Form input (bound via ngModel)
  newProduct:any = {
    name: '',
    price: null,
    category: ''
  };

  // Search term for filtering
  searchTerm = '';

  // Add product (called when form submits)
  addProduct() {
    const id = this.products.length > 0
      ? Math.max(...this.products.map(p => p.id)) + 1
      : 1;

    this.products.push({ id, ...this.newProduct });

    // Reset form
    this.newProduct = { name: '', price: null, category: '' };

    // Close modal
    const modal = document.getElementById('addProductModal');
    if (modal) (window as any).bootstrap.Modal.getInstance(modal).hide();
  }

  // Delete product by id
  deleteProduct(id: number) {
    this.products = this.products.filter(p => p.id !== id);
  }

  // Simple edit alert
  editProduct(product: any) {
    alert(`Edit not implemented yet for: ${product.name}`);
  }

  // Filter products by search term
  filteredProducts() {
    return this.products.filter(product =>
      product.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}
