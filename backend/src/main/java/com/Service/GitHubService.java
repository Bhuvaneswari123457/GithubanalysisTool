package com.service;

import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.List;
import java.util.Map;

@Service
public class GitHubService {

    private final RestTemplate restTemplate = new RestTemplate();

    public Map<String, Object> fetchGitHubRepoInfo(String repoUrl) {
        String apiUrl = convertToApiUrl(repoUrl);
        return restTemplate.getForObject(apiUrl, Map.class);
    }

    public List<Map<String, Object>> fetchContributors(String repoUrl) {
        String[] parts = repoUrl.replace("https://github.com/", "").split("/");
        if (parts.length < 2) {
            throw new IllegalArgumentException("Invalid GitHub URL");
        }

        String apiUrl = "https://api.github.com/repos/" + parts[0] + "/" + parts[1] + "/contributors";
        return restTemplate.getForObject(apiUrl, List.class);
    }

    private String convertToApiUrl(String repoUrl) {
        String[] parts = repoUrl.replace("https://github.com/", "").split("/");
        if (parts.length < 2) {
            throw new IllegalArgumentException("Invalid GitHub URL");
        }
        return "https://api.github.com/repos/" + parts[0] + "/" + parts[1];
    }
}
