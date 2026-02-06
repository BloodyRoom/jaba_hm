package org.gigilo.utils;

import org.gigilo.entities.CategoryEntity;
import org.gigilo.entities.ProductEntity;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.boot.MetadataSources;
import org.hibernate.boot.registry.StandardServiceRegistry;
import org.hibernate.boot.registry.StandardServiceRegistryBuilder;

public class HibernateHelper {
    private static SessionFactory sessionFactory;

    // Буде викликатися автоматично коли буде 1 раз використовуватись даний клас
    static {
        final StandardServiceRegistry registry = new StandardServiceRegistryBuilder()
                .build();
        try {
            sessionFactory = new MetadataSources(registry)
                    .addAnnotatedClass(CategoryEntity.class)
                    .addAnnotatedClass(ProductEntity.class)
                    .buildMetadata()
                    .buildSessionFactory();
        } catch (Exception e) {
            System.out.println("Data base exception: " + e);
            StandardServiceRegistryBuilder.destroy(registry);
        }
    }

    public static SessionFactory getSessionFactory() {
        return sessionFactory;
    }

    public static Session getSession() {
        return sessionFactory.openSession();
    }

    public static void shutDown() {
        if (sessionFactory != null)
            sessionFactory.close();
    }
}
