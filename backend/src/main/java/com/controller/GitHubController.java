package com.controller;

import com.service.GitHubService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/github")
@CrossOrigin(origins = "http://localhost:4200")
public class GitHubController {

    private final GitHubService gitHubService;

    public GitHubController(GitHubService gitHubService) {
        this.gitHubService = gitHubService;
    }

    @GetMapping("/repo")
    public Map<String, Object> getRepoInfo(@RequestParam String url) {
        return gitHubService.fetchGitHubRepoInfo(url);
    }

    @GetMapping("/contributors")
    public List<Map<String, Object>> getContributors(@RequestParam String url) {
        return gitHubService.fetchContributors(url);
    }
}

