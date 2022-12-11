import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AuthProvider from './store/AuthProvider';
import AddProductPage from './pages/AddProductPage';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import SigninPage from './pages/SigninPage';
import SignupPage from './pages/SignupPage';
import Layout from './UI/layout/Layout';
import ProdutPage from './pages/ProdutPage';
import Adminview from './pages/AdminView';
import ViewUsersPage from './pages/ViewUsersPage';
import PendingPage from './pages/ViewPropertiesPage';
import ViewPropertiesUpdatedApprroved from './pages/ViewPropertiesUpdatedApproved';
import ViewPropertiesUpdatedDeleted from './pages/ViewPropertiesUpdatedDeleted';
import ViewUsersUpdatedDeleted from './pages/ViewUsersUpdatedDeleted';
import ViewMine from './pages/ViewMine';
import DeleteMyProp from './pages/DeleteMyProp';

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/properties/all" element={<ProductsPage />} />
            <Route path="/products/:productId" element={<ProdutPage />} />
            <Route path="/products/add" element={<AddProductPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/signin" element={<SigninPage />} />
            <Route path="/admin" element={<Adminview/>} />
            <Route path="/viewusers" element={<ViewUsersPage/>}/>
            <Route path="/viewmine/:userId" element={<ViewMine/>}/> 
            <Route path="/viewproperties" element={<PendingPage/>}/>
            <Route path="/Viewpropertiesup/:id" element={<ViewPropertiesUpdatedApprroved/>}/>
            <Route path="/Viewpropertiesdel/:id" element={<ViewPropertiesUpdatedDeleted/>}/>
            <Route path="/Viewusersdel/:id" element={<ViewUsersUpdatedDeleted/>}/>
            <Route path="/Deleted/:id" element= {<DeleteMyProp/>}/>
          </Routes>
        </Layout>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
