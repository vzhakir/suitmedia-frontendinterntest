import React, { useState, useEffect, useMemo } from 'react';
import HeroBanner from '../components/HeroBanner'; // Path import diperbaiki
import styles from './Ideas.module.css';

// Mock data generation (can be moved to a separate file)
const generatePosts = () => Array.from({ length: 100 }).map((_, i) => ({
    id: i,
    title: i % 2 === 0
      ? 'Kenali Tingkatan Influencers berdasarkan Jumlah Followers'
      : 'Jangan Asal Pilih Influencer, Berikut Cara Menyusun Strategi Influencer Marketing',
    date: new Date(2023, 8, 5 + i),
    image: `https://picsum.photos/seed/${i}/600/338`,
  }));

const allPosts = generatePosts();

const Ideas = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(10);
  const [sortBy, setSortBy] = useState('newest');

  useEffect(() => {
    // Restore state from localStorage
    const savedState = JSON.parse(localStorage.getItem('ideasState'));
    if (savedState) {
      setCurrentPage(savedState.page || 1);
      setPerPage(savedState.perPage || 10);
      setSortBy(savedState.sort || 'newest');
    }
  }, []);

  useEffect(() => {
    // Save state to localStorage
    localStorage.setItem('ideasState', JSON.stringify({
      page: currentPage,
      perPage,
      sort: sortBy,
    }));
  }, [currentPage, perPage, sortBy]);

  const sortedPosts = useMemo(() => {
    return [...allPosts].sort((a, b) => {
      return sortBy === 'newest' ? b.date - a.date : a.date - b.date;
    });
  }, [sortBy]);

  const paginatedPosts = useMemo(() => {
    const start = (currentPage - 1) * perPage;
    return sortedPosts.slice(start, start + perPage);
  }, [currentPage, perPage, sortedPosts]);

  const totalPages = Math.ceil(sortedPosts.length / perPage);

  const handlePerPageChange = (e) => {
    setPerPage(Number(e.target.value));
    setCurrentPage(1);
  };

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
    setCurrentPage(1);
  };

  return (
    <> {/* Menggunakan Fragment <> */}
      <HeroBanner /> {/* Memanggil komponen HeroBanner */}

      <div className={styles.controls}>
        <div>Showing {(currentPage - 1) * perPage + 1}–{Math.min(currentPage * perPage, allPosts.length)} of {allPosts.length}</div>
        <div className={styles.filterControls}>
          <div>
            Show per page:
            <select value={perPage} onChange={handlePerPageChange}>
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="50">50</option>
            </select>
          </div>
          <div>
            Sort by:
            <select value={sortBy} onChange={handleSortChange}>
              <option value="newest">Newest</option>
              <option value="oldest">Oldest</option>
            </select>
          </div>
        </div>
      </div>

      <div className={styles.grid}>
        {paginatedPosts.map(post => (
          <div key={post.id} className={styles.card}>
            <img src={post.image} alt={post.title} />
            <div className={styles.cardMeta}>
              <span className={styles.date}>{post.date.toDateString()}</span>
              <h3 className={styles.cardTitle}>{post.title}</h3>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.pagination}>
        {[...Array(totalPages).keys()].map(num => (
          <button
            key={num + 1}
            onClick={() => setCurrentPage(num + 1)}
            className={currentPage === num + 1 ? styles.active : ''}
          >
            {num + 1}
          </button>
        ))}
      </div>
    </>
  );
};

export default Ideas;