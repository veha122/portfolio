import { useState, useEffect } from 'react';
import { Search } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  stock: number;
  status: 'ក្នុងស្តុក' | 'ស្តុកទាប' | 'អស់ពីស្តុក';
  added: string;
}

const fakeProducts: Product[] = [
  { id: 'P-1001', name: 'Wireless Earbuds Pro', category: 'Audio', price: 89.99, stock: 142, status: 'ក្នុងស្តុក', added: '2025-02-15' },
  { id: 'P-1002', name: 'Smart Watch Series 8', category: 'Wearables', price: 249.00, stock: 38, status: 'ស្តុកទាប', added: '2025-03-02' },
  { id: 'P-1003', name: '4K Action Camera', category: 'Cameras', price: 179.50, stock: 0, status: 'អស់ពីស្តុក', added: '2025-01-28' },
  { id: 'P-1004', name: 'Mechanical Keyboard RGB', category: 'Peripherals', price: 129.99, stock: 215, status: 'ក្នុងស្តុក', added: '2025-04-10' },
  { id: 'P-1005', name: 'Portable Power Bank 20000mAh', category: 'Accessories', price: 45.00, stock: 87, status: 'ក្នុងស្តុក', added: '2025-03-19' },
  { id: 'P-1006', name: 'USB-C Hub 8-in-1', category: 'Accessories', price: 34.99, stock: 5, status: 'ស្តុកទាប', added: '2025-04-05' },
  { id: 'P-1007', name: 'Gaming Mouse Wireless', category: 'Peripherals', price: 59.99, stock: 0, status: 'អស់ពីស្តុក', added: '2025-02-28' },
];

const ProductRowPlaceholder = () => (
  <tr className="animate-pulse">
    <td className="p-4"><div className="h-4 bg-gray-300 dark:bg-gray-700 rounded"></div></td>
    <td className="p-4"><div className="h-4 bg-gray-300 dark:bg-gray-700 rounded"></div></td>
    <td className="p-4"><div className="h-4 bg-gray-300 dark:bg-gray-700 rounded"></div></td>
    <td className="p-4"><div className="h-4 bg-gray-300 dark:bg-gray-700 rounded"></div></td>
    <td className="p-4"><div className="h-4 bg-gray-300 dark:bg-gray-700 rounded"></div></td>
    <td className="p-4"><div className="h-4 bg-gray-300 dark:bg-gray-700 rounded"></div></td>
    <td className="p-4"><div className="h-4 bg-gray-300 dark:bg-gray-700 rounded"></div></td>
  </tr>
);

export default function ProductDashboard() {
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setProducts(fakeProducts);
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const StatusBadge = ({ status }: { status: Product['status'] }) => {
    const baseClasses = "px-2 py-1 text-xs font-semibold rounded-full";
    const statusClasses = {
      'ក្នុងស្តុក': 'bg-green-100 text-green-800 dark:bg-green-700 dark:text-green-100',
      'ស្តុកទាប': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-700 dark:text-yellow-100',
      'អស់ពីស្តុក': 'bg-red-100 text-red-800 dark:bg-red-700 dark:text-red-100',
    };
    return <span className={`${baseClasses} ${statusClasses[status]}`}>{status}</span>;
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 p-8 font-khmer">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">បញ្ជីសារពើភ័ណ្ឌផលិតផល</h1>

        <div className="mb-6 flex justify-between items-center">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="ស្វែងរកផលិតផលតាមឈ្មោះ លេខសម្គាល់ ឬប្រភេទ..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 w-96 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition font-khmer"
            />
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 dark:bg-gray-700">
                <tr>
                  {['លេខសម្គាល់ផលិតផល', 'ឈ្មោះ', 'ប្រភេទ', 'តម្លៃ', 'ស្តុក', 'ស្ថានភាព', 'បានបន្ថែម'].map(header => (
                    <th key={header} className="p-4 text-left text-sm font-semibold text-gray-600 dark:text-gray-300 uppercase">
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  Array.from({ length: 7 }).map((_, i) => <ProductRowPlaceholder key={i} />)
                ) : filteredProducts.length > 0 ? (
                  filteredProducts.map((product) => (
                    <tr key={product.id} className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                      <td className="p-4 font-mono text-sm">{product.id}</td>
                      <td className="p-4 font-semibold">{product.name}</td>
                      <td className="p-4">{product.category}</td>
                      <td className="p-4">${product.price.toFixed(2)}</td>
                      <td className="p-4">{product.stock}</td>
                      <td className="p-4"><StatusBadge status={product.status} /></td>
                      <td className="p-4 text-sm text-gray-500">{product.added}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={7} className="text-center py-16">
                      <div className="flex flex-col items-center">
                        <Search size={48} className="text-gray-400 mb-4" />
                        <h3 className="text-xl font-semibold mb-2">រកមិនឃើញផលិតផលទេ។</h3>
                        <p className="text-gray-500">ការស្វែងរករបស់អ្នកសម្រាប់ "{searchTerm}" មិនត្រូវគ្នានឹងផលិតផលណាមួយឡើយ។</p>
                      </div>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
