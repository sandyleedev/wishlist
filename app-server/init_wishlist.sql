-- init_wishlist.sql
-- Wishlist 테이블 생성
CREATE TABLE IF NOT EXISTS wishlist (
    wishlist_id VARCHAR(50) PRIMARY KEY,
    wishlist_title VARCHAR(255) NOT NULL
);

-- Wishlist Items 테이블 생성
CREATE TABLE IF NOT EXISTS wishlist_items (
    item_id SERIAL PRIMARY KEY,
    wishlist_id VARCHAR(50) REFERENCES wishlist(wishlist_id) ON DELETE CASCADE,
    title VARCHAR(255) NOT NULL,
    url TEXT,
    imgSrc VARCHAR(255)
);
