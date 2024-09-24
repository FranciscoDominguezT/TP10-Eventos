import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Header from './Header';
import Footer from './Footer';
import { useAuth } from '../context/AuthContext';

export default function Layout({ children }) {
  const router = useRouter();
  const { isLoggedIn } = useAuth();

  useEffect(() => {
    if (!isLoggedIn && router.pathname !== '/login' && router.pathname !== '/register') {
      router.push('/login');
    }
  }, [isLoggedIn, router]);

  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}