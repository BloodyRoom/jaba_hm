package org.gigilo;


import org.gigilo.entities.CategoryEntity;
import org.gigilo.utils.CategoryHelper;
import org.gigilo.utils.HibernateHelper;

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {

        var session = HibernateHelper.getSession();
        CategoryHelper categories = new CategoryHelper();
        Scanner scanner = new Scanner(System.in);
        boolean running = true;

        while (running) {
            System.out.println("===== CATEGORY MENU =====");
            System.out.println("1. Create");
            System.out.println("2. Show all");
            System.out.println("3. Update");
            System.out.println("4. Delete");
            System.out.println("0. Exit");
            System.out.println("=========================");
            System.out.print("=> ");

            int choice = scanner.nextInt();
            scanner.nextLine();


            switch (choice) {
                case 1 -> {
                    System.out.print("Name: ");
                    categories.create(scanner.nextLine());
                }

                case 2 -> {
                    for (CategoryEntity c : categories.read()) {
                        System.out.println(c.getId() + " | " +  c.getName() + " | " +  c.getDateCreated());
                    }
                }

                case 3 -> {
                    System.out.print("ID: ");
                    int id = scanner.nextInt();
                    scanner.nextLine();

                    System.out.print("New name: ");
                    categories.update(id, scanner.nextLine());
                }

                case 4 -> {
                    System.out.print("ID: ");
                    categories.delete(scanner.nextInt());
                }

                case 0 -> running = false;

                default -> System.out.println("wrong option");
            }
        }
        scanner.close();
        HibernateHelper.getSessionFactory().close();
    }
}
