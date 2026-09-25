import { useState } from 'react';
import { Search } from 'lucide-react';
export default function test() {
  interface Product {
    id: string;
    name: string;
    category: string;
    price: number;
    stock: number;
    status: 'In Stock' | 'Low Stock' | 'Out of Stock';
    added: string;
  }
  const fakeProducts: Product[] = [
    { id: 'P-1001', name: 'Wireless Earbuds Pro', category: 'Audio', price: 89.99, stock: 142, status: 'In Stock', added: '2025-02-15' },
    { id: 'P-1002', name: 'Smart Watch Series 8', category: 'Wearables', price: 249.00, stock: 38, status: 'Low Stock', added: '2025-03-02' },
    { id: 'P-1003', name: '4K Action Camera', category: 'Cameras', price: 179.50, stock: 0, status: 'Out of Stock', added: '2025-01-28' },
    { id: 'P-1004', name: 'Mechanical Keyboard RGB', category: 'Peripherals', price: 129.99, stock: 215, status: 'In Stock', added: '2025-04-10' },
    { id: 'P-1005', name: 'Portable Power Bank 20000mAh', category: 'Accessories', price: 45.00, stock: 87, status: 'In Stock', added: '2025-03-19' },
    { id: 'P-1006', name: 'USB-C Hub 8-in-1', category: 'Accessories', price: 34.99, stock: 5, status: 'Low Stock', added: '2025-04-05' },
    { id: 'P-1007', name: 'Gaming Mouse Wireless', category: 'Peripherals', price: 59.99, stock: 0, status: 'Out of Stock', added: '2025-02-28' },
  ];
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = fakeProducts.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>

<div className="p-4 border rounded-lg w-64">
      {/* Image */}
      <div className="h-32 mb-4 rounded bg-gradient-to-r from-black via-white to-black bg-[length:200%_100%] animate-shimmer" />

      {/* Text lines */}
      <div className="h-4 mb-2 rounded bg-gradient-to-r from-black via-white to-black bg-[length:200%_100%] animate-shimmer" />
      <div className="h-4 w-1/2 rounded bg-gradient-to-r from-black via-white to-black bg-[length:200%_100%] animate-shimmer" />
    </div>

      <div className="min-h-screen bg-white dark:bg-gray-800 font-khmer">
        {/* Hero / Main Title Section */}
        <section className="bg-white dark:bg-gray-800 text-white md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-wide mb-6">
              រឿងនិទានខ្មែរ
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
              កុម្ម៉ង់ធីតាត់ថ្លៃសាស្រ្តាថែយើងខ្ញុំសម្រិតសម្រាងយកចេញពីសៀវភៅរឿងនិទាន
            </p>
          </div>
        </section>

        {/* Main Bio / Education & Experience Section */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto space-y-12">
              {/* បទពិសោធន៍ការងារ / Skills */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-10 border border-gray-200 dark:border-gray-700">
                <h2 className="text-3xl font-bold text-indigo-700 dark:text-indigo-400 mb-6 text-center md:text-left">
                  បទពិសោធន៍ការងារ និងជំនាញ
                </h2>
                <div className="prose prose-lg dark:prose-invert max-w-none leading-relaxed text-gray-800 dark:text-gray-200">
                  <p>
                    ខ្ញុំបានសិក្សាថ្នាក់បរិញ្ញាបត្រ គ្រប់គ្រងព័ត៌មាន (RUPP) និងមានបទពិសោធន៍ក្នុងការអភិវឌ្ឍន៍វេប និងម៉ូប៊ីល។
                  </p>
                  <p className="mt-4">
                    ជំនាញសំខាន់ៗ៖
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mt-3">
                    <li>អភិវឌ្ឍន៍វេបដោយប្រើ Laravel (Backend), Dart & Flutter (Mobile)</li>
                    <li>ប្រព័ន្ធគ្រប់គ្រងព័ត៌មាន និងការអភិរក្សទិន្នន័យ (Conservation)</li>
                    <li>ប្រព័ន្ធបណ្តាញ និងកម្មវិធីធនាគារ (ឧ. PPBank ឬប្រព័ន្ធស្រដៀងគ្នា)</li>
                    <li>ប្រតិបត្តិការលើ server (Windows, Linux), DigitalOcean (Ubuntu), Microsoft 365</li>
                  </ul>
                </div>
              </div>

              {/* គោលបំណង / Objective */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-10 border border-gray-200 dark:border-gray-700">
                <h2 className="text-3xl font-bold text-indigo-700 dark:text-indigo-400 mb-6 text-center md:text-left">
                  គោលបំណង និងចំណង់ចំណូលចិត្ត
                </h2>
                <div className="prose prose-lg dark:prose-invert max-w-none leading-relaxed text-gray-800 dark:text-gray-200">
                  <p>
                    ខ្ញុំចង់បន្តអភិវឌ្ឍជំនាញ IT ទាំង Backend និង Mobile Development ដើម្បីបង្កើតផលិតផលដែលមានប្រយោជន៍សម្រាប់សហគមន៍ខ្មែរ។
                  </p>
                  <p className="mt-4">
                    ចាប់អារម្មណ៍ជាពិសេសលើកម្មវិធីធនាគារ កម្មវិធីអប់រំ និងកម្មវិធីដែលជួយអភិរក្សវប្បធម៌ខ្មែរ (ដូចជាការបង្កើតវេបសាយរឿងនិទានខ្មែរ)។
                  </p>
                  <p className="mt-4 font-medium">
                    សូមទាក់ទងមកខ្ញុំបើមានឱកាសសហការឬការងារសមស្រប!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer / Call to Action */}
        <section className="bg-gray-900 text-gray-300 py-12 text-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-lg">
              © {new Date().getFullYear()} Som Veha • រក្សាសិទ្ធិគ្រប់យ៉ាង
            </p>
            <p className="mt-3 text-sm opacity-80">
              Built with React & Tailwind CSS • សួស្តីពីភ្នំពេញ!
            </p>
          </div>
        </section>
      </div>


      {/* About Me Section */}
      <section id="about" className="py-20 bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
          <div className="bg-gray-900 p-8 rounded-lg shadow-lg">
            <p className="text-lg leading-relaxed">
              I'm a self-taught Full-Stack Developer with a strong passion for building beautiful and intuitive user interfaces. I enjoy turning complex problems into simple, elegant solutions. My journey in web development started with a deep curiosity for how things work on the internet, and it has since evolved into a career where I can build and create.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="bg-gray-900 rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">Project One</h3>
                <p className="text-gray-400 mb-4">A brief description of the project, highlighting the technologies used and its purpose.</p>
                <a href="#" className="text-green-400 hover:underline">View Project</a>
              </div>
            </div>
            {/* Project 2 */}
            <div className="bg-gray-900 rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">Project Two</h3>
                <p className="text-gray-400 mb-4">A brief description of the project, highlighting the technologies used and its purpose.</p>
                <a href="#" className="text-green-400 hover:underline">View Project</a>
              </div>
            </div>
            {/* Project 3 */}
            <div className="bg-gray-900 rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">Project Three</h3>
                <p className="text-gray-400 mb-4">A brief description of the project, highlighting the technologies used and its purpose.</p>
                <a href="#" className="text-green-400 hover:underline">View Project</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Contact Me</h2>
          <div className="max-w-xl mx-auto">
            <form className="bg-gray-800 p-8 rounded-lg shadow-lg">
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-400 mb-2">Name</label>
                <input type="text" id="name" className="w-full p-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:border-green-400" />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-400 mb-2">Email</label>
                <input type="email" id="email" className="w-full p-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:border-green-400" />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-400 mb-2">Message</label>
                <textarea id="message" rows={4} className="w-full p-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:border-green-400"></textarea>
              </div>
              <div className="text-center">
                <button type="submit" className="bg-green-500 text-white font-bold py-2 px-6 rounded hover:bg-green-600 transition duration-300">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>


      <div className="min-h-screen bg-gray-950 text-gray-100 p-4 md:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <h1 className="text-2xl md:text-3xl font-bold">Products</h1>

          <div className="relative w-full sm:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-gray-800 border border-gray-700 rounded-lg pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500/30"
            />
          </div>
        </div>

        {/* Table Container */}
        <div className="bg-[#0f1e1e] border border-[#2f2f2f] rounded-xl overflow-hidden shadow-sm">
          {/* Mobile cards view + Desktop table */}
          <div className="block lg:hidden">
            {filteredProducts.length === 0 ? (
              <div className="p-8 text-center text-gray-400">
                No products found
              </div>
            ) : (
              filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="p-4 border-b border-[#2f2f2f] last:border-b-0 hover:bg-gray-800/30 transition-colors"
                >
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <div className="font-medium">{product.name}</div>
                      <div className="text-xs text-gray-500">{product.id}</div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold">${product.price.toFixed(2)}</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-sm mt-3">
                    <div>
                      <span className="text-gray-400">Category:</span><br />
                      {product.category}
                    </div>
                    <div>
                      <span className="text-gray-400">Stock:</span><br />
                      {product.stock}
                    </div>
                    <div>
                      <span className="text-gray-400">Status:</span><br />
                      <span className={`inline-block px-2 py-0.5 text-xs rounded-full ${
                        product.status === 'In Stock' ? 'bg-emerald-900/40 text-emerald-400' :
                        product.status === 'Low Stock' ? 'bg-amber-900/40 text-amber-400' :
                        'bg-red-900/40 text-red-400'
                      }`}>
                        {product.status}
                      </span>
                    </div>
                    <div>
                      <span className="text-gray-400">Added:</span><br />
                      {product.added}
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Desktop Table */}
          <div className="hidden lg:block overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="bg-gray-900/70">
                <tr>
                  <th className="px-6 py-4 font-medium">ID</th>
                  <th className="px-6 py-4 font-medium">Product</th>
                  <th className="px-6 py-4 font-medium">Category</th>
                  <th className="px-6 py-4 font-medium">Price</th>
                  <th className="px-6 py-4 font-medium">Stock</th>
                  <th className="px-6 py-4 font-medium">Status</th>
                  <th className="px-6 py-4 font-medium">Added</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#2f2f2f]">
                {filteredProducts.length === 0 ? (
                  <tr>
                    <td colSpan={7} className="px-6 py-16 text-center text-gray-500">
                      No products found
                    </td>
                  </tr>
                ) : (
                  filteredProducts.map((product) => (
                    <tr key={product.id} className="hover:bg-gray-800/30 transition-colors">
                      <td className="px-6 py-4 font-mono text-gray-400">{product.id}</td>
                      <td className="px-6 py-4 font-medium">{product.name}</td>
                      <td className="px-6 py-4 text-gray-300">{product.category}</td>
                      <td className="px-6 py-4">${product.price.toFixed(2)}</td>
                      <td className="px-6 py-4">{product.stock}</td>
                      <td className="px-6 py-4">
                        <span className={`inline-block px-2.5 py-1 text-xs font-medium rounded-full ${
                          product.status === 'In Stock' ? 'bg-emerald-900/40 text-emerald-400' :
                          product.status === 'Low Stock' ? 'bg-amber-900/40 text-amber-400' :
                          'bg-red-900/40 text-red-400'
                        }`}>
                          {product.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-gray-400">{product.added}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Footer info */}
        <div className="mt-4 text-center text-xs text-gray-500">
          {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''} found
        </div>
      </div>
    </div>



    </div>
  );
}