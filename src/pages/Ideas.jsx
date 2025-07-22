import React, { useState, useEffect } from 'react';
import axios from 'axios';
import HeroBanner from '../components/HeroBanner';
import bannerImage from '../assets/banner.jpg';
import styles from './Ideas.module.css';

// Helper function untuk membuat rentang pagination
const generatePagination = (currentPage, totalPages, siblingCount = 1) => {
  const totalPageNumbers = siblingCount + 5;

  if (totalPageNumbers >= totalPages) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
  const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPages);

  const shouldShowLeftDots = leftSiblingIndex > 2;
  const shouldShowRightDots = rightSiblingIndex < totalPages - 2;

  const firstPageIndex = 1;
  const lastPageIndex = totalPages;

  if (!shouldShowLeftDots && shouldShowRightDots) {
    let leftItemCount = 3 + 2 * siblingCount;
    let leftRange = Array.from({ length: leftItemCount }, (_, i) => i + 1);
    return [...leftRange, '...', totalPages];
  }

  if (shouldShowLeftDots && !shouldShowRightDots) {
    let rightItemCount = 3 + 2 * siblingCount;
    let rightRange = Array.from({ length: rightItemCount }, (_, i) => totalPages - rightItemCount + i + 1);
    return [firstPageIndex, '...', ...rightRange];
  }

  if (shouldShowLeftDots && shouldShowRightDots) {
    let middleRange = Array.from({ length: rightSiblingIndex - leftSiblingIndex + 1 }, (_, i) => leftSiblingIndex + i);
    return [firstPageIndex, '...', ...middleRange, '...', lastPageIndex];
  }
};


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

  const paginationRange = generatePagination(currentPage, totalPages);

  return (
    <>
        <HeroBanner 
            imageUrl={bannerImage} 
            title="Ideas" 
            subtitle="Where all our great things begin" 
        />
      
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
                src={`https://picsum.photos/seed/${post.id}/600/400`} 
                alt={post.title} 
                className={styles.cardImage}
              />
              <div className={styles.cardMeta}>
                <span className={styles.date}>
                  {new Date(post.published_at).toLocaleDateString('id-ID', {
                    year: 'numeric', month: 'long', day: 'numeric'
                  })}
                </span>
                <h3 className={styles.cardTitle}>{post.title}</h3>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className={styles.pagination}>
        <button onClick={() => setCurrentPage(1)} disabled={currentPage === 1 || loading}>
          &laquo;
        </button>
        <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1 || loading}>
          &lsaquo;
        </button>
        {paginationRange?.map((page, index) => {
          if (page === '...') {
            return <span key={index} className={styles.dots}>&#8230;</span>;
          }
          return (
            <button
              key={index}
              onClick={() => setCurrentPage(page)}
              className={currentPage === page ? styles.active : ''}
              disabled={loading}
            >
              {page}
            </button>
          );
        })}
        <button onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === totalPages || loading}>
          &rsaquo;
        </button>
        <button onClick={() => setCurrentPage(totalPages)} disabled={currentPage === totalPages || loading}>
          &raquo;
        </button>
      </div>
    </>
  );
};

export default Ideas;