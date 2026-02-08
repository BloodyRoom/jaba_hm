package org.example.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomeController {
    @GetMapping("/")
    public String home(Model model) {
        model.addAttribute("page", "home");
        return "layout";
    }

    @GetMapping("/register")
    public String register(Model model) {
        model.addAttribute("page", "register");
        return "layout";
    }

    @GetMapping("/login")
    public String login(Model model) {
        model.addAttribute("page", "login");
        return "layout";
    }
}
