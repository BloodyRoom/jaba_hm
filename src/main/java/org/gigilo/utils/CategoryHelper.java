package org.gigilo.utils;

import org.gigilo.entities.CategoryEntity;
import org.hibernate.Session;

import java.util.Collections;
import java.util.List;

public class CategoryHelper {
    public void create(String name) {
        Session session = HibernateHelper.getSession();
        try {
            session.beginTransaction();
            session.persist(new CategoryEntity(name));
            session.getTransaction().commit();
        } catch (Exception e) {
            System.out.println("Create error: " + e);
        } finally {
            session.close();
        }
    }

    public List<CategoryEntity> read() {
        Session session = HibernateHelper.getSession();
        try {
            session.beginTransaction();
            List<CategoryEntity> list = session.createQuery("from CategoryEntity", CategoryEntity.class).list();
            session.getTransaction().commit();

            return list;
        } catch (Exception e) {
            System.out.println("Read error: " + e);
            return Collections.emptyList();
        } finally {
            session.close();
        }
    }

    public void update(int id, String name) {
        Session session = HibernateHelper.getSession();
        try {
            session.beginTransaction();

            CategoryEntity category = session.find(CategoryEntity.class, id);
            if (category != null) {
                category.setName(name);
            }

            session.getTransaction().commit();
        } catch (Exception e) {
            System.out.println("Update error: " + e);
        } finally {
            session.close();
        }
    }

    public void delete(int id) {
        Session session = HibernateHelper.getSession();
        try {
            session.beginTransaction();

            CategoryEntity category = session.find(CategoryEntity.class, id);
            if (category != null) {
                session.remove(category);
            }

            session.getTransaction().commit();
        } catch (Exception e) {
            System.out.println("Delete error: " + e);
        } finally {
            session.close();
        }
    }
}
