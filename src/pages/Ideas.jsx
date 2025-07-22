import React, { useState, useEffect } from 'react';
import axios from 'axios';
import HeroBanner from '../components/HeroBanner';
import styles from './Ideas.module.css';

const Ideas = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [perPage, setPerPage] = useState(10);
  const [sortBy, setSortBy] = useState('newest');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const params = {
          'page[number]': currentPage,
          'page[size]': perPage,
          'append[]': ['small_image', 'medium_image'],
          sort: sortBy === 'newest' ? '-published_at' : 'published_at',
        };
        const response = await axios.get('/api/ideas', { params });
        setPosts(response.data.data);
        setTotalPages(response.data.meta.last_page);
      } catch (error) {
        console.error("Gagal mengambil data ideas:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [currentPage, perPage, sortBy]);

  const handlePerPageChange = (e) => {
    setPerPage(Number(e.target.value));
    setCurrentPage(1);
  };

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
    setCurrentPage(1);
  };

  return (
    <>
      <HeroBanner />
      
      <div className={styles.controls}>
        {!loading && <div>Showing {posts.length} of many ideas</div>}
        <div className={styles.filterControls}>
          <div>
            Show per page:
            <select value={perPage} onChange={handlePerPageChange} disabled={loading}>
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="50">50</option>
            </select>
          </div>
          <div>
            Sort by:
            <select value={sortBy} onChange={handleSortChange} disabled={loading}>
              <option value="newest">Newest</option>
              <option value="oldest">Oldest</option>
            </select>
          </div>
        </div>
      </div>

      {loading ? (
        <div style={{ textAlign: 'center', padding: '50px', fontSize: '18px' }}>Loading ideas...</div>
      ) : (
        <div className={styles.grid}>
          {posts.map(post => (
            <div key={post.id} className={styles.card}>
            <img 
                // Ganti baris 'src' ini
                src={`https://picsum.photos/seed/${post.id}/600/400`} 
                alt={post.title} 
                className={styles.cardImage}
                />
              <div className={styles.cardMeta}>
                <span className={styles.date}>
                  {new Date(post.published_at).toLocaleDateString('id-ID', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </span>
                <h3 className={styles.cardTitle}>{post.title}</h3>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className={styles.pagination}>
        {[...Array(totalPages).keys()].map(num => (
          <button
            key={num + 1}
            onClick={() => setCurrentPage(num + 1)}
            className={currentPage === num + 1 ? styles.active : ''}
            disabled={loading}
          >
            {num + 1}
          </button>
        ))}
      </div>
    </>
  );
};

export default Ideas;