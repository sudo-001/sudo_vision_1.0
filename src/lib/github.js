import { Octokit } from "@octokit/rest";

export const octokit = new Octokit({
  auth: `Bearer ${process.env.GITHUB_TOKEN}`,
});