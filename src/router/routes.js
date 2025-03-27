import HelloWorld from 'components/HelloWorld.vue'
import ProductsPage from 'pages/ProductPage.vue'
import ProductForm from 'src/components/ProductForm.vue'

const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'hello', component: HelloWorld }, // Fixed the path for "/hello"
      { path: 'products', component: ProductsPage },
      { path: 'add', component: ProductForm },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
]

export default routes
