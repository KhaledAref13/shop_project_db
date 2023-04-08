BEGIN;

DROP TABLE IF EXISTS products, categories CASCADE;

CREATE TABLE categories (
  id SERIAL PRIMARY KEY,
  category VARCHAR(50) NOT NULL
);

CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  price FLOAT NOT NULL,
  description TEXT NOT NULL,
  image VARCHAR(500) NOT NULL,
  category_id INTEGER REFERENCES categories(id) ON UPDATE CASCADE
);

INSERT INTO categories (category) VALUES ('Laptops'),('Accessories');

INSERT INTO products
(
  name,
  price,
  description,
  image,
  category_id
)
  VALUES
  (
    'Laptop - Natural Silver',
    479.99,
    'Take it anywhere. See more. With its thin and light design, 6.5 mm micro-edge bezel display, and 82% screen to body ratio(40) take this PC anywhere and see and do more.',
    'https://i.ebayimg.com/images/g/XzUAAOSwkWVjk2hs/s-l500.jpg',
    1
  ),
  (
    'HyperX Cloud II Wireless - Gaming Headset (Black-Red)',
    139.99,
    'Save $10 instantly',
    'https://i.ebayimg.com/images/g/v84AAOSwmGRkJaMf/s-l500.png',
    2
  ),
  (
    'Microphone for PC Computer Laptop Gaming Streaming',
    69.99,
    'Stereo, cardioid, omnidirectional, and bidirectional recording
    High sensitivity and lossless sound | Adjustable gain.',
    'https://i.ebayimg.com/images/g/EogAAOSw5mtjDV2Z/s-l500.jpg',
    2
  );

COMMIT;