import React from 'react';
import { navigate } from 'gatsby';
import * as styles from './clothing.module.css';

import Banner from '../components/Banner';
import BreadCrumbs from '../components/Breadcrumbs';
import Container from '../components/Container';
import Layout from '../components/Layout';
import ProductCardGrid from '../components/ProductCardGrid';
import Title from '../components/Title';
import { generateMockProductData } from '../helpers/mock';
import { toOptimizedImage } from '../helpers/general';

const categories = [
  {
    title: 'Sweaters & Hoodies',
    description: 'Stay warm with our cozy knitwear collection',
    image: '/collections/collection1.png',
    link: '/shop',
  },
  {
    title: "Women's Wear",
    description: 'Modern styles for every occasion',
    image: '/collections/collection2.png',
    link: '/shop',
  },
  {
    title: 'T-Shirts',
    description: 'Everyday essentials in premium cotton',
    image: '/collections/collection3.png',
    link: '/shop',
  },
  {
    title: 'Jackets & Outerwear',
    description: 'Layer up with our seasonal outerwear',
    image: '/collections/collection4.png',
    link: '/shop',
  },
  {
    title: 'Trousers & Pants',
    description: 'From casual to formal, find your perfect fit',
    image: '/collections/collection1.png',
    link: '/shop',
  },
  {
    title: 'Accessories',
    description: 'Caps, scarves, bags and more',
    image: '/collections/collection3.png',
    link: '/shop',
  },
];

const ClothingPage = () => {
  const womenProducts = generateMockProductData(3, 'woman');
  const menProducts = generateMockProductData(3, 'shirt');

  return (
    <Layout>
      <div className={styles.root}>
        <Container size={'large'} spacing={'min'}>
          <div className={styles.breadcrumbContainer}>
            <BreadCrumbs
              crumbs={[
                { link: '/', label: 'Home' },
                { label: 'Clothing' },
              ]}
            />
          </div>
        </Container>

        <Banner
          maxWidth={'650px'}
          name={'Available Clothing'}
          subtitle={
            'Browse our curated collection of quality garments. From everyday essentials to statement pieces, find clothing that fits your style.'
          }
        />

        <Container size={'large'} spacing={'min'}>
          {/* Clothing Categories */}
          <div className={styles.categoriesContainer}>
            <Title name={'Shop by Category'} />
            <div className={styles.categoryGrid}>
              {categories.map((category, index) => (
                <div
                  key={index}
                  className={styles.categoryCard}
                  role={'presentation'}
                  onClick={() => navigate(category.link)}
                >
                  <img
                    className={styles.categoryImage}
                    src={toOptimizedImage(category.image)}
                    alt={category.title}
                  />
                  <div className={styles.overlay}></div>
                  <div className={styles.categoryContent}>
                    <span className={styles.categoryTitle}>
                      {category.title}
                    </span>
                    <span className={styles.categoryDescription}>
                      {category.description}
                    </span>
                    <span className={styles.categoryLink}>SHOP NOW</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Featured Women's Clothing */}
          <div className={styles.featuredSection}>
            <Title
              name={"Women's Picks"}
              link={'/shop'}
              textLink={'view all'}
            />
            <ProductCardGrid
              spacing={true}
              showSlider
              height={480}
              columns={3}
              data={womenProducts}
            />
          </div>

          {/* Featured Men's Clothing */}
          <div className={styles.featuredSection}>
            <Title
              name={"Men's Picks"}
              link={'/shop'}
              textLink={'view all'}
            />
            <ProductCardGrid
              spacing={true}
              showSlider
              height={480}
              columns={3}
              data={menProducts}
            />
          </div>
        </Container>
      </div>
    </Layout>
  );
};

export default ClothingPage;
