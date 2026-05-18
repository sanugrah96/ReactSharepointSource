import * as React from 'react';
import { Link } from 'react-router-dom';
import styles from './Breadcrumb.module.scss';

export interface IBreadcrumbItem {
  label: string;
  path?: string;
}

export interface IBreadcrumbProps {
  items: IBreadcrumbItem[];
}

export const Breadcrumb: React.FC<IBreadcrumbProps> = ({ items }) => {
  return (
    <nav className={styles.breadcrumb} aria-label="Breadcrumb">
      <ol className={styles.breadcrumbList}>
        {items.map((item, index) => (
          <li key={index} className={styles.breadcrumbItem}>
            {item.path ? (
              <>
                <Link to={item.path} className={styles.breadcrumbLink}>
                  {item.label}
                </Link>
                {index < items.length - 1 && (
                  <span className={styles.breadcrumbSeparator} aria-hidden="true">/</span>
                )}
              </>
            ) : (
              <span className={styles.breadcrumbCurrent} aria-current="page">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};
